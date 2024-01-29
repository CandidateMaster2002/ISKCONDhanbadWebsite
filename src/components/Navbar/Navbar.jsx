import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const MenuLinks = [
 
  {
    id: 1,
    name: "Contact Us",
    link: "/#contact us",
  },
  {
    id: 2,
    name: "Media",
    link: "/#media",
  },
];


const AboutDropdownLinks = [
  {
    id: 1,
    name: "About ISKCON",
    link: "/#",
  },
  {
    id: 2,
    name: "ISKCON Dhanbad",
    link: "/#",
  },
  {
    id: 3,
    name: "ISKCON Founder",
    link: "/#",
  },
];


const ActivitiesDropdownLinks = [
  {
    id: 1,
    name: "Youth Empowerment",
    link: "/#",
  },
  {
    id: 2,
    name: "Girls Empowerment",
    link: "/#",
  },
  {
    id: 3,
    name: "Dhanbad Tribal Care",
    link: "/#",
  },
  {
    id:4,
    name:"Book Distribution"
  },
  {
id:5,
name:"Village Preaching"
  }

];


const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className="flex items-center gap-4">


<img src="src\assets\iskcon-dhanbad-image.jpg"  alt="ISKCON Dhanbad"  className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl max-h-14"/>

            {/* <a
              href="#"
             
"
            >
              Eshop
            </a> */}
            {/* Menu Items */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">


              <li>
                    <a
                      href="#"
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {" "}
                      Home
                    </a>
                  </li>


              <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    About
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>

                  {/* Dropdown Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white ">
                    <ul className="space-y-2">
                      {AboutDropdownLinks.map((data, index) => (
                        <li>
                          <a
                            className="text-gray-500  dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>


                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
                  >
                    Activities
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />
                    </span>
                  </a>

                  {/* Dropdown Links */}
                  <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white ">
                    <ul className="space-y-2">
                      {ActivitiesDropdownLinks.map((data, index) => (
                        <li>
                          <a
                            className="text-gray-500  dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                            href={data.link}
                          >
                            {data.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>


                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {" "}
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* Dropdown  */}

                
          
              </ul>
            </div>
          </div>

          {/* Navbar Right section */}
          <div className="flex justify-between items-center gap-4">
            {/* Search Bar section */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="
              search-bar
              "
              />
              <IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>

            {/* Order-button section */}
            <button className="relative p-3" onClick={handleOrderPopup}>
              <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs">
                4
              </div>
            </button>
            {/* Dark Mode section */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] flex justify-center items-center
