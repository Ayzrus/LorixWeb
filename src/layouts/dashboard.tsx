import { ReactElement } from "react";
import NavbarDash from "../components/Global/NavbarDash";
import { LanguageProvider } from "../utils/translater/LanguageContext";
import { Toaster } from "sonner";

export function DasboardLayout({ children }: { children: ReactElement }) {
  return (
    <>
      <LanguageProvider>
        <NavbarDash />
        {children}
        <Toaster />
      </LanguageProvider>
    </>
  );
}
