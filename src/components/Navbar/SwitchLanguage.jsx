import  { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const SwitchLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
  }, [language, i18n]);

  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div>
      <button
        onClick={() => handleChangeLanguage("en")}
        className={`${
          language === "en"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700"
        } px-1 py-2 rounded mr-2`}
        style={{ fontSize: "0.8em" }}
      >
        ENG
      </button>
      <button
        onClick={() => handleChangeLanguage("hi")}
        className={`${
          language === "hi"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700"
        } px-1 py-2 rounded`}
        style={{ fontSize: "0.8em" }}
      >
        हिंदी
      </button>
    </div>
  );
};

export default SwitchLanguage;
