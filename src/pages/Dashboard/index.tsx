import { GetServerSidePropsContext, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";
import { DasboardLayout } from "../../layouts/dashboard";
import { fetchMutualGuilds } from "../../utils/api";
import { useLanguage } from "../../utils/translater/LanguageContext";
import { Guild, NextPageWithLayout } from "../../utils/types";

type Props = {
  guilds: Guild[];
};

const Dashboard: NextPageWithLayout<Props> = ({ guilds }) => {
  const { language } = useLanguage();

  return (
    <>
      <Head>
        <title>Lorix - Dashboard</title>
      </Head>
      <div className="p-4 sm:ml-64 mt-2">
        <div className="p-4 rounded-lg dark:border-gray-700 mt-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
            {guilds.map((g) => (
              <div
                key={g.id}
                className="w-full max-w-xs sm:max-w-sm md:max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="flex flex-col items-center p-6">
                  <Image
                    priority
                    src={`https://cdn.discordapp.com/icons/${g.id}/${g.icon}`}
                    alt={g.name}
                    className="mb-3 rounded-full shadow-lg"
                    width={96}
                    height={96}
                  />
                  <h5 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                    {g.name}
                  </h5>
                  <div className="flex mt-4">
                    <a
                      href={`/Dashboard/${g.id}`}
                      type="button"
                      className="inline-flex cursor-pointer items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      {language === "en" && "Configure"}
                      {language === "pt" && "Configurar"}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

Dashboard.getLayout = function (page: ReactElement) {
  return <DasboardLayout>{page}</DasboardLayout>;
};

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  return fetchMutualGuilds(ctx);
}

export default Dashboard;
