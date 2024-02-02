import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AboutDropdownLinks } from "../../InfoAndData";
import { ActivitiesDropdownLinks } from "../../InfoAndData";
// import { handleLanguageChange } from "../../InfoAndData";


const Navbar = () => {

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white fixed top-0  shadow-md duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex items-center gap-4">
            <Link to="/">
              <img
                src="src\assets\iskcon-dhanbad-image.jpg"
                alt="ISKCON Dhanbad"
                className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl max-h-14"
              />
            </Link>

          
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                <li>
                  <Link
                    to="/"
                    className="inline-block px-2 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                  >
                   Home
                  </Link>
                </li>

                <li className="relative cursor-pointer group">
                  <div
                    to="/about"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    About
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </div>

                  {/* Dropdown Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white ">
                    <ul className="space-y-2">
                      {AboutDropdownLinks.map((data, index) => (
                        <li key={index}>
                          <Link
                            to={data.link}
                            className="text-gray-500  dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                          >
                            {data.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                <li className="relative cursor-pointer group">
                  <Link
                    to="/activities"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    Activities
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </Link>

                  {/* Dropdown Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white ">
                    <ul className="space-y-2">
                      {ActivitiesDropdownLinks.map((data, index) => (
                        <li key={index}>
                          <Link
                            to={data.link}
                            className="text-gray-500  dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                          >
                            {data.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>

                <li>
                  <Link
                    to="/contact-us"
                    className="inline-block px-2 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                  >
                    Contact Us
                  </Link>
                </li>

                <li>
                  <Link
                    to="/festivals"
                    className="inline-block px-2 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                  >
                    Festivals
                  </Link>
                </li>
                {/* Dropdown  */}
              </ul>
            </div>
          </div>

          {/* Navbar Right section */}
     
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] flex justify-center items-center
