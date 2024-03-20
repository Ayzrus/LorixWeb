import { GetServerSidePropsContext } from "next";
import axios from "axios";
import { validateCookies } from "./helpers";
import { API_URL } from "./constants";
import { Guild } from "./types";
axios.defaults.withCredentials = true;
export const fetchMutualGuilds = async (ctx: GetServerSidePropsContext) => {
  const headers = validateCookies(ctx);
  if (!headers) return { redirect: { destination: "/" } };
  try {
    const { data: guilds } = await axios.get<Guild[]>(`${API_URL}/guilds`, {
      headers,
    });
    return { props: { guilds } };
  } catch (error) {
    console.log(error);
    return { redirect: { destination: "/" } };
  }
};