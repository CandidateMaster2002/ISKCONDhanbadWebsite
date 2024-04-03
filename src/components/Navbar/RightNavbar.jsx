import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faWhatsapp,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import DarkMode from "./DarkMode";
import i18n from "../../i18n";

const handleLanguageChange = (selectedLanguage, setLanguage) => {
  localStorage.setItem("language", selectedLanguage);
  setLanguage(selectedLanguage);
  i18n.changeLanguage(selectedLanguage);
};

const RightNavbar = () => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "hi"
  );

  useEffect(() => {
    if (localStorage.getItem("language") === null) {
      localStorage.setItem("language", "hi");
    }

    setLanguage(localStorage.getItem("language"));
  }, [localStorage.getItem("language")]);

  return (
    <div className="bg-gray-200 dark:bg-gray-950 dark:text-white fixed top-0 shadow-md duration-200 relative z-40">
      <div className="py-1">
        <div className="container flex justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex gap-2">
            <a href="#" className="text-white">
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ color: "#1DA1F2", fontSize: "1.8em" }}
              />
            </a>
            <a href="#" className="text-white">
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ color: "blue", fontSize: "1.8em" }}
              />
            </a>
            <a href="#" className="text-white">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#E1306C", fontSize: "1.8em" }}
              />
            </a>
            <a href="#" className="text-white">
              <FontAwesomeIcon
                icon={faWhatsapp}
                style={{ color: "#25D366", fontSize: "1.8em" }}
              />
            </a>
            <a href="#" className="text-white">
              <FontAwesomeIcon
                icon={faYoutube}
                style={{ color: "#FF0000", fontSize: "1.8em" }}
              />
            </a>
            <a href="#" className="text-white">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "#0077b9", fontSize: "1.8em" }}
              />
            </a>
          </div>
          {/* Language Buttons and Dark Mode section */}
          <div className="flex justify-end items-center gap-1">
            {/* Language Buttons */}
            <div>
              {/* <a href="#" className="text-white">
                <FontAwesomeIcon icon={faPhone} />
              </a> */}
              <button
                onClick={() => handleLanguageChange("en", setLanguage)}
                className={`${
                  language === "en"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } px-1 py-2 rounded mr-2`}
                style={{ fontSize: "0.6em" }}
              >
                ENG
              </button>
              <button
                onClick={() => handleLanguageChange("hi", setLanguage)}
                className={`${
                  language === "hi"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } px-1 py-2 rounded`}
                style={{ fontSize: "0.6em" }}
              >
                हिंदी
              </button>
            </div>
            {/* Dark Mode section */}
            <div className="px-0">
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightNavbar;
