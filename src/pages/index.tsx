import Image from "next/image";
import { DiscordLogoIcon, PlusIcon } from "@radix-ui/react-icons";
import heroImage from "../assets/images/hero/image.png";
import rodrigoFoto from "../assets/images/equipa/rodrigofoto.jpg";
import shape1 from "../assets/images/footer/shape-1.svg";
import shape3 from "../assets/images/footer/shape-1.svg";
import Link from "next/link";
import { useLanguage } from "../utils/translater/LanguageContext";
import { Navbar } from "../components/Global/navbar";

const Home = () => {
  const { language } = useLanguage();
  return (
    <>
      <Navbar />
      {/*Hero First Start*/}
      <div
        id="home"
        className="relative overflow-hidden bg-gray-800 pt-[120px] md:pt-[130px] lg:pt-[160px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div
                className="hero-content wow fadeInUp mx-auto max-w-[780px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  {language === "en" &&
                    "Maximize your resources with Lorix: your partner in economics and administration."}
                  {language === "pt" &&
                    "Maximize seus recursos com Lorix: seu parceiro em economia e administração."}
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  {language === "en" &&
                    "Multiple mini-games and lots of fun controls!"}
                  {language === "pt" &&
                    "Multiplos minis jogos e varios comandos divertidos!"}
                </p>
                <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                  <li>
                    <a
                      href="https://discord.com/oauth2/authorize?client_id=1176840691448553562&permissions=8&scope=bot"
                      target="_blank"
                      className="flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-green-500 hover:text-dark"
                    >
                      <PlusIcon />
                      {language === "en" && "Add Me"}
                      {language === "pt" && "Me Adicione"}
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discord.gg/kRxXuW7Pwc"
                      target="_blank"
                      className="flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-green-500 hover:text-dark"
                    >
                      <DiscordLogoIcon />
                      {language === "en" && "Suport Server"}
                      {language === "pt" && "Suporte"}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4">
              <div
                className="wow fadeInUp relative z-10 mx-auto max-w-[845px]"
                data-wow-delay=".25s"
              >
                <div className="mt-16">
                  <Image
                    src={heroImage}
                    alt="hero-image"
                    className="mx-auto max-w-full rounded-t-xl rounded-tr-xl"
                  />
                </div>
                <div className="absolute -left-9 bottom-0 z-[-1]">
                  <svg
                    width="134"
                    height="106"
                    viewBox="0 0 134 106"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="1.66667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 1.66667 104)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 16.3333 104)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 31 104)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 45.6667 104)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 60.3333 104)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 88.6667 104)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 117.667 104)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 74.6667 104)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 103 104)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 132 104)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 1.66667 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 16.3333 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 31 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 45.6667 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 60.3333 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 88.6667 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 117.667 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 74.6667 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 103 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 132 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="74.6673"
                      r="1.66667"
                      transform="rotate(-90 1.66667 74.6673)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 1.66667 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 16.3333 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 16.3333 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 31 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 31 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 45.6667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 45.6667 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 60.3333 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 60.3333 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 88.6667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 88.6667 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 117.667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 117.667 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 74.6667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 74.6667 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 103 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 103 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 132 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 132 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 1.66667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 1.66667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 16.3333 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 16.3333 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 31 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 31 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 45.6667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 45.6667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 60.3333 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 60.3333 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 88.6667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 88.6667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 117.667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 117.667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 74.6667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 74.6667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 103 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 103 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 132 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 132 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 1.66667 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 1.66667 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 16.3333 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 16.3333 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 31 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 31 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 45.6667 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 45.6667 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 60.3333 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 60.3333 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 88.6667 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 88.6667 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 117.667 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 117.667 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 74.6667 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 74.6667 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 103 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 103 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 132 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 132 1.66707)"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="absolute -right-6 -top-6 z-[-1]">
                  <svg
                    width="134"
                    height="106"
                    viewBox="0 0 134 106"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="1.66667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 1.66667 104)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 16.3333 104)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 31 104)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 45.6667 104)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 60.3333 104)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 88.6667 104)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 117.667 104)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 74.6667 104)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 103 104)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="104"
                      r="1.66667"
                      transform="rotate(-90 132 104)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 1.66667 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 16.3333 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 31 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="89.3333"
                      r="1.66667"
                      transform="rotate(-90 45.6667 89.3333)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 60.3333 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 88.6667 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 117.667 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 74.6667 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 103 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="89.3338"
                      r="1.66667"
                      transform="rotate(-90 132 89.3338)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="74.6673"
                      r="1.66667"
                      transform="rotate(-90 1.66667 74.6673)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 1.66667 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 16.3333 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 16.3333 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 31 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 31 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 45.6667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="31.0003"
                      r="1.66667"
                      transform="rotate(-90 45.6667 31.0003)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 60.3333 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 60.3333 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 88.6667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 88.6667 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 117.667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 117.667 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 74.6667 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 74.6667 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 103 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 103 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="74.6668"
                      r="1.66667"
                      transform="rotate(-90 132 74.6668)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="31.0001"
                      r="1.66667"
                      transform="rotate(-90 132 31.0001)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 1.66667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 1.66667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 16.3333 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 16.3333 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 31 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 31 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 45.6667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 45.6667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 60.3333 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 60.3333 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 88.6667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 88.6667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 117.667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 117.667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 74.6667 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 74.6667 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 103 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 103 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="60.0003"
                      r="1.66667"
                      transform="rotate(-90 132 60.0003)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="16.3336"
                      r="1.66667"
                      transform="rotate(-90 132 16.3336)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 1.66667 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="1.66667"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 1.66667 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 16.3333 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="16.3333"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 16.3333 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 31 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="31"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 31 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="45.3336"
                      r="1.66667"
                      transform="rotate(-90 45.6667 45.3336)"
                      fill="white"
                    />
                    <circle
                      cx="45.6667"
                      cy="1.66683"
                      r="1.66667"
                      transform="rotate(-90 45.6667 1.66683)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 60.3333 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="60.3333"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 60.3333 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 88.6667 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="88.6667"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 88.6667 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 117.667 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="117.667"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 117.667 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 74.6667 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="74.6667"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 74.6667 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 103 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="103"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 103 1.66707)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="45.3338"
                      r="1.66667"
                      transform="rotate(-90 132 45.3338)"
                      fill="white"
                    />
                    <circle
                      cx="132"
                      cy="1.66707"
                      r="1.66667"
                      transform="rotate(-90 132 1.66707)"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Hero First End*/}
      {/*Features Section Start*/}
      <section className="pb-8 pt-20 dark:bg-dark lg:pb-[70px] lg:pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  {language === "en" && "Features"}
                  {language === "pt" && "Funcionalidades"}
                </span>
                <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
                  {language === "en" && "Main Features Of Bot"}
                  {language === "pt" && "Principais funcionalidades do bot"}
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  {language === "en" &&
                    "There are many variations of commands to use."}
                  {language === "pt" &&
                    "Existem muitas variações de comandos, para serem usados."}
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <div className="wow fadeInUp group mb-12" data-wow-delay=".1s">
                <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                  <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M11.7255 17.1019C11.6265 16.8844 11.4215 16.7257 11.1734 16.6975C10.9633 16.6735 10.7576 16.6285 10.562 16.5636C10.4743 16.5341 10.392 16.5019 10.3158 16.4674L10.4424 16.1223C10.5318 16.1622 10.6239 16.1987 10.7182 16.2317L10.7221 16.2331L10.7261 16.2344C11.0287 16.3344 11.3265 16.3851 11.611 16.3851C11.8967 16.3851 12.1038 16.3468 12.2629 16.2647L12.2724 16.2598L12.2817 16.2544C12.5227 16.1161 12.661 15.8784 12.661 15.6021C12.661 15.2955 12.4956 15.041 12.2071 14.9035C12.062 14.8329 11.8559 14.7655 11.559 14.6917C11.2545 14.6147 10.9987 14.533 10.8003 14.4493C10.6553 14.3837 10.5295 14.279 10.4161 14.1293C10.3185 13.9957 10.2691 13.7948 10.2691 13.5319C10.2691 13.2147 10.3584 12.9529 10.5422 12.7315C10.7058 12.5375 10.9381 12.4057 11.2499 12.3318C11.4812 12.277 11.6616 12.1119 11.7427 11.8987C11.8344 12.1148 12.0295 12.2755 12.2723 12.3142C12.4751 12.3465 12.6613 12.398 12.8287 12.4677L12.7122 12.8059C12.3961 12.679 12.085 12.6149 11.7841 12.6149C10.7848 12.6149 10.7342 13.3043 10.7342 13.4425C10.7342 13.7421 10.896 13.9933 11.1781 14.1318L11.186 14.1357L11.194 14.1393C11.3365 14.2029 11.5387 14.2642 11.8305 14.3322C12.1322 14.4004 12.3838 14.4785 12.5815 14.5651L12.5856 14.5669L12.5897 14.5686C12.7365 14.6297 12.8624 14.7317 12.9746 14.8805L12.9764 14.8828L12.9782 14.8852C13.0763 15.012 13.1261 15.2081 13.1261 15.4681C13.1261 15.7682 13.0392 16.0222 12.8604 16.2447C12.7053 16.4377 12.4888 16.5713 12.1983 16.6531C11.974 16.7163 11.8 16.8878 11.7255 17.1019Z"
                        fill="#ffffff"
                      ></path>{" "}
                      <path
                        d="M11.9785 18H11.497C11.3893 18 11.302 17.9105 11.302 17.8V17.3985C11.302 17.2929 11.2219 17.2061 11.1195 17.1944C10.8757 17.1667 10.6399 17.115 10.412 17.0394C10.1906 16.9648 9.99879 16.8764 9.83657 16.7739C9.76202 16.7268 9.7349 16.6312 9.76572 16.5472L10.096 15.6466C10.1405 15.5254 10.284 15.479 10.3945 15.5417C10.5437 15.6262 10.7041 15.6985 10.8755 15.7585C11.131 15.8429 11.3762 15.8851 11.611 15.8851C11.8129 15.8851 11.9572 15.8628 12.0437 15.8181C12.1302 15.7684 12.1735 15.6964 12.1735 15.6021C12.1735 15.4929 12.1158 15.411 12.0004 15.3564C11.8892 15.3018 11.7037 15.2422 11.4442 15.1777C11.1104 15.0933 10.8323 15.0039 10.6098 14.9096C10.3873 14.8103 10.1936 14.6514 10.0288 14.433C9.86396 14.2096 9.78156 13.9092 9.78156 13.5319C9.78156 13.095 9.91136 12.7202 10.1709 12.4074C10.4049 12.13 10.7279 11.9424 11.1401 11.8447C11.2329 11.8227 11.302 11.7401 11.302 11.6425V11.2C11.302 11.0895 11.3893 11 11.497 11H11.9785C12.0862 11 12.1735 11.0895 12.1735 11.2V11.6172C12.1735 11.7194 12.2487 11.8045 12.3471 11.8202C12.7082 11.8777 13.0255 11.9866 13.2989 12.1469C13.3765 12.1924 13.4073 12.2892 13.3775 12.3756L13.0684 13.2725C13.0275 13.3914 12.891 13.4417 12.7812 13.3849C12.433 13.2049 12.1007 13.1149 11.7841 13.1149C11.4091 13.1149 11.2216 13.2241 11.2216 13.4425C11.2216 13.5468 11.2773 13.6262 11.3885 13.6809C11.4998 13.7305 11.6831 13.7851 11.9386 13.8447C12.2682 13.9192 12.5464 14.006 12.773 14.1053C12.9996 14.1996 13.1953 14.356 13.3602 14.5745C13.5291 14.7929 13.6136 15.0908 13.6136 15.4681C13.6136 15.8851 13.4879 16.25 13.2365 16.5628C13.0176 16.8354 12.7145 17.0262 12.3274 17.1353C12.2384 17.1604 12.1735 17.2412 12.1735 17.3358V17.8C12.1735 17.9105 12.0862 18 11.9785 18Z"
                        fill="#ffffff"
                      ></path>{" "}
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.59235 5H13.8141C14.8954 5 14.3016 6.664 13.8638 7.679L13.3656 8.843L13.2983 9C13.7702 8.97651 14.2369 9.11054 14.6282 9.382C16.0921 10.7558 17.2802 12.4098 18.1256 14.251C18.455 14.9318 18.5857 15.6958 18.5019 16.451C18.4013 18.3759 16.8956 19.9098 15.0182 20H8.38823C6.51033 19.9125 5.0024 18.3802 4.89968 16.455C4.81587 15.6998 4.94656 14.9358 5.27603 14.255C6.12242 12.412 7.31216 10.7565 8.77823 9.382C9.1696 9.11054 9.63622 8.97651 10.1081 9L10.0301 8.819L9.54263 7.679C9.1068 6.664 8.5101 5 9.59235 5Z"
                        stroke="#ffffff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>{" "}
                      <path
                        d="M13.2983 9.75C13.7125 9.75 14.0483 9.41421 14.0483 9C14.0483 8.58579 13.7125 8.25 13.2983 8.25V9.75ZM10.1081 8.25C9.69391 8.25 9.35812 8.58579 9.35812 9C9.35812 9.41421 9.69391 9.75 10.1081 9.75V8.25ZM15.9776 8.64988C16.3365 8.44312 16.4599 7.98455 16.2531 7.62563C16.0463 7.26671 15.5878 7.14336 15.2289 7.35012L15.9776 8.64988ZM13.3656 8.843L13.5103 9.57891L13.5125 9.57848L13.3656 8.843ZM10.0301 8.819L10.1854 8.08521L10.1786 8.08383L10.0301 8.819ZM8.166 7.34357C7.80346 7.14322 7.34715 7.27469 7.1468 7.63722C6.94644 7.99976 7.07791 8.45607 7.44045 8.65643L8.166 7.34357ZM13.2983 8.25H10.1081V9.75H13.2983V8.25ZM15.2289 7.35012C14.6019 7.71128 13.9233 7.96683 13.2187 8.10752L13.5125 9.57848C14.3778 9.40568 15.2101 9.09203 15.9776 8.64988L15.2289 7.35012ZM13.2209 8.10709C12.2175 8.30441 11.1861 8.29699 10.1854 8.08525L9.87486 9.55275C11.0732 9.80631 12.3086 9.81521 13.5103 9.57891L13.2209 8.10709ZM10.1786 8.08383C9.47587 7.94196 8.79745 7.69255 8.166 7.34357L7.44045 8.65643C8.20526 9.0791 9.02818 9.38184 9.88169 9.55417L10.1786 8.08383Z"
                        fill="#ffffff"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
                <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                  {language === "en" && "Money"}
                  {language === "pt" && "Dinheiro"}
                </h4>
                <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                  {language === "en" && "Earn money using mini-game controls"}
                  {language === "pt" &&
                    "Ganhe dinheiro usando comandos de mini jogos"}
                </p>
                <a
                  href=""
                  className="text-base font-medium text-dark hover:text-gray-400 dark:text-white dark:hover:text-gray-400"
                >
                  {language === "en" && "Learn More"}
                  {language === "pt" && "Ler Sobre"}
                </a>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <div className="wow fadeInUp group mb-12" data-wow-delay=".15s">
                <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                  <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                  <svg
                    height="200px"
                    width="200px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 55.017 55.017"
                    xmlSpace="preserve"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <path
                          style={{ fill: "#ffffff" }}
                          d="M39.685,2.11c0,0,0.105-1.494-1.062-1.678c-0.308-0.049-0.606,0.093-0.847,0.356 c0,0.001-0.646,0.407-1.064-0.169c-0.011-0.013-0.021-0.026-0.029-0.038c-0.146-0.305-0.385-0.519-0.68-0.565 c-1.17-0.186-1.529,1.268-1.529,1.268l-0.451,1.875l5.515,0.875L39.685,2.11z M30.556,4.535l11.85,1.879 c0.22,0.034,0.425-0.115,0.459-0.333l-3.284-1.542l-5.733-0.91l-3.619,0.447C30.186,4.296,30.337,4.5,30.556,4.535z M46.522,26.291 c-0.818-3.609-0.463-7.375-1.658-10.933c-0.34-1.835-2.271-3.034-4.986-3.812L35.44,15.92l0.564-2.037L33.91,13.58l-0.048,2.573 l-2.771-5.831c-4.92-0.241-9.983-0.014-13.024,0.119V8.407h-0.604L17.7,7.898l-0.366-0.171l-0.317,0.68H9.451V7.834H8.967v0.573 H8.421l0.646,2.398h5.477c-2.056,1.072-1.662,4.878,1.2,4.878c2.821,0,9.516,0,12.336,0c0.004,0.091,0.001,0.183,0.01,0.276 c0.272,3.351-0.048,8.79-0.27,11.585l3.82,0.671l-0.149,0.902l-3.808-0.67c-3.003,7.343-4.177,15.689-4.775,23.545 c-0.292,3.861,5.71,3.832,6.002,0c0.436-5.754,1.265-11.75,2.949-17.375c0.336,0.096,0.688,0.166,1.05,0.199 c0.128,0.013,0.253,0.015,0.38,0.019c0.452,5.933,0.861,12.42,1.666,18.005c0.549,3.816,6.33,2.188,5.787-1.596 c-0.898-6.25-1.205-13.868-1.758-20.154c-0.01-0.126-0.026-0.246-0.051-0.361c0.026-0.095,0.047-0.189,0.069-0.287l-3.51-0.617 l0.151-0.902l3.504,0.616c0.091-0.986,0.697-8.047,0.435-13.337c0.433,0.638,0.663,1.632,0.907,2.848 c0.568,2.84,0.41,5.787,1.053,8.617C42.278,30.911,47.257,29.533,46.522,26.291z M33.781,21.162c0.379,0,0.684,0.305,0.684,0.682 c0,0.378-0.305,0.684-0.684,0.684c-0.377,0-0.685-0.306-0.685-0.684C33.099,21.467,33.403,21.162,33.781,21.162z M33.63,23.724 c0.378,0,0.684,0.305,0.684,0.683s-0.306,0.684-0.684,0.684c-0.377,0-0.684-0.306-0.684-0.684 C32.946,24.029,33.253,23.724,33.63,23.724z M34.895,29.484l-2.738-0.461l0.115-0.693l2.735,0.479L34.895,29.484z M38.31,7.321 l0.347,0.056l0.137-0.88L31.977,5.33l-0.14,0.88l0.347,0.053c-0.16,0.997,0.521,1.933,1.518,2.09 c0.996,0.157,1.933-0.521,2.09-1.518l0.934,0.148L38.31,7.321z M36.19,12.611l-2.096-0.304l0.232-1.597l2.096,0.304L36.19,12.611z"
                        ></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </div>
                <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                  {language === "en" && "Rob"}
                  {language === "pt" && "Roubar"}
                </h4>
                <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                  {language === "en" &&
                    "Command Steal when using the command a player must be selected when selecting you steal an amount of money available in the player's hand"}
                  {language === "pt" &&
                    "Comando Roubar ao usar o comando deve de ser selecionado um player ao selecionar você rouba uma quantida do dinheiro disponível na mão do player"}
                </p>
                <a
                  href=""
                  className="text-base font-medium text-dark hover:text-gray-400 dark:text-white dark:hover:text-gray-400"
                >
                  {language === "en" && "Learn More"}
                  {language === "pt" && "Ler Sobre"}
                </a>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <div className="wow fadeInUp group mb-12" data-wow-delay=".2s">
                <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                  <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                  <svg
                    height="144px"
                    width="144px"
                    version="1.1"
                    id="_x32_"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier" style={{ fill: "#ffffff" }}>
                      {" "}
                      <g>
                        {" "}
                        <path
                          className="st0"
                          d="M262.139,212.836c85.578-0.951,150.552-45.186,162.336-76.932c14.514-39.034-65.814-18.948-65.814-18.948 S346.099,21.002,314.019,4.264c-27.904-14.575-36.983,12.76-51.88,14.416c-14.86-1.656-23.939-28.991-51.88-14.416 c-32.042,16.738-44.605,112.692-44.605,112.692S85.325,96.87,99.827,135.904C111.611,167.65,176.573,211.885,262.139,212.836z"
                        ></path>{" "}
                        <path
                          className="st0"
                          d="M368.963,254.723h-11.933c-9.536,28.62-42.937,52.473-93.829,52.473c-37.119,0-64.875-12.722-80.909-30.708 c0.864-2.322,1.408-4.818,1.408-7.46c0-11.637-9.289-21.049-20.851-21.394c-10.029-15.268-28.51-34.674-55.487-28.695 c-0.964,13.563,5.609,26.298,15.293,35.575c-14.106,1.828-28.559,8.054-36.884,24.248c15.811,15.168,42.369,14.044,59.564,3.385 c3.668,4.705,9.202,7.807,15.514,8.214c17.973,91.396,102.353,113.05,102.353,113.05S368.963,376.37,368.963,254.723z"
                        ></path>{" "}
                        <path
                          className="st0"
                          d="M110.994,455.711c0,0,4.966-0.631,4.274,3.915c-0.394,4.657-5.57,34.18-5.756,35.452 c-0.21,1.26-0.803,1.061-0.803,1.061s-0.791,0.198-1.099-1.061c-0.197-1.272-5.065-30.795-5.768-35.452 c-0.396-4.546,4.583-3.915,4.583-3.915v-10.994H83.251v10.994c0,0,4.977-0.631,4.582,3.915c-0.606,4.657-5.769,34.18-5.979,35.452 c-0.185,1.26-0.889,1.061-0.889,1.061s-0.791,0.198-0.988-1.061c-0.21-1.272-5.163-30.795-5.572-35.452 c-0.592-4.546,4.274-3.915,4.274-3.915v-10.994H54.519v10.994c0,0,4.583-0.631,5.374,3.915c0.889,5.287,9.338,47.718,9.733,52.374 h18.999c0.197-1.802,1.481-8.572,3.075-16.922c1.705,8.35,2.989,15.119,3.188,16.922h29.534c0.396-4.656,8.846-46.864,9.945-52.374 c0.592-4.546,4.977-3.915,4.977-3.915v-10.994h-28.349V455.711z"
                        ></path>{" "}
                        <path
                          className="st0"
                          d="M194.299,497.079c-0.79-5.497-9.536-47.705-9.931-52.363h-29.535c-0.395,4.658-8.857,47.286-9.746,52.363 c-0.791,4.558-5.361,3.915-5.361,3.915V512h26.842v-11.006c0,0-5.163,0.642-4.484-3.915c0-0.94,0.395-3.273,0.802-5.917h11.538 c0.493,2.644,0.889,4.978,1.086,5.917c0.395,4.558-4.57,3.915-4.57,3.915V512h28.336v-11.006 C199.277,500.994,195.102,501.637,194.299,497.079z M164.579,480.378c1.594-8.795,3.089-17.898,3.089-18.738 c0.185-1.272,0.988-1.062,0.988-1.062s0.606-0.21,0.889,1.062c0,0.84,1.594,9.943,3.089,18.738H164.579z"
                        ></path>{" "}
                        <path
                          className="st0"
                          d="M243.623,455.711c0,0,4.966-0.631,4.966,3.915c0,4.657,0,18.739,0,18.739s0,1.581,0,3.694 c0,0-13.217-32.685-14.316-34.921c-1.001-2.224-5.373-2.421-3.879-2.421c1.384,0-25.248,0-25.248,0v10.994 c0,0,5.558-0.631,5.558,3.915c0,4.657,0,18.739,0,18.739s0,14.057,0,18.714c0,4.558-5.558,3.915-5.558,3.915V512h27.941v-11.006 c0,0-5.571,0.642-5.571-3.915v-29.3c0,0,16.503,40.739,17.096,41.788c0.395,1.173,1.89,2.432,4.187,2.432 c2.273,0,19.381,0,19.381,0v-11.006c0,0-4.768,0.642-4.768-3.915c0-4.657,0-18.714,0-18.714s0-14.082,0-18.739 c0-4.546,4.768-3.915,4.768-3.915v-10.994h-24.557V455.711z"
                        ></path>{" "}
                        <path
                          className="st0"
                          d="M273.948,465.333h7.646c0-3.274,0-8.351,4.583-9.401c1.779-0.433,3.878-0.222,3.878-0.222 s5.559-0.631,5.559,3.915c0,4.657,0,18.739,0,18.739s0,14.057,0,18.714c0,4.558-5.559,3.915-5.559,3.915V512h28.337v-11.006 c0,0-5.768,0.642-5.768-3.915c0-4.657,0-18.714,0-18.714s0-14.082,0-18.739c0-4.546,5.768-3.915,5.768-3.915 s1.878-0.211,3.669,0.222c4.583,1.05,4.583,6.127,4.583,9.401h7.646v-20.617h-60.342V465.333z"
                        ></path>{" "}
                        <path
                          className="st0"
                          d="M339.947,455.711c0,0,5.571-0.631,5.571,3.915c0,4.657,0,18.739,0,18.739s0,14.057,0,18.714 c0,4.558-5.571,3.915-5.571,3.915V512h51.51v-24.655h-8.251c0,3.286-0.704,13.65-6.658,13.65c-4.076,0-6.362,0-6.362,0 s-5.571,0.642-5.571-3.915v-11.946c0-2.334,2.199-2.124,2.199-2.124s0.494,0,2.668,0c3.384,0,3.582,5.718,3.582,7.411h4.484 v-22.222h-4.484c0,2.012-0.198,7.522-3.582,7.522c-2.174,0-2.668,0-2.668,0s-2.199,0.42-2.199-2.236v-13.859 c0-4.546,5.571-3.915,5.571-3.915s2.285,0,6.362,0c5.954,0,6.658,10.364,6.658,13.86h8.251v-24.854h-51.51V455.711z"
                        ></path>{" "}
                        <path
                          className="st0"
                          d="M432.529,444.716h-35.204v10.994c0,0,5.768-0.631,5.768,3.915c0,4.657,0,18.739,0,18.739s0,14.057,0,18.714 c0,4.558-5.768,3.915-5.768,3.915V512h35.204c13.823,0,24.953-9.832,24.953-28.769v-9.943 C457.481,454.55,446.351,444.716,432.529,444.716z M434.123,494.436c0,3.705-2.89,6.559-6.374,6.559c0,0-5.756,0.642-5.756-3.915 c0-4.657,0-18.714,0-18.714s0-14.082,0-18.739c0-4.546,5.756-3.915,5.756-3.915c3.484,0,6.374,2.852,6.374,6.349V494.436z"
                        ></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </div>
                <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                  {language === "en" && "Crime"}
                  {language === "pt" && "Crime"}
                </h4>
                <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                  {language === "en" &&
                    "By using this command you will commit a crime by committing the crime you have the chance of being caught by the police if not you will commit a crime and earn money"}
                  {language === "pt" &&
                    "Ao usar este comando você irá cometer um crime ao cometer o crime tem a hipote-se de ser apanhado pela policia caso não seja você ira cometer um delito e ganhara dinheiro"}
                </p>
                <a
                  href=""
                  className="text-base font-medium text-dark hover:text-gray-400 dark:text-white dark:hover:text-gray-400"
                >
                  {language === "en" && "Learn More"}
                  {language === "pt" && "Ler Sobre"}
                </a>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <div className="wow fadeInUp group mb-12" data-wow-delay=".25s">
                <div className="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
                  <span className="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
                  <svg
                    version="1.1"
                    id="Icons"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 32 32"
                    xmlSpace="preserve"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <style type="text/css">
                        {`
                      .st1 {
                        fill: none;
                        stroke: #ffffff;
                        strokeWidth: 2;
                        strokeLinecap: round;
                        strokeLinejoin: round;
                        strokeMiterlimit: 10;
                      }
                    `}
                      </style>
                      <path
                        className="st1"
                        d="M25,29H1V9c0-3.3,2.7-6,6-6h12c3.3,0,6,2.7,6,6V29z"
                      ></path>
                      <rect
                        x="9"
                        y="11"
                        className="st1"
                        width="8"
                        height="10"
                      ></rect>
                      <rect
                        x="1"
                        y="11"
                        className="st1"
                        width="8"
                        height="10"
                      ></rect>
                      <rect
                        x="17"
                        y="11"
                        className="st1"
                        width="8"
                        height="10"
                      ></rect>
                      <line
                        className="st1"
                        x1="9"
                        y1="25"
                        x2="16"
                        y2="25"
                      ></line>
                      <circle className="st1" cx="29" cy="5" r="2"></circle>
                      <polyline
                        className="st1"
                        points="25,19 29,19 29,7 "
                      ></polyline>
                      <path
                        className="st1"
                        d="M4,14h2l-0.6,0.6C4.5,15.5,4,16.7,4,18v0"
                      ></path>
                      <path
                        className="st1"
                        d="M12,14h2l-0.6,0.6C12.5,15.5,12,16.7,12,18v0"
                      ></path>
                      <path
                        className="st1"
                        d="M20,14h2l-0.6,0.6C20.5,15.5,20,16.7,20,18v0"
                      ></path>
                    </g>
                  </svg>
                </div>
                <h4 className="mb-3 text-xl font-bold text-dark dark:text-white">
                  {language === "en" && "Slot machines"}
                  {language === "pt" && "Caça-níqueis"}
                </h4>
                <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
                  {language === "en" &&
                    "In Slots you bet an amount and you may be lucky enough to win, if you win you double the amount you bet."}
                  {language === "pt" &&
                    "No Caça-níqueis Você ira apostar um valor podera ter a sorte de ganhar se ganhar duplica a quantidade apostada"}
                </p>
                <a
                  href=""
                  className="text-base font-medium text-dark hover:text-gray-400 dark:text-white dark:hover:text-gray-400"
                >
                  {language === "en" && "Learn More"}
                  {language === "pt" && "Ler Sobre"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Features Section End*/}
      {/*Team Section Start*/}
      <section
        id="team"
        className="overflow-hidden bg-gray-100 pb-12 pt-20 dark:bg-dark-2 lg:pb-[90px] lg:pt-[120px]"
      >
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[485px] text-center">
                <span className="mb-2 block text-lg font-semibold text-primary">
                  {language === "en" && "Our Team Members."}
                  {language === "pt" && "Os membros da nossa equipa."}
                </span>
                <p className="text-base text-body-color dark:text-dark-6">
                  {language === "en" &&
                    "Together we are stronger, towards success with Lorix: one team, one goal!"}
                  {language === "pt" &&
                    "Juntos somos mais fortes, rumo ao sucesso com Lorix: uma equipe, um objetivo!"}
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 sm:w-1/2 lg:w-1/4 xl:w-1/4">
              <div className="group mb-8 rounded-xl bg-white px-5 pb-10 pt-12 shadow-testimonial dark:bg-dark dark:shadow-none">
                <div className="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
                  <Image
                    src={rodrigoFoto}
                    alt="Rodrigo"
                    className="h-[120px] w-[120px] rounded-full"
                  />
                  <span className="absolute bottom-0 left-0 -z-10 h-10 w-10 rounded-full bg-green-500 opacity-0 transition-all group-hover:opacity-100"></span>
                  <span className="absolute right-0 top-0 -z-10 opacity-0 transition-all group-hover:opacity-100">
                    <svg
                      width="55"
                      height="53"
                      viewBox="0 0 55 53"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.5118 3.1009C13.3681 3.1009 14.0622 2.40674 14.0622 1.55045C14.0622 0.69416 13.3681 0 12.5118 0C11.6555 0 10.9613 0.69416 10.9613 1.55045C10.9613 2.40674 11.6555 3.1009 12.5118 3.1009Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.5038 3.1009C23.3601 3.1009 24.0543 2.40674 24.0543 1.55045C24.0543 0.69416 23.3601 0 22.5038 0C21.6475 0 20.9534 0.69416 20.9534 1.55045C20.9534 2.40674 21.6475 3.1009 22.5038 3.1009Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M32.4958 3.1009C33.3521 3.1009 34.0463 2.40674 34.0463 1.55045C34.0463 0.69416 33.3521 0 32.4958 0C31.6395 0 30.9454 0.69416 30.9454 1.55045C30.9454 2.40674 31.6395 3.1009 32.4958 3.1009Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M42.4875 3.1009C43.3438 3.1009 44.038 2.40674 44.038 1.55045C44.038 0.69416 43.3438 0 42.4875 0C41.6312 0 40.9371 0.69416 40.9371 1.55045C40.9371 2.40674 41.6312 3.1009 42.4875 3.1009Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M52.4795 3.1009C53.3358 3.1009 54.03 2.40674 54.03 1.55045C54.03 0.69416 53.3358 0 52.4795 0C51.6233 0 50.9291 0.69416 50.9291 1.55045C50.9291 2.40674 51.6233 3.1009 52.4795 3.1009Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.52045 13.0804C3.37674 13.0804 4.0709 12.3862 4.0709 11.5299C4.0709 10.6737 3.37674 9.97949 2.52045 9.97949C1.66416 9.97949 0.970001 10.6737 0.970001 11.5299C0.970001 12.3862 1.66416 13.0804 2.52045 13.0804Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.5118 13.0804C13.3681 13.0804 14.0622 12.3862 14.0622 11.5299C14.0622 10.6737 13.3681 9.97949 12.5118 9.97949C11.6555 9.97949 10.9613 10.6737 10.9613 11.5299C10.9613 12.3862 11.6555 13.0804 12.5118 13.0804Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.5038 13.0804C23.3601 13.0804 24.0543 12.3862 24.0543 11.5299C24.0543 10.6737 23.3601 9.97949 22.5038 9.97949C21.6475 9.97949 20.9534 10.6737 20.9534 11.5299C20.9534 12.3862 21.6475 13.0804 22.5038 13.0804Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M32.4958 13.0804C33.3521 13.0804 34.0463 12.3862 34.0463 11.5299C34.0463 10.6737 33.3521 9.97949 32.4958 9.97949C31.6395 9.97949 30.9454 10.6737 30.9454 11.5299C30.9454 12.3862 31.6395 13.0804 32.4958 13.0804Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M42.4875 13.0804C43.3438 13.0804 44.038 12.3862 44.038 11.5299C44.038 10.6737 43.3438 9.97949 42.4875 9.97949C41.6312 9.97949 40.9371 10.6737 40.9371 11.5299C40.9371 12.3862 41.6312 13.0804 42.4875 13.0804Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M52.4795 13.0804C53.3358 13.0804 54.03 12.3862 54.03 11.5299C54.03 10.6737 53.3358 9.97949 52.4795 9.97949C51.6233 9.97949 50.9291 10.6737 50.9291 11.5299C50.9291 12.3862 51.6233 13.0804 52.4795 13.0804Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.52045 23.0604C3.37674 23.0604 4.0709 22.3662 4.0709 21.5099C4.0709 20.6536 3.37674 19.9595 2.52045 19.9595C1.66416 19.9595 0.970001 20.6536 0.970001 21.5099C0.970001 22.3662 1.66416 23.0604 2.52045 23.0604Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.5118 23.0604C13.3681 23.0604 14.0622 22.3662 14.0622 21.5099C14.0622 20.6536 13.3681 19.9595 12.5118 19.9595C11.6555 19.9595 10.9613 20.6536 10.9613 21.5099C10.9613 22.3662 11.6555 23.0604 12.5118 23.0604Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.5038 23.0604C23.3601 23.0604 24.0543 22.3662 24.0543 21.5099C24.0543 20.6536 23.3601 19.9595 22.5038 19.9595C21.6475 19.9595 20.9534 20.6536 20.9534 21.5099C20.9534 22.3662 21.6475 23.0604 22.5038 23.0604Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M32.4958 23.0604C33.3521 23.0604 34.0463 22.3662 34.0463 21.5099C34.0463 20.6536 33.3521 19.9595 32.4958 19.9595C31.6395 19.9595 30.9454 20.6536 30.9454 21.5099C30.9454 22.3662 31.6395 23.0604 32.4958 23.0604Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M42.4875 23.0604C43.3438 23.0604 44.038 22.3662 44.038 21.5099C44.038 20.6536 43.3438 19.9595 42.4875 19.9595C41.6312 19.9595 40.9371 20.6536 40.9371 21.5099C40.9371 22.3662 41.6312 23.0604 42.4875 23.0604Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M52.4795 23.0604C53.3358 23.0604 54.03 22.3662 54.03 21.5099C54.03 20.6536 53.3358 19.9595 52.4795 19.9595C51.6233 19.9595 50.9291 20.6536 50.9291 21.5099C50.9291 22.3662 51.6233 23.0604 52.4795 23.0604Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.52045 33.0404C3.37674 33.0404 4.0709 32.3462 4.0709 31.4899C4.0709 30.6336 3.37674 29.9395 2.52045 29.9395C1.66416 29.9395 0.970001 30.6336 0.970001 31.4899C0.970001 32.3462 1.66416 33.0404 2.52045 33.0404Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.5118 33.0404C13.3681 33.0404 14.0622 32.3462 14.0622 31.4899C14.0622 30.6336 13.3681 29.9395 12.5118 29.9395C11.6555 29.9395 10.9613 30.6336 10.9613 31.4899C10.9613 32.3462 11.6555 33.0404 12.5118 33.0404Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.5038 33.0404C23.3601 33.0404 24.0543 32.3462 24.0543 31.4899C24.0543 30.6336 23.3601 29.9395 22.5038 29.9395C21.6475 29.9395 20.9534 30.6336 20.9534 31.4899C20.9534 32.3462 21.6475 33.0404 22.5038 33.0404Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M32.4958 33.0404C33.3521 33.0404 34.0463 32.3462 34.0463 31.4899C34.0463 30.6336 33.3521 29.9395 32.4958 29.9395C31.6395 29.9395 30.9454 30.6336 30.9454 31.4899C30.9454 32.3462 31.6395 33.0404 32.4958 33.0404Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M42.4875 33.0404C43.3438 33.0404 44.038 32.3462 44.038 31.4899C44.038 30.6336 43.3438 29.9395 42.4875 29.9395C41.6312 29.9395 40.9371 30.6336 40.9371 31.4899C40.9371 32.3462 41.6312 33.0404 42.4875 33.0404Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M52.4795 33.0404C53.3358 33.0404 54.03 32.3462 54.03 31.4899C54.03 30.6336 53.3358 29.9395 52.4795 29.9395C51.6233 29.9395 50.9291 30.6336 50.9291 31.4899C50.9291 32.3462 51.6233 33.0404 52.4795 33.0404Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.52045 43.0203C3.37674 43.0203 4.0709 42.3262 4.0709 41.4699C4.0709 40.6136 3.37674 39.9194 2.52045 39.9194C1.66416 39.9194 0.970001 40.6136 0.970001 41.4699C0.970001 42.3262 1.66416 43.0203 2.52045 43.0203Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.5118 43.0203C13.3681 43.0203 14.0622 42.3262 14.0622 41.4699C14.0622 40.6136 13.3681 39.9194 12.5118 39.9194C11.6555 39.9194 10.9613 40.6136 10.9613 41.4699C10.9613 42.3262 11.6555 43.0203 12.5118 43.0203Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.5038 43.0203C23.3601 43.0203 24.0543 42.3262 24.0543 41.4699C24.0543 40.6136 23.3601 39.9194 22.5038 39.9194C21.6475 39.9194 20.9534 40.6136 20.9534 41.4699C20.9534 42.3262 21.6475 43.0203 22.5038 43.0203Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M32.4958 43.0203C33.3521 43.0203 34.0463 42.3262 34.0463 41.4699C34.0463 40.6136 33.3521 39.9194 32.4958 39.9194C31.6395 39.9194 30.9454 40.6136 30.9454 41.4699C30.9454 42.3262 31.6395 43.0203 32.4958 43.0203Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M42.4875 43.0203C43.3438 43.0203 44.038 42.3262 44.038 41.4699C44.038 40.6136 43.3438 39.9194 42.4875 39.9194C41.6312 39.9194 40.9371 40.6136 40.9371 41.4699C40.9371 42.3262 41.6312 43.0203 42.4875 43.0203Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M52.4795 43.0203C53.3358 43.0203 54.03 42.3262 54.03 41.4699C54.03 40.6136 53.3358 39.9194 52.4795 39.9194C51.6233 39.9194 50.9291 40.6136 50.9291 41.4699C50.9291 42.3262 51.6233 43.0203 52.4795 43.0203Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2.52045 53.0001C3.37674 53.0001 4.0709 52.3059 4.0709 51.4496C4.0709 50.5933 3.37674 49.8992 2.52045 49.8992C1.66416 49.8992 0.970001 50.5933 0.970001 51.4496C0.970001 52.3059 1.66416 53.0001 2.52045 53.0001Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.5118 53.0001C13.3681 53.0001 14.0622 52.3059 14.0622 51.4496C14.0622 50.5933 13.3681 49.8992 12.5118 49.8992C11.6555 49.8992 10.9613 50.5933 10.9613 51.4496C10.9613 52.3059 11.6555 53.0001 12.5118 53.0001Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M22.5038 53.0001C23.3601 53.0001 24.0543 52.3059 24.0543 51.4496C24.0543 50.5933 23.3601 49.8992 22.5038 49.8992C21.6475 49.8992 20.9534 50.5933 20.9534 51.4496C20.9534 52.3059 21.6475 53.0001 22.5038 53.0001Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M32.4958 53.0001C33.3521 53.0001 34.0463 52.3059 34.0463 51.4496C34.0463 50.5933 33.3521 49.8992 32.4958 49.8992C31.6395 49.8992 30.9454 50.5933 30.9454 51.4496C30.9454 52.3059 31.6395 53.0001 32.4958 53.0001Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M42.4875 53.0001C43.3438 53.0001 44.038 52.3059 44.038 51.4496C44.038 50.5933 43.3438 49.8992 42.4875 49.8992C41.6312 49.8992 40.9371 50.5933 40.9371 51.4496C40.9371 52.3059 41.6312 53.0001 42.4875 53.0001Z"
                        fill="#3758F9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M52.4795 53.0001C53.3358 53.0001 54.03 52.3059 54.03 51.4496C54.03 50.5933 53.3358 49.8992 52.4795 49.8992C51.6233 49.8992 50.9291 50.5933 50.9291 51.4496C50.9291 52.3059 51.6233 53.0001 52.4795 53.0001Z"
                        fill="#3758F9"
                      />
                    </svg>
                  </span>
                </div>
                <div className="text-center">
                  <h4 className="mb-1 text-lg font-semibold text-dark dark:text-white">
                    {language === "en" && "Rodrigo Carvalho"}
                    {language === "pt" && "Rodrigo Carvalho"}
                  </h4>
                  <p className="mb-1 text-sm text-body-color dark:text-dark-6">
                    {language === "en" && "Full Stack Developer"}
                    {language === "pt" && "Desenvolvedor Full Stack"}
                  </p>
                  <p className="mb-5 text-sm text-body-color dark:text-dark-6">
                    {language === "en" && "Owner"}
                    {language === "pt" && "Dono"}
                  </p>
                  <div className="flex items-center justify-center gap-5">
                    <a
                      href="https://www.instagram.com/rodrigo_coelho66/"
                      target="_blank"
                      className="text-dark-6 hover:text-gray-400"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <path
                          d="M9.02429 11.8066C10.5742 11.8066 11.8307 10.5501 11.8307 9.00018C11.8307 7.45022 10.5742 6.19373 9.02429 6.19373C7.47433 6.19373 6.21783 7.45022 6.21783 9.00018C6.21783 10.5501 7.47433 11.8066 9.02429 11.8066Z"
                          fill=""
                        />
                        <path
                          d="M12.0726 1.5H5.92742C3.48387 1.5 1.5 3.48387 1.5 5.92742V12.0242C1.5 14.5161 3.48387 16.5 5.92742 16.5H12.0242C14.5161 16.5 16.5 14.5161 16.5 12.0726V5.92742C16.5 3.48387 14.5161 1.5 12.0726 1.5ZM9.02419 12.6774C6.96774 12.6774 5.34677 11.0081 5.34677 9C5.34677 6.99194 6.99194 5.32258 9.02419 5.32258C11.0323 5.32258 12.6774 6.99194 12.6774 9C12.6774 11.0081 11.0565 12.6774 9.02419 12.6774ZM14.1048 5.66129C13.8629 5.92742 13.5 6.07258 13.0887 6.07258C12.7258 6.07258 12.3629 5.92742 12.0726 5.66129C11.8065 5.39516 11.6613 5.05645 11.6613 4.64516C11.6613 4.23387 11.8065 3.91935 12.0726 3.62903C12.3387 3.33871 12.6774 3.19355 13.0887 3.19355C13.4516 3.19355 13.8387 3.33871 14.1048 3.60484C14.3468 3.91935 14.5161 4.28226 14.5161 4.66935C14.4919 5.05645 14.3468 5.39516 14.1048 5.66129Z"
                          fill=""
                        />
                        <path
                          d="M13.1135 4.06433C12.799 4.06433 12.5329 4.33046 12.5329 4.64498C12.5329 4.95949 12.799 5.22562 13.1135 5.22562C13.428 5.22562 13.6942 4.95949 13.6942 4.64498C13.6942 4.33046 13.4522 4.06433 13.1135 4.06433Z"
                          fill=""
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Team Section Start*/}
      {/*Footer Section Start*/}
      <footer
        className="wow fadeInUp relative z-10 bg-gray-900 pt-20 lg:pt-[100px]"
        data-wow-delay=".15s"
      >
        <div className="container">
          <div className="-mx-4 flex justify-center">
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-10 w-full">
                <a href="" className="mb-6 inline-block max-w-[160px]">
                  <Image
                    src={"/logo.png"}
                    alt="logo"
                    className="max-w-full rounded"
                    width={52}
                    height={52}
                  />
                </a>
                <p className="mb-8 max-w-[270px] text-base text-gray-200">
                  {language === "en" &&
                    "Always ready to entertain the discord community"}
                  {language === "pt" &&
                    "Sempre prontos para divirtir a comunidade do discord"}
                </p>
                <div className="-mx-3 flex items-center">
                  <a href="" className="px-3 text-gray-200 hover:text-white">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current"
                    >
                      <path d="M11.0297 14.4305C12.9241 14.4305 14.4598 12.8948 14.4598 11.0004C14.4598 9.10602 12.9241 7.57031 11.0297 7.57031C9.13529 7.57031 7.59958 9.10602 7.59958 11.0004C7.59958 12.8948 9.13529 14.4305 11.0297 14.4305Z" />
                      <path d="M14.7554 1.8335H7.24463C4.25807 1.8335 1.83334 4.25823 1.83334 7.24479V14.6964C1.83334 17.7421 4.25807 20.1668 7.24463 20.1668H14.6962C17.7419 20.1668 20.1667 17.7421 20.1667 14.7555V7.24479C20.1667 4.25823 17.7419 1.8335 14.7554 1.8335ZM11.0296 15.4948C8.51614 15.4948 6.53496 13.4545 6.53496 11.0002C6.53496 8.54586 8.54571 6.50554 11.0296 6.50554C13.4839 6.50554 15.4946 8.54586 15.4946 11.0002C15.4946 13.4545 13.5134 15.4948 11.0296 15.4948ZM17.2393 6.91952C16.9436 7.24479 16.5 7.42221 15.9973 7.42221C15.5538 7.42221 15.1102 7.24479 14.7554 6.91952C14.4301 6.59425 14.2527 6.18027 14.2527 5.67758C14.2527 5.17489 14.4301 4.79049 14.7554 4.43565C15.0807 4.08081 15.4946 3.90339 15.9973 3.90339C16.4409 3.90339 16.914 4.08081 17.2393 4.40608C17.535 4.79049 17.7419 5.23403 17.7419 5.70715C17.7124 6.18027 17.535 6.59425 17.2393 6.91952Z" />
                      <path d="M16.0276 4.96777C15.6432 4.96777 15.318 5.29304 15.318 5.67745C15.318 6.06186 15.6432 6.38713 16.0276 6.38713C16.412 6.38713 16.7373 6.06186 16.7373 5.67745C16.7373 5.29304 16.4416 4.96777 16.0276 4.96777Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-semibold text-white">
                  {language === "en" && "WebSite"}
                  {language === "pt" && "WebSite"}
                </h4>
                <ul>
                  <li>
                    <Link
                      href="/"
                      className="mb-3 inline-block text-base text-gray-200 hover:text-gray-400"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <a
                      href=""
                      className="mb-3 inline-block text-base text-gray-200 hover:text-gray-400"
                    >
                      {language === "en" && "Commands"}
                      {language === "pt" && "Comandos"}
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="mb-3 inline-block text-base text-gray-200 hover:text-gray-400"
                    >
                      {language === "en" && "About"}
                      {language === "pt" && "Sobre"}
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="mb-3 inline-block text-base text-gray-200 hover:text-gray-400"
                    >
                      {language === "en" && "Team"}
                      {language === "pt" && "Equipa"}
                    </a>
                  </li>
                  <li>
                    <a
                      href=""
                      className="mb-3 inline-block text-base text-gray-200 hover:text-gray-400"
                    >
                      {language === "en" && "Support"}
                      {language === "pt" && "Suporte"}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#8890A4] border-opacity-40 py-8 lg:mt-[60px]">
          <div className="container">
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 md:w-2/3 lg:w-1/2">
                <div className="my-1">
                  <div className="-mx-3 flex items-center justify-center md:justify-start">
                    <a
                      href=""
                      className="px-3 text-base text-gray-200 hover:text-white hover:underline"
                    >
                      {language === "en" && "Privacy policy"}
                      {language === "pt" && "Política de privacidade"}
                    </a>
                    <a
                      href=""
                      className="px-3 text-base text-gray-200 hover:text-white hover:underline"
                    >
                      {language === "en" && "Legal notice"}
                      {language === "pt" && "Aviso legal"}
                    </a>
                    <a
                      href=""
                      className="px-3 text-base text-gray-200 hover:text-white hover:underline"
                    >
                      {language === "en" && "Terms of service"}
                      {language === "pt" && "Termos do serviço"}
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/3 lg:w-1/2">
                <div className="my-1 flex justify-center md:justify-end">
                  <p className="text-base text-gray-200">
                    {language === "en" &&
                      "© All Rights Reserved to Rodrigo Carvalho ©"}
                    {language === "pt" &&
                      "© Todos os Direitos Reservados a Rodrigo Carvalho ©"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span className="absolute left-0 top-0 z-[-1]">
            <Image src={shape1} alt="shape1" />
          </span>

          <span className="absolute bottom-0 right-0 z-[-1]">
            <Image src={shape3} alt="shape3" />
          </span>

          <span className="absolute right-0 top-0 z-[-1]">
            <svg
              width="102"
              height="102"
              viewBox="0 0 102 102"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.8667 33.1956C2.89765 33.1956 3.7334 34.0318 3.7334 35.0633C3.7334 36.0947 2.89765 36.9309 1.8667 36.9309C0.835744 36.9309 4.50645e-08 36.0947 0 35.0633C-4.50645e-08 34.0318 0.835744 33.1956 1.8667 33.1956Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M18.2939 33.1956C19.3249 33.1956 20.1606 34.0318 20.1606 35.0633C20.1606 36.0947 19.3249 36.9309 18.2939 36.9309C17.263 36.9309 16.4272 36.0947 16.4272 35.0633C16.4272 34.0318 17.263 33.1956 18.2939 33.1956Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M34.7209 33.195C35.7519 33.195 36.5876 34.0311 36.5876 35.0626C36.5876 36.0941 35.7519 36.9303 34.7209 36.9303C33.69 36.9303 32.8542 36.0941 32.8542 35.0626C32.8542 34.0311 33.69 33.195 34.7209 33.195Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M50.9341 33.195C51.965 33.195 52.8008 34.0311 52.8008 35.0626C52.8008 36.0941 51.965 36.9303 50.9341 36.9303C49.9031 36.9303 49.0674 36.0941 49.0674 35.0626C49.0674 34.0311 49.9031 33.195 50.9341 33.195Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M1.8667 16.7605C2.89765 16.7605 3.7334 17.5966 3.7334 18.6281C3.7334 19.6596 2.89765 20.4957 1.8667 20.4957C0.835744 20.4957 4.50645e-08 19.6596 0 18.6281C-4.50645e-08 17.5966 0.835744 16.7605 1.8667 16.7605Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M18.2939 16.7605C19.3249 16.7605 20.1606 17.5966 20.1606 18.6281C20.1606 19.6596 19.3249 20.4957 18.2939 20.4957C17.263 20.4957 16.4272 19.6596 16.4272 18.6281C16.4272 17.5966 17.263 16.7605 18.2939 16.7605Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M34.7209 16.7605C35.7519 16.7605 36.5876 17.5966 36.5876 18.6281C36.5876 19.6596 35.7519 20.4957 34.7209 20.4957C33.69 20.4957 32.8542 19.6596 32.8542 18.6281C32.8542 17.5966 33.69 16.7605 34.7209 16.7605Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M50.9341 16.7605C51.965 16.7605 52.8008 17.5966 52.8008 18.6281C52.8008 19.6596 51.965 20.4957 50.9341 20.4957C49.9031 20.4957 49.0674 19.6596 49.0674 18.6281C49.0674 17.5966 49.9031 16.7605 50.9341 16.7605Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M1.8667 0.324951C2.89765 0.324951 3.7334 1.16115 3.7334 2.19261C3.7334 3.22408 2.89765 4.06024 1.8667 4.06024C0.835744 4.06024 4.50645e-08 3.22408 0 2.19261C-4.50645e-08 1.16115 0.835744 0.324951 1.8667 0.324951Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M18.2939 0.324951C19.3249 0.324951 20.1606 1.16115 20.1606 2.19261C20.1606 3.22408 19.3249 4.06024 18.2939 4.06024C17.263 4.06024 16.4272 3.22408 16.4272 2.19261C16.4272 1.16115 17.263 0.324951 18.2939 0.324951Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M34.7209 0.325302C35.7519 0.325302 36.5876 1.16147 36.5876 2.19293C36.5876 3.2244 35.7519 4.06056 34.7209 4.06056C33.69 4.06056 32.8542 3.2244 32.8542 2.19293C32.8542 1.16147 33.69 0.325302 34.7209 0.325302Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M50.9341 0.325302C51.965 0.325302 52.8008 1.16147 52.8008 2.19293C52.8008 3.2244 51.965 4.06056 50.9341 4.06056C49.9031 4.06056 49.0674 3.2244 49.0674 2.19293C49.0674 1.16147 49.9031 0.325302 50.9341 0.325302Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M66.9037 33.1956C67.9346 33.1956 68.7704 34.0318 68.7704 35.0633C68.7704 36.0947 67.9346 36.9309 66.9037 36.9309C65.8727 36.9309 65.037 36.0947 65.037 35.0633C65.037 34.0318 65.8727 33.1956 66.9037 33.1956Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M83.3307 33.1956C84.3616 33.1956 85.1974 34.0318 85.1974 35.0633C85.1974 36.0947 84.3616 36.9309 83.3307 36.9309C82.2997 36.9309 81.464 36.0947 81.464 35.0633C81.464 34.0318 82.2997 33.1956 83.3307 33.1956Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M99.7576 33.1956C100.789 33.1956 101.624 34.0318 101.624 35.0633C101.624 36.0947 100.789 36.9309 99.7576 36.9309C98.7266 36.9309 97.8909 36.0947 97.8909 35.0633C97.8909 34.0318 98.7266 33.1956 99.7576 33.1956Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M66.9037 16.7605C67.9346 16.7605 68.7704 17.5966 68.7704 18.6281C68.7704 19.6596 67.9346 20.4957 66.9037 20.4957C65.8727 20.4957 65.037 19.6596 65.037 18.6281C65.037 17.5966 65.8727 16.7605 66.9037 16.7605Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M83.3307 16.7605C84.3616 16.7605 85.1974 17.5966 85.1974 18.6281C85.1974 19.6596 84.3616 20.4957 83.3307 20.4957C82.2997 20.4957 81.464 19.6596 81.464 18.6281C81.464 17.5966 82.2997 16.7605 83.3307 16.7605Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M99.7576 16.7605C100.789 16.7605 101.624 17.5966 101.624 18.6281C101.624 19.6596 100.789 20.4957 99.7576 20.4957C98.7266 20.4957 97.8909 19.6596 97.8909 18.6281C97.8909 17.5966 98.7266 16.7605 99.7576 16.7605Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M66.9037 0.324966C67.9346 0.324966 68.7704 1.16115 68.7704 2.19261C68.7704 3.22408 67.9346 4.06024 66.9037 4.06024C65.8727 4.06024 65.037 3.22408 65.037 2.19261C65.037 1.16115 65.8727 0.324966 66.9037 0.324966Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M83.3307 0.324951C84.3616 0.324951 85.1974 1.16115 85.1974 2.19261C85.1974 3.22408 84.3616 4.06024 83.3307 4.06024C82.2997 4.06024 81.464 3.22408 81.464 2.19261C81.464 1.16115 82.2997 0.324951 83.3307 0.324951Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M99.7576 0.324951C100.789 0.324951 101.624 1.16115 101.624 2.19261C101.624 3.22408 100.789 4.06024 99.7576 4.06024C98.7266 4.06024 97.8909 3.22408 97.8909 2.19261C97.8909 1.16115 98.7266 0.324951 99.7576 0.324951Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M1.8667 82.2029C2.89765 82.2029 3.7334 83.039 3.7334 84.0705C3.7334 85.102 2.89765 85.9382 1.8667 85.9382C0.835744 85.9382 4.50645e-08 85.102 0 84.0705C-4.50645e-08 83.039 0.835744 82.2029 1.8667 82.2029Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M18.2939 82.2029C19.3249 82.2029 20.1606 83.039 20.1606 84.0705C20.1606 85.102 19.3249 85.9382 18.2939 85.9382C17.263 85.9382 16.4272 85.102 16.4272 84.0705C16.4272 83.039 17.263 82.2029 18.2939 82.2029Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M34.7209 82.2026C35.7519 82.2026 36.5876 83.0387 36.5876 84.0702C36.5876 85.1017 35.7519 85.9378 34.7209 85.9378C33.69 85.9378 32.8542 85.1017 32.8542 84.0702C32.8542 83.0387 33.69 82.2026 34.7209 82.2026Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M50.9341 82.2026C51.965 82.2026 52.8008 83.0387 52.8008 84.0702C52.8008 85.1017 51.965 85.9378 50.9341 85.9378C49.9031 85.9378 49.0674 85.1017 49.0674 84.0702C49.0674 83.0387 49.9031 82.2026 50.9341 82.2026Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M1.8667 65.7677C2.89765 65.7677 3.7334 66.6039 3.7334 67.6353C3.7334 68.6668 2.89765 69.503 1.8667 69.503C0.835744 69.503 4.50645e-08 68.6668 0 67.6353C-4.50645e-08 66.6039 0.835744 65.7677 1.8667 65.7677Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M18.2939 65.7677C19.3249 65.7677 20.1606 66.6039 20.1606 67.6353C20.1606 68.6668 19.3249 69.503 18.2939 69.503C17.263 69.503 16.4272 68.6668 16.4272 67.6353C16.4272 66.6039 17.263 65.7677 18.2939 65.7677Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M34.7209 65.7674C35.7519 65.7674 36.5876 66.6036 36.5876 67.635C36.5876 68.6665 35.7519 69.5027 34.7209 69.5027C33.69 69.5027 32.8542 68.6665 32.8542 67.635C32.8542 66.6036 33.69 65.7674 34.7209 65.7674Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M50.9341 65.7674C51.965 65.7674 52.8008 66.6036 52.8008 67.635C52.8008 68.6665 51.965 69.5027 50.9341 69.5027C49.9031 69.5027 49.0674 68.6665 49.0674 67.635C49.0674 66.6036 49.9031 65.7674 50.9341 65.7674Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M1.8667 98.2644C2.89765 98.2644 3.7334 99.1005 3.7334 100.132C3.7334 101.163 2.89765 102 1.8667 102C0.835744 102 4.50645e-08 101.163 0 100.132C-4.50645e-08 99.1005 0.835744 98.2644 1.8667 98.2644Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M1.8667 49.3322C2.89765 49.3322 3.7334 50.1684 3.7334 51.1998C3.7334 52.2313 2.89765 53.0675 1.8667 53.0675C0.835744 53.0675 4.50645e-08 52.2313 0 51.1998C-4.50645e-08 50.1684 0.835744 49.3322 1.8667 49.3322Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M18.2939 98.2644C19.3249 98.2644 20.1606 99.1005 20.1606 100.132C20.1606 101.163 19.3249 102 18.2939 102C17.263 102 16.4272 101.163 16.4272 100.132C16.4272 99.1005 17.263 98.2644 18.2939 98.2644Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M18.2939 49.3322C19.3249 49.3322 20.1606 50.1684 20.1606 51.1998C20.1606 52.2313 19.3249 53.0675 18.2939 53.0675C17.263 53.0675 16.4272 52.2313 16.4272 51.1998C16.4272 50.1684 17.263 49.3322 18.2939 49.3322Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M34.7209 98.2647C35.7519 98.2647 36.5876 99.1008 36.5876 100.132C36.5876 101.164 35.7519 102 34.7209 102C33.69 102 32.8542 101.164 32.8542 100.132C32.8542 99.1008 33.69 98.2647 34.7209 98.2647Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M50.9341 98.2647C51.965 98.2647 52.8008 99.1008 52.8008 100.132C52.8008 101.164 51.965 102 50.9341 102C49.9031 102 49.0674 101.164 49.0674 100.132C49.0674 99.1008 49.9031 98.2647 50.9341 98.2647Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M34.7209 49.3326C35.7519 49.3326 36.5876 50.1687 36.5876 51.2002C36.5876 52.2317 35.7519 53.0678 34.7209 53.0678C33.69 53.0678 32.8542 52.2317 32.8542 51.2002C32.8542 50.1687 33.69 49.3326 34.7209 49.3326Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M50.9341 49.3326C51.965 49.3326 52.8008 50.1687 52.8008 51.2002C52.8008 52.2317 51.965 53.0678 50.9341 53.0678C49.9031 53.0678 49.0674 52.2317 49.0674 51.2002C49.0674 50.1687 49.9031 49.3326 50.9341 49.3326Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M66.9037 82.2029C67.9346 82.2029 68.7704 83.0391 68.7704 84.0705C68.7704 85.102 67.9346 85.9382 66.9037 85.9382C65.8727 85.9382 65.037 85.102 65.037 84.0705C65.037 83.0391 65.8727 82.2029 66.9037 82.2029Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M83.3307 82.2029C84.3616 82.2029 85.1974 83.0391 85.1974 84.0705C85.1974 85.102 84.3616 85.9382 83.3307 85.9382C82.2997 85.9382 81.464 85.102 81.464 84.0705C81.464 83.0391 82.2997 82.2029 83.3307 82.2029Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M99.7576 82.2029C100.789 82.2029 101.624 83.039 101.624 84.0705C101.624 85.102 100.789 85.9382 99.7576 85.9382C98.7266 85.9382 97.8909 85.102 97.8909 84.0705C97.8909 83.039 98.7266 82.2029 99.7576 82.2029Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M66.9037 65.7674C67.9346 65.7674 68.7704 66.6036 68.7704 67.635C68.7704 68.6665 67.9346 69.5027 66.9037 69.5027C65.8727 69.5027 65.037 68.6665 65.037 67.635C65.037 66.6036 65.8727 65.7674 66.9037 65.7674Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M83.3307 65.7677C84.3616 65.7677 85.1974 66.6039 85.1974 67.6353C85.1974 68.6668 84.3616 69.503 83.3307 69.503C82.2997 69.503 81.464 68.6668 81.464 67.6353C81.464 66.6039 82.2997 65.7677 83.3307 65.7677Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M99.7576 65.7677C100.789 65.7677 101.624 66.6039 101.624 67.6353C101.624 68.6668 100.789 69.503 99.7576 69.503C98.7266 69.503 97.8909 68.6668 97.8909 67.6353C97.8909 66.6039 98.7266 65.7677 99.7576 65.7677Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M66.9037 98.2644C67.9346 98.2644 68.7704 99.1005 68.7704 100.132C68.7704 101.163 67.9346 102 66.9037 102C65.8727 102 65.037 101.163 65.037 100.132C65.037 99.1005 65.8727 98.2644 66.9037 98.2644Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M66.9037 49.3322C67.9346 49.3322 68.7704 50.1684 68.7704 51.1998C68.7704 52.2313 67.9346 53.0675 66.9037 53.0675C65.8727 53.0675 65.037 52.2313 65.037 51.1998C65.037 50.1684 65.8727 49.3322 66.9037 49.3322Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M83.3307 98.2644C84.3616 98.2644 85.1974 99.1005 85.1974 100.132C85.1974 101.163 84.3616 102 83.3307 102C82.2997 102 81.464 101.163 81.464 100.132C81.464 99.1005 82.2997 98.2644 83.3307 98.2644Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M83.3307 49.3322C84.3616 49.3322 85.1974 50.1684 85.1974 51.1998C85.1974 52.2313 84.3616 53.0675 83.3307 53.0675C82.2997 53.0675 81.464 52.2313 81.464 51.1998C81.464 50.1684 82.2997 49.3322 83.3307 49.3322Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M99.7576 98.2644C100.789 98.2644 101.624 99.1005 101.624 100.132C101.624 101.163 100.789 102 99.7576 102C98.7266 102 97.8909 101.163 97.8909 100.132C97.8909 99.1005 98.7266 98.2644 99.7576 98.2644Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
              <path
                d="M99.7576 49.3322C100.789 49.3322 101.624 50.1684 101.624 51.1998C101.624 52.2313 100.789 53.0675 99.7576 53.0675C98.7266 53.0675 97.8909 52.2313 97.8909 51.1998C97.8909 50.1684 98.7266 49.3322 99.7576 49.3322Z"
                fill="white"
                fillOpacity="0.08"
              ></path>
            </svg>
          </span>
        </div>
      </footer>
      {/*Footer Section Start*/}
    </>
  );
};

export default Home;
