"use client";
import { useEffect, useState } from "react"; // Importe o useState
import Image from "next/image";
import LanguageSelector from "../translater/selector";
import { HamburgerMenuIcon, SewingPinIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import { getCookie } from "cookies-next";
import { useLanguage } from "../../utils/translater/LanguageContext";

type User = {
  discordId: string;
  avatar: string;
  email: string;
  name: string;
};

export const Navbar = () => {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [user, setUser] = useState<User>();
  const [isUserMenu, setIsUserMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenu);
  };

  const handleLoginClick = () => {
    router.push("http://localhost:3001/api/auth/discord"); // Redireciona para a rota de login no Express
  };

  useEffect(() => {
    const token = getCookie("token");
    if (typeof token === "string") {
      const decodedToken = jwt.decode(token);

      if (
        decodedToken &&
        typeof decodedToken === "object" &&
        "data" in decodedToken
      ) {
        const userData = decodedToken.data;
        setUser(userData);
      }
    }
  }, []);

  const handleLogout = () => {
    fetch("http://localhost:3001/api/auth/logout", {
      method: "POST",
      mode: "no-cors",
      credentials: "include",
    })
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        console.error("Erro ao fazer logout:", error);
      });
  };

  return (
    <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src={"/logo.png"}
            alt="Lorix"
            className="rounded"
            width={32}
            height={32}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Lorix
          </span>
        </Link>
        {user ? (
          <>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <LanguageSelector />
              <div className="relative">
                <button
                  onClick={toggleUserMenu}
                  type="button"
                  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  aria-expanded="false"
                  data-dropdown-toggle="dropdown-user"
                >
                  <span className="sr-only">Open user menu</span>
                  {user?.avatar && user?.discordId && (
                    <Image
                      className="rounded-full"
                      src={
                        user.avatar.startsWith("https://voxnews.com.br")
                          ? user.avatar
                          : `https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}.png`
                      }
                      alt="user photo"
                      width={32}
                      height={32}
                    />
                  )}
                </button>
                <div
                  className={`absolute right-0 mt-5 ${
                    isUserMenu ? "block" : "hidden"
                  } z-50 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600`}
                  id="dropdown-user"
                >
                  <div className="px-4 py-3" role="none">
                    <p
                      className="text-sm text-gray-900 dark:text-white"
                      role="none"
                    >
                      {user?.name && user.name}
                    </p>
                    <p
                      className="text-sm font-medium text-gray-900 truncate dark:text-gray-300"
                      role="none"
                    >
                      {user?.email && user.email}
                    </p>
                  </div>
                  <ul className="py-1" role="none">
                    <li>
                      <Link
                        href="/Dashboard"
                        className="block px-4 cursor-pointer py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        {language === "en" && "Dashboard"}
                        {language === "pt" && "Dashboard"}
                      </Link>
                    </li>
                    <li>
                      <a
                        onClick={handleLogout}
                        className="block px-4 cursor-pointer py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                      >
                        {language === "en" && "Logout"}
                        {language === "pt" && "Encerrar Sessão"}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <LanguageSelector />
              <button
                type="button"
                onClick={handleLoginClick}
                className="flex items-center text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-green-600 dark:hover:bg-green-500 dark:focus:ring-green-800"
              >
                <span className="mr-2">
                  <SewingPinIcon />
                </span>
                <span className="hidden sm:inline">
                  {language === "en" && <a>Login</a>}
                  {language === "pt" && <a>Iniciar Sessão</a>}
                </span>
              </button>
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded={isOpen ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                <HamburgerMenuIcon />
              </button>
            </div>
          </>
        )}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-white bg-green-500 rounded md:bg-transparent md:text-green-500 md:p-0 md:dark:text-green-600"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-green-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                {language === "en" && <h1>Commands</h1>}
                {language === "pt" && <h1>Comandos</h1>}
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-green-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                {language === "en" && <h1>About</h1>}
                {language === "pt" && <h1>Sobre</h1>}
              </a>
            </li>
            <li>
              <Link
                href="/#team"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-green-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                {language === "en" && <h1>Team</h1>}
                {language === "pt" && <h1>Equipa</h1>}
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-green-500 md:p-0 md:dark:hover:text-green-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                {language === "en" && <h1>Support</h1>}
                {language === "pt" && <h1>Suporte</h1>}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
