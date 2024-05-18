import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import DarkMode from "./DarkMode";
import i18n from "../../i18n";
import { SocialHandleLinks } from "../../InfoAndData";
import { FaPhoneAlt } from "react-icons/fa";

const TopmostNavbar = () => {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "hi");

  useEffect(() => {
    if (!localStorage.getItem("language")) {
      localStorage.setItem("language", "hi");
    }
    i18n.changeLanguage(language);
  }, [language]);

  const handleLanguageChange = (selectedLanguage) => {
    localStorage.setItem("language", selectedLanguage);
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="bg-gray-200 dark:bg-gray-950 dark:text-white  top-0 shadow-md duration-200 relative z-40">
      <div className="py-1">
        <div className="container flex justify-between items-center">
          {/* Social Media Icons */}
          <div className="flex gap-2">
            <a href={SocialHandleLinks.whatsapp}>
              <FontAwesomeIcon
                icon={faWhatsapp}
                style={{ color: "#25D366", fontSize: " 2em" }}
              />
            </a>
            <a href={SocialHandleLinks.youtube}>
              <FontAwesomeIcon
                icon={faYoutube}
                style={{ color: "#FF0000", fontSize: " 2em" }}
              />
            </a>
            <a href="#" onClick={() => window.open("tel:+919903013399")}>
              <FaPhoneAlt style={{ fontSize: " 2em", color: "green" }} />
            </a>
            {/* <a href={SocialHandleLinks.instagram}>
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#E1306C", fontSize: " 2em" }}
              />
            </a> */}
            {/* <a href={SocialHandleLinks.facebook}>
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ color: "blue", fontSize: " 2em" }}
              />
            </a> */}
            <a href={SocialHandleLinks.linkedin}>
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "#0077b9", fontSize: " 2em" }}
              />
            </a>
          </div>

          {/* Language Buttons and Dark Mode section */}
          <div className="flex justify-end items-center gap-1">
            {/* Language Buttons */}
            <div>
              <button
                onClick={() => handleLanguageChange("en")}
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
                onClick={() => handleLanguageChange("hi")}
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

export default TopmostNavbar;
