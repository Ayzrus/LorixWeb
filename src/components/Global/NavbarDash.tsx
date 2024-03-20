import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import LanguageSelector from "../translater/selector";
import jwt from "jsonwebtoken";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useLanguage } from "../../utils/translater/LanguageContext";
type User = {
  discordId: string;
  avatar: string;
  email: string;
  name: string;
};

const NavbarDash = () => {
  const { language } = useLanguage();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isUserMenu, setIsUserMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [user, setUser] = useState<User>();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenu);
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

  useEffect(() => {
    // Recupera o estado do modo escuro do localStorage ao montar o componente
    const storedDarkMode = localStorage.getItem("isDarkMode");
    if (storedDarkMode === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []); // Executar apenas uma vez na montagem do componente

  const handleThemeToggle = () => {
    // Inverte o estado do tema escuro
    const newDarkModeState = !isDarkMode;
    setIsDarkMode(newDarkModeState);
    // Salva o estado no localStorage
    localStorage.setItem("isDarkMode", String(newDarkModeState));

    // Atualiza a classe do elemento HTML
    if (newDarkModeState) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

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
    <>
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start rtl:justify-end">
              <button
                onClick={toggleSidebar}
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className={`w-6 h-6 transition-all ${
                    isSidebarOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <Link href="/Dashboard" className="flex ms-2 md:me-24">
                <Image
                  src={"/logo.png"}
                  className="me-3 rounded"
                  alt="logo"
                  width={32}
                  height={32}
                />
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                  Lorix
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <LanguageSelector />
              <button
                onClick={toggleSidebar}
                id="toggleSidebarMobileSearch"
                type="button"
                className="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                <span className="sr-only">Search</span>

                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <button
                onClick={handleThemeToggle}
                id="theme-toggle"
                data-tooltip-target="tooltip-toggle"
                type="button"
                className="text-gray-500 transition-all dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
              >
                {isDarkMode ? <SunIcon /> : <MoonIcon />}
              </button>
              <div className="flex items-center ms-3">
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
            </div>
          </div>
        </div>
      </nav>
      <aside
        id="logo-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          isSidebarOpen ? "" : "-translate-x-full"
        } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            <li>
              <div className="relative mt-1 lg:w-96 lg:hidden">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  name="email"
                  id="topbar-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Search"
                  wfd-id="id0"
                />
              </div>
            </li>
            <li>
              <Link
                href="/Dashboard"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default NavbarDash;
