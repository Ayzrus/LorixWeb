import Head from "next/head";
import { ReactElement, useState, useEffect } from "react";
import { DasboardLayout } from "../../../layouts/dashboard";
import { useLanguage } from "../../../utils/translater/LanguageContext";
import { NextPageWithLayout } from "../../../utils/types";
import { Label } from "../../../components/ui/label";
import { Input } from "../../../components/ui/input";
import axios from "axios";
import router from "next/router";
import { API_URL } from "../../../utils/constants";
import { toast } from "sonner";

interface Command {
  Id: string;
  En: string;
  PT: string;
}

const DashboardPage: NextPageWithLayout = () => {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [commands, setCommands] = useState<Command[]>([]);
  const [filteredCommands, setFilteredCommands] = useState<Command[]>([]);
  const [selectedCommand, setSelectedCommand] = useState<Command | null>(null);
  const [isInputModified, setIsInputModified] = useState(false);
  const [workCooldown, setWorkCooldown] = useState("");
  const [workMinMoney, setWorkMinMoney] = useState("");
  const [workMaxMoney, setWorkMaxMoney] = useState("");
  const [robCooldown, setRobCooldown] = useState("");
  const [robChance, setRobChance] = useState("");
  const [robThef, setRobThef] = useState("");
  const [slutCooldown, setSlutCooldown] = useState("");
  const [slutMinMoney, setSlutMinMoney] = useState("");
  const [slutMaxMoney, setSlutMaxMoney] = useState("");

  const handleSave = async () => {
    try {
      if (!selectedCommand) {
        return;
      }

      const { id: guildId } = router.query;

      if (selectedCommand.En === "Work") {
        const response = await fetch(
          `${API_URL}/guilds/${guildId}/updateWork/${workCooldown || "0"}/${
            workMinMoney || 0
          }/${workMaxMoney || 0}`,
          {
            mode: "no-cors",
            credentials: "include",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        toast("Dados do comando work atualizados com sucesso.");
        console.log("Dados de trabalho atualizados com sucesso.");
      } else if (selectedCommand.En === "Rob") {
        const response = await fetch(
          `${API_URL}/guilds/${guildId}/updateRob/${robCooldown || "0"}/${
            robChance || 0
          }/${robThef || 0}`,
          {
            mode: "no-cors",
            credentials: "include",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        toast("Dados do comando rob atualizados com sucesso.");
        console.log("Dados de rob atualizados com sucesso.");
      } else if (selectedCommand.En === "Slut") {
        const response = await fetch(
          `${API_URL}/guilds/${guildId}/updateSlut/${slutCooldown || "0"}/${
            slutMinMoney || 0
          }/${slutMaxMoney || 0}`,
          {
            mode: "no-cors",
            credentials: "include",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        toast("Dados do comando slut atualizados com sucesso.");
        console.log("Dados de slut atualizados com sucesso.");
      }
    } catch (error) {
      console.error("Erro ao atualizar dados:", error);
    }
  };

  useEffect(() => {
    setCommands([
      {
        Id: "1",
        En: "Work",
        PT: "Work",
      },
      {
        Id: "2",
        En: "Rob",
        PT: "Rob",
      },
      {
        Id: "3",
        En: "Slut",
        PT: "Slut",
      },
    ]);
  }, [language, workCooldown, workMaxMoney, workMinMoney]);

  useEffect(() => {
    const filtered = commands.filter(
      (command) =>
        command.En.toLowerCase().includes(searchTerm.toLowerCase()) ||
        command.PT.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCommands(filtered);
  }, [commands, searchTerm]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedCommand(null);
    setSearchTerm(e.target.value);
  };

  const handleCommandClick = (command: Command) => {
    setRobChance("");
    setRobCooldown("");
    setRobThef("");
    setWorkCooldown("");
    setWorkMaxMoney("");
    setWorkMinMoney("");
    setIsInputModified(false);
    setSelectedCommand(command);
  };

  return (
    <>
      <Head>
        <title>
          Lorix - Dashboard - {language === "en" ? "Guild" : "Guilda"}
        </title>
      </Head>
      <div className="p-4 sm:ml-64 mt-2">
        <div className="p-4 rounded-lg dark:border-gray-950 dark:bg-gray-800 mt-14 border border-gray-300 relative">
          <h1 className="text-lg font-bold mb-4">
            {language === "en" ? "Commands" : "Comandos"}
          </h1>
          <div className="flex flex-col sm:flex-row">
            <div className="border border-gray-300 dark:border-gray-900 rounded-lg p-4 w-full sm:w-64 mb-4 sm:mb-0 mr-0 sm:mr-3">
              <input
                type="text"
                placeholder="Search"
                className="p-2 dark:bg-slate-800 border border-gray-300 dark:border-gray-900 rounded-md w-full"
                value={searchTerm}
                onChange={handleSearch}
              />
              {filteredCommands.length === 0 && (
                <p className="text-gray-500 mt-2">No results found.</p>
              )}
              <ul className="mt-4">
                {filteredCommands.map((command) => (
                  <li
                    key={command.Id}
                    className={`cursor-pointer p-1 hover:bg-gray-100 dark:hover:bg-gray-600 mb-2 rounded-md flex items-center`}
                    onClick={() => handleCommandClick(command)}
                  >
                    <span>{language === "en" ? command.En : command.PT}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-grow">
              <h1 className="text-5xl font-extrabold dark:text-white mb-2">
                {language === "en" ? selectedCommand?.En : selectedCommand?.PT}
              </h1>

              {selectedCommand && selectedCommand.En === "Work" ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="w-full">
                    <Label htmlFor="workcw">
                      {language === "en"
                        ? "Work Cooldown (seconds)"
                        : "Work Cooldown (segundos)"}
                    </Label>
                    <Input
                      type="text"
                      id="workcw"
                      placeholder="Default 120"
                      value={workCooldown}
                      onChange={(e) => {
                        setWorkCooldown(e.target.value);
                        setIsInputModified(true);
                      }}
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="workmin">
                      {language === "en"
                        ? "Work Min Money"
                        : "Work Minimo Dinheiro"}
                    </Label>
                    <Input
                      type="number"
                      id="workmin"
                      value={workMinMoney}
                      onChange={(e) => {
                        setWorkMinMoney(e.target.value);
                        setIsInputModified(true);
                      }}
                      placeholder="Default 300"
                      className="w-full"
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="workmax">
                      {language === "en"
                        ? "Work Max Money"
                        : "Work Maximo Dinheiro"}
                    </Label>
                    <Input
                      type="number"
                      id="workmax"
                      value={workMaxMoney}
                      onChange={(e) => {
                        setWorkMaxMoney(e.target.value);
                        setIsInputModified(true);
                      }}
                      placeholder="Default 3000"
                      className="w-full"
                    />
                  </div>
                </div>
              ) : "" || (selectedCommand && selectedCommand.En === "Rob") ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="w-full">
                    <Label htmlFor="robcw">
                      {language === "en"
                        ? "Rob Cooldown (seconds)"
                        : "Rob Cooldown (segundos)"}
                    </Label>
                    <Input
                      type="text"
                      id="robcw"
                      value={robCooldown}
                      onChange={(e) => {
                        setRobCooldown(e.target.value);
                        setIsInputModified(true);
                      }}
                      placeholder="Default 300"
                      className="w-full"
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="ChanceToRob">
                      {language === "en" ? "Chance To Rob" : "Chance de roubar"}
                    </Label>
                    <Input
                      type="number"
                      id="ChanceToRob"
                      value={robChance}
                      onChange={(e) => {
                        setRobChance(e.target.value);
                        setIsInputModified(true);
                      }}
                      placeholder="Default 50%"
                      className="w-full"
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="PercentageOfTheft">
                      {language === "en"
                        ? "Percentage Of Theft"
                        : "Percentagem de roubo"}
                    </Label>
                    <Input
                      type="number"
                      id="PercentageOfTheft"
                      value={robThef}
                      onChange={(e) => {
                        setRobThef(e.target.value);
                        setIsInputModified(true);
                      }}
                      placeholder="Default 50%"
                      className="w-full"
                    />
                  </div>
                </div>
              ) : "" || (selectedCommand && selectedCommand.En === "Slut") ? (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="w-full">
                    <Label htmlFor="slutcw">
                      {language === "en"
                        ? "Slut Cooldown (seconds)"
                        : "Slut Cooldown (segundos)"}
                    </Label>
                    <Input
                      type="text"
                      id="slutcw"
                      placeholder="Default 520"
                      value={slutCooldown}
                      onChange={(e) => {
                        setSlutCooldown(e.target.value);
                        setIsInputModified(true);
                      }}
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="slutmin">
                      {language === "en"
                        ? "Slut Min Money"
                        : "Slut Minimo Dinheiro"}
                    </Label>
                    <Input
                      type="number"
                      id="slutmin"
                      value={slutMinMoney}
                      onChange={(e) => {
                        setSlutMinMoney(e.target.value);
                        setIsInputModified(true);
                      }}
                      placeholder="Default 800"
                      className="w-full"
                    />
                  </div>
                  <div className="w-full">
                    <Label htmlFor="slutmax">
                      {language === "en"
                        ? "Slut Max Money"
                        : "Slut Maximo Dinheiro"}
                    </Label>
                    <Input
                      type="number"
                      id="slutmax"
                      value={slutMaxMoney}
                      onChange={(e) => {
                        setSlutMaxMoney(e.target.value);
                        setIsInputModified(true);
                      }}
                      placeholder="Default 8000"
                      className="w-full"
                    />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="absolute top-0 right-0 mt-4 mr-4">
            <button
              onClick={handleSave}
              className={`text-white font-bold py-2 px-4 rounded ${
                isInputModified
                  ? "bg-green-500 hover:bg-green-600"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
              disabled={!isInputModified}
            >
              {language === "en" ? "Save" : "Salvar"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

DashboardPage.getLayout = function (page: ReactElement) {
  return <DasboardLayout>{page}</DasboardLayout>;
};

export default DashboardPage;
