import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faFacebook,
  // faInstagram,
  faWhatsapp,
  faYoutube,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import DarkMode from "./DarkMode";
import i18n from "../../i18n";
import { SocialHandleLinks } from "../../InfoAndData";
import { FaPhoneAlt } from "react-icons/fa";
import SwitchLanguage from "./SwitchLanguage";

const TopmostNavbar = () => {
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

          <div className="flex justify-end items-center gap-1">
            <SwitchLanguage />
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
