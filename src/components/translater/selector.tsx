import React, { useEffect } from "react";
import { useLanguage } from "../../utils/translater/LanguageContext";

import ReactCountryFlag from "react-country-flag";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";

const LanguageSelector: React.FC = () => {
  const { language, changeLanguage } = useLanguage();

  useEffect(() => {
    // Recuperar o valor do idioma do localStorage ao montar o componente
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      changeLanguage(storedLanguage);
    }
  }, [changeLanguage]); // Executar apenas uma vez no montagem do componente

  const handleLanguageChange = (newValue: string) => {
    // Salvar o novo valor do idioma no localStorage
    localStorage.setItem("selectedLanguage", newValue);
    changeLanguage(newValue);
  };

  return (
    <div className="mr-2">
      <Select
        value={language}
        onValueChange={handleLanguageChange}
        defaultValue="pt"
      >
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">
            <span className="flex items-center">
              <ReactCountryFlag
                className="mr-1 hidden sm:inline"
                countryCode="US"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="US"
              />
              <span className="hidden sm:inline">English</span>
            </span>
          </SelectItem>
          <SelectItem value="pt">
            <span className="flex items-center">
              <ReactCountryFlag
                className="mr-1 hidden sm:inline"
                countryCode="PT"
                svg
                cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                cdnSuffix="svg"
                title="PT"
              />
              <span className="hidden sm:inline">Português</span>
            </span>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default LanguageSelector;
