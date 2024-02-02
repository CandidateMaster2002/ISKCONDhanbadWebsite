import React, { useState } from "react";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AboutDropdownLinks, ActivitiesDropdownLinks } from "../../InfoAndData";

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [activitiesDropdownOpen, setActivitiesDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
  };

  const toggleActivitiesDropdown = () => {
    setActivitiesDropdownOpen(!activitiesDropdownOpen);
  };

  const navLinks = (
    <div
      className={`lg:flex items-center gap-4 ${
        isMenuOpen ? "flex-col" : "hidden"
      }`}
    >
      <Link
        to="/"
        className="inline-block px-2 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
      >
        Home
      </Link>

      <div className="relative group">
        <div
          onClick={toggleAboutDropdown}
          className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2 cursor-pointer"
        >
          About
          <span>
            <FaCaretDown
              className={`transform ${
                aboutDropdownOpen ? "rotate-180" : "rotate-0"
              } duration-300`}
            />
          </span>
        </div>

        {/* Dropdown Links */}
        {aboutDropdownOpen && (
          <div className="absolute z-[9999] w-[200px] bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white mt-2">
            <ul className="space-y-2">
              {AboutDropdownLinks.map((data, index) => (
                <li key={index}>
                  <Link
                    to={data.link}
                    className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="relative group">
        <div
          onClick={toggleActivitiesDropdown}
          className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2 cursor-pointer"
        >
          Activities
          <span>
            <FaCaretDown
              className={`transform ${
                activitiesDropdownOpen ? "rotate-180" : "rotate-0"
              } duration-300`}
            />
          </span>
        </div>

        {/* Dropdown Links */}
        {activitiesDropdownOpen && (
          <div className="absolute z-[9999] w-[200px] bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white mt-2">
            <ul className="space-y-2">
              {ActivitiesDropdownLinks.map((data, index) => (
                <li key={index}>
                  <Link
                    to={data.link}
                    className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <Link
        to="/contact-us"
        className="block py-2 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
      >
        Contact Us
      </Link>

      <Link
        to="/festivals"
        className="block py-2 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
      >
        Festivals
      </Link>
    </div>
  );

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white fixed top-0 shadow-md duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Hamburger Menu */}
          <div className="flex items-center gap-4">
            <Link to="/">
              <img
                src="src\assets\iskcon-dhanbad-image.jpg"
                alt="ISKCON Dhanbad"
                className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl max-h-14"
              />
            </Link>

            {/* Hamburger Menu for Small Screens */}
            <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
              {isMenuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </div>
          </div>

          {/* Navbar Links */}
          <div
            className={`lg:flex items-center gap-4 ${
              isMenuOpen ? "flex-col" : "hidden"
            }`}
          >
            <Link
              to="/"
              className="inline-block px-2 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
            >
              Home
            </Link>

            <div className="relative group">
              <div
                onClick={toggleAboutDropdown}
                className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2 cursor-pointer"
              >
                About
                <span>
                  <FaCaretDown
                    className={`transform ${
                      aboutDropdownOpen ? "rotate-180" : "rotate-0"
                    } duration-300`}
                  />
                </span>
              </div>

              {/* Dropdown Links */}
              {aboutDropdownOpen && (
                <div className="absolute z-[9999] w-[200px] bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white mt-2">
                  <ul className="space-y-2">
                    {AboutDropdownLinks.map((data, index) => (
                      <li key={index}>
                        <Link
                          to={data.link}
                          className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                        >
                          {data.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="relative group">
              <div
                onClick={toggleActivitiesDropdown}
                className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2 cursor-pointer"
              >
                Activities
                <span>
                  <FaCaretDown
                    className={`transform ${
                      activitiesDropdownOpen ? "rotate-180" : "rotate-0"
                    } duration-300`}
                  />
                </span>
              </div>

              {/* Dropdown Links */}
              {activitiesDropdownOpen && (
                <div className="absolute z-[9999] w-[200px] bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white mt-2">
                  <ul className="space-y-2">
                    {ActivitiesDropdownLinks.map((data, index) => (
                      <li key={index}>
                        <Link
                          to={data.link}
                          className="text-gray-500 dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                        >
                          {data.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Link
              to="/contact-us"
              className="block py-2 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
            >
              Contact Us
            </Link>

            <Link
              to="/festivals"
              className="block py-2 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
            >
              Festivals
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
