import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type Guild = {
  id: string;
  name: string;
  icon: string;
  owner: string;
  permissions: string;
  features: string[];
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactElement;
};


export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
}
