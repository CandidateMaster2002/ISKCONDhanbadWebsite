import { useState, useEffect } from "react";
import i18n from "../../i18n";

const SwitchLanguage = () => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "hi"
  );



  useEffect(() => {
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
    console.log(language)
  });


  return (
    <div>
      <button
        onClick={() => setLanguage("en")}
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
        onClick={() => setLanguage("hi")}
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
