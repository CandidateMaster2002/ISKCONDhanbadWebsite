import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import iskcondhanbadLogo from "../../assets/iskcon-dhanbad-image.jpg"


const MainNavbar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-black">
      <Typography
        as="li"
        variant="h5"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <svg
          fill="#000000"
          height="40"
          width="40"
          version="1.1"
          id="_x31_"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 128 128"
          xml:space="preserve"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <ellipse
              transform="matrix(0.1607 -0.987 0.987 0.1607 -3.8377 74.789)"
              cx="42.1"
              cy="39.7"
              rx="17.3"
              ry="17.3"
            ></ellipse>{" "}
            <path d="M84.7,40.1c-0.6-1.6-1.6-3-3-4.1c-3.9-2.8-9.3-2-12.1,1.9c-2.8,3.9-2,9.3,1.9,12.1c3.9,2.8,9.3,2,12.1-1.9 c0.1-0.2,0.2-0.3,0.3-0.5l5.9,0.6L66.3,65.2l-32.2-5.4c-5.4-0.9-10.4,2.7-11.2,8.1l-7.3,45.1h35.8c1.6-5.6,2.8-11.4,3.8-17.3 c0.1-0.9,0.5-3,0.5-3.3c0.8-4.8,0.4-9.9-1.2-14.3l12.7,2.1c1.8,0.3,3.9-0.1,5.7-1.4l28.1-20.2c2.7-2,3.7-5.6,2.7-8.6l10.9,1.2 l0.8-7.5L84.7,40.1z"></path>{" "}
          </g>
        </svg>

        <Link to="our-services" className="flex items-center">
          Our Services
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h5"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          height="40"
          width="40"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M30 16C30 16.34 30 16.67 30 17C29.7667 20.3709 28.3222 23.5436 25.9329 25.9329C23.5436 28.3222 20.3709 29.7667 17 30C16.67 30 16.34 30 16 30C15.66 30 15.33 30 15 30C11.6291 29.7667 8.45636 28.3222 6.0671 25.9329C3.67783 23.5436 2.23329 20.3709 2 17C2 16.67 2 16.34 2 16C2 15.66 2 15.33 2 15C2.23329 11.6291 3.67783 8.45636 6.0671 6.0671C8.45636 3.67783 11.6291 2.23329 15 2C15.33 2 15.66 2 16 2C16.34 2 16.67 2 17 2C20.3709 2.23329 23.5436 3.67783 25.9329 6.0671C28.3222 8.45636 29.7667 11.6291 30 15C30 15.33 30 15.66 30 16Z"
              fill="#FF8F00"
            ></path>{" "}
            <path
              d="M17 28V30C16.67 30 16.34 30 16 30C15.66 30 15.33 30 15 30V28C15 27.7348 15.1054 27.4804 15.2929 27.2929C15.4804 27.1054 15.7348 27 16 27C16.2652 27 16.5196 27.1054 16.7071 27.2929C16.8946 27.4804 17 27.7348 17 28Z"
              fill="#0D47A1"
            ></path>{" "}
            <path
              d="M30 16C30 16.34 30 16.67 30 17H28C27.7348 17 27.4804 16.8946 27.2929 16.7071C27.1054 16.5196 27 16.2652 27 16C27 15.7348 27.1054 15.4804 27.2929 15.2929C27.4804 15.1054 27.7348 15 28 15H30C30 15.33 30 15.66 30 16Z"
              fill="#0D47A1"
            ></path>{" "}
            <path
              d="M5 16C5 16.2652 4.89464 16.5196 4.70711 16.7071C4.51957 16.8946 4.26522 17 4 17H2C2 16.67 2 16.34 2 16C2 15.66 2 15.33 2 15H4C4.26522 15 4.51957 15.1054 4.70711 15.2929C4.89464 15.4804 5 15.7348 5 16Z"
              fill="#304046"
            ></path>{" "}
            <path
              d="M17 2V4C17 4.26522 16.8946 4.51957 16.7071 4.70711C16.5196 4.89464 16.2652 5 16 5C15.7348 5 15.4804 4.89464 15.2929 4.70711C15.1054 4.51957 15 4.26522 15 4V2C15.33 2 15.66 2 16 2C16.34 2 16.67 2 17 2Z"
              fill="#0D47A1"
            ></path>{" "}
            <path
              d="M16 17.0001C15.8088 17.0001 15.6217 16.9453 15.4607 16.8422C15.2997 16.7391 15.1716 16.592 15.0917 16.4184C15.0117 16.2448 14.9832 16.0519 15.0094 15.8625C15.0357 15.6732 15.1157 15.4953 15.24 15.3501L21.24 8.35005C21.3254 8.25025 21.4295 8.16823 21.5466 8.10869C21.6637 8.04915 21.7913 8.01324 21.9222 8.00303C22.0532 7.99282 22.1848 8.00849 22.3097 8.04916C22.4346 8.08983 22.5502 8.15469 22.65 8.24005C22.7498 8.32541 22.8318 8.42959 22.8914 8.54665C22.9509 8.6637 22.9868 8.79134 22.997 8.92227C23.0072 9.0532 22.9916 9.18486 22.9509 9.30973C22.9102 9.43461 22.8454 9.55025 22.76 9.65005L16.76 16.6501C16.6661 16.7598 16.5496 16.8479 16.4184 16.9084C16.2872 16.9688 16.1444 17.0001 16 17.0001Z"
              fill="#0D47A1"
            ></path>{" "}
            <path
              d="M16 17H11C10.7348 17 10.4804 16.8946 10.2929 16.7071C10.1054 16.5196 10 16.2652 10 16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15H16C16.2652 15 16.5196 15.1054 16.7071 15.2929C16.8946 15.4804 17 15.7348 17 16C17 16.2652 16.8946 16.5196 16.7071 16.7071C16.5196 16.8946 16.2652 17 16 17Z"
              fill="#0D47A1"
            ></path>{" "}
            <path
              d="M15 2C11.6291 2.23329 8.45636 3.67783 6.0671 6.0671C3.67783 8.45636 2.23329 11.6291 2 15C2 15.33 2 15.66 2 16C2 16.34 2 16.67 2 17C2.23329 20.3709 3.67783 23.5436 6.0671 25.9329C8.45636 28.3222 11.6291 29.7667 15 30C15.33 30 15.66 30 16 30V2C15.66 2 15.33 2 15 2Z"
              fill="#FFB300"
            ></path>{" "}
            <path
              d="M15 28V30C15.33 30 15.66 30 16 30V27C15.7348 27 15.4804 27.1054 15.2929 27.2929C15.1054 27.4804 15 27.7348 15 28Z"
              fill="#1565C0"
            ></path>{" "}
            <path
              d="M5 16C5 16.2652 4.89464 16.5196 4.70711 16.7071C4.51957 16.8946 4.26522 17 4 17H2C2 16.67 2 16.34 2 16C2 15.66 2 15.33 2 15H4C4.26522 15 4.51957 15.1054 4.70711 15.2929C4.89464 15.4804 5 15.7348 5 16Z"
              fill="#1565C0"
            ></path>{" "}
            <path
              d="M15 2V4C15 4.26522 15.1054 4.51957 15.2929 4.70711C15.4804 4.89464 15.7348 5 16 5V2C15.66 2 15.33 2 15 2Z"
              fill="#1565C0"
            ></path>{" "}
            <path
              d="M15.24 15.35C15.1157 15.4952 15.0357 15.6731 15.0094 15.8624C14.9832 16.0518 15.0117 16.2447 15.0917 16.4183C15.1716 16.592 15.2997 16.739 15.4607 16.8421C15.6217 16.9452 15.8088 17 16 17V14.46L15.24 15.35Z"
              fill="#1565C0"
            ></path>{" "}
            <path
              d="M11 15C10.7348 15 10.4804 15.1054 10.2929 15.2929C10.1054 15.4804 10 15.7348 10 16C10 16.2652 10.1054 16.5196 10.2929 16.7071C10.4804 16.8946 10.7348 17 11 17H16V15H11Z"
              fill="#1565C0"
            ></path>{" "}
            <path
              d="M16 30C13.2311 30 10.5243 29.1789 8.22202 27.6406C5.91973 26.1022 4.12532 23.9157 3.06569 21.3576C2.00607 18.7994 1.72882 15.9845 2.26901 13.2687C2.80921 10.553 4.14258 8.05845 6.10051 6.10051C8.05845 4.14258 10.553 2.80921 13.2687 2.26901C15.9845 1.72882 18.7994 2.00607 21.3576 3.06569C23.9157 4.12532 26.1022 5.91973 27.6406 8.22202C29.1789 10.5243 30 13.2311 30 16C30 19.713 28.525 23.274 25.8995 25.8995C23.274 28.525 19.713 30 16 30ZM16 4.00001C13.6266 4.00001 11.3066 4.70379 9.33316 6.02237C7.35977 7.34095 5.8217 9.21509 4.91345 11.4078C4.0052 13.6005 3.76756 16.0133 4.23058 18.3411C4.69361 20.6689 5.83649 22.8071 7.51472 24.4853C9.19295 26.1635 11.3312 27.3064 13.6589 27.7694C15.9867 28.2325 18.3995 27.9948 20.5922 27.0866C22.7849 26.1783 24.6591 24.6402 25.9776 22.6668C27.2962 20.6935 28 18.3734 28 16C28 12.8174 26.7357 9.76516 24.4853 7.51472C22.2349 5.26429 19.1826 4.00001 16 4.00001Z"
              fill="#263238"
            ></path>{" "}
          </g>
        </svg>
        <Link to="temple-schedule" className="flex items-center">
          Temple Schedule
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h5"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <svg
          height="40"
          width="40"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xml:space="preserve"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <circle
              style={{ fill: "#324A5E" }}
              cx="256"
              cy="256"
              r="256"
            ></circle>{" "}
            <path
              style={{ fill: "#2B3B4E" }}
              d="M510.376,284.815L365.011,139.45l-108.285,21.583l-115.884,4.486l35.323,35.323l-37.376,19.373 l55.236,55.236l-12.438,12.441l93.077,125.285l79.367,79.367C438.294,457.581,499.834,378.914,510.376,284.815z"
            ></path>{" "}
            <path
              style={{ fill: "#FFD15D" }}
              d="M352.108,190.923h-41.041c-1.838-7.38-4.73-14.348-8.576-20.687h49.617 c9.997,0,18.101-8.104,18.101-18.101s-8.104-18.101-18.101-18.101H152.997c-9.997,0-18.101,8.104-18.101,18.101 s8.104,18.101,18.101,18.101h85.333c14.853,0,27.776,8.395,34.29,20.687H152.997c-9.997,0-18.101,8.104-18.101,18.101 c0,9.997,8.104,18.101,18.101,18.101H272.62c-6.515,12.291-19.437,20.687-34.29,20.687h-85.333c-7.321,0-13.921,4.411-16.724,11.173 c-2.801,6.765-1.253,14.55,3.924,19.727l142.222,142.222c3.536,3.534,8.166,5.301,12.8,5.301c4.632,0,9.264-1.767,12.8-5.301 c7.07-7.07,7.07-18.53,0-25.6L196.698,284.013h41.632c35.109,0,64.648-24.257,72.768-56.889h41.01 c9.997,0,18.101-8.104,18.101-18.101C370.209,199.027,362.105,190.923,352.108,190.923z"
            ></path>{" "}
            <g>
              {" "}
              <path
                style={{ fill: "#F9B54C" }}
                d="M282.419,420.935c3.536,3.534,8.166,5.301,12.8,5.301c4.632,0,9.264-1.767,12.8-5.301 c7.07-7.07,7.07-18.53,0-25.6l-69.832-69.832v51.198L282.419,420.935z"
              ></path>{" "}
              <path
                style={{ fill: "#F9B54C" }}
                d="M352.108,190.923h-41.041c-1.838-7.38-4.73-14.348-8.576-20.687h49.617 c9.997,0,18.101-8.104,18.101-18.101s-8.104-18.101-18.101-18.101H238.187v36.202h0.143c14.853,0,27.776,8.395,34.29,20.687 h-34.433v36.202h34.433c-6.515,12.291-19.437,20.687-34.29,20.687h-0.143v36.202h0.143c35.109,0,64.648-24.257,72.768-56.889h41.01 c9.997,0,18.101-8.104,18.101-18.101C370.209,199.027,362.105,190.923,352.108,190.923z"
              ></path>{" "}
            </g>{" "}
          </g>
        </svg>
        <Link to="donate" className="flex items-center">
          Donate
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h5"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <svg
          viewBox="0 0 1024 1024"
          class="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          height="40"
          width="40"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M120.791847 866.352377c-2.977459 0-5.170621-0.901019-5.709184-1.308526-3.105444-2.409202-3.760731-5.940583-3.760731-10.808133 0-34.688211 16.850081-63.506487 17.010831-63.782937l1.17542-1.612619c11.070248-13.029965 33.250676-25.087238 73.340906-39.248596 28.398483-10.037148 48.200426-20.017982 58.888764-29.662982 8.439887-7.612587 18.492393-22.892028 19.015599-40.890908l-0.841634-13.714944-1.889069-11.025197-4.343321-3.483258c-5.44707-4.388373-10.213256-14.077399-12.709489-25.914538l-2.03446-9.573328-9.588686-1.934119c-6.288704-1.261427-14.277057-4.953557-20.322076-22.33913-3.123874-8.992785-4.632057-17.302638-4.632057-25.391332 0-3.837522 0.988049-11.317004 0.988049-11.317005 0.115699-0.930712 0.651191-3.587694 1.639241-6.580511l2.427632-7.40781-4.691443-6.218056c-28.615547-37.826419-43.128098-78.440879-43.128097-120.711984 0-142.312893 163.926088-258.101013 365.418529-258.101012 201.4607 0 365.359144 115.78812 365.359144 258.101012 0 142.2832-163.898443 258.040603-365.359144 258.040604-33.62849 0-68.113971-3.64708-102.46942-10.837826l-16.906394-3.543668-1.278833 22.297151c0.46382 17.474651 9.659334 32.697778 18.548707 40.613435 10.546019 9.558993 30.359224 19.554162 58.802758 29.592334 39.525045 13.958629 62.301374 26.292351 73.894828 40.018558l1.148799 1.626954h-0.015358c-0.045051 0 17.023117 28.036028 17.023117 62.997616 0 7.033068-4.894172 11.941575-11.90881 11.941575l-459.780825-0.086007-3.313293 0.265187z"
              fill="#FFFFFF"
            ></path>
            <path
              d="M441.530069 675.187867l-0.291808 5.054922c0.348121 11.504376 7.264466 23.010799 13.598221 28.646263 6.274369 5.693826 20.684531 14.961012 53.861488 26.670165 42.764618 15.107428 66.760395 28.413842 80.300254 44.44891l1.803062 2.469611c0.92764 1.481562 19.869519 32.363991 19.869519 71.759003 0 15.282512-11.504376 26.816581-26.783816 26.816581l-459.780825-0.086006c-1.511255 0.202729-2.441966 0.262115-3.314317 0.262114-5.578127 0-11.096869-1.597261-14.698897-4.328987-9.645-7.496888-9.645-18.506727-9.645-22.662678 0-39.364295 18.941879-71.119075 19.116963-71.40781l1.743676-2.499304c13.768186-16.329947 37.823348-29.662982 80.587967-44.77041 33.063305-11.67946 47.530805-20.946646 53.864559-26.670165 4.706801-4.241957 13.711872-15.978754 14.119378-30.273217l-0.811941-12.316317-0.699313-3.893836c-8.249444-6.625562-14.698898-19.057578-17.95383-34.426096-14.698898-2.963124-24.983826-13.452829-31.433279-32.046587-3.718751-10.719055-5.462428-20.625146-5.462428-30.270145 0-4.474379 1.103748-13.190715 1.103748-13.190715 0.173037-1.33617 0.871326-5.114307 2.263811-9.356264-29.225783-38.638361-46.132177-82.739149-46.132178-129.687363 0-150.520358 170.592606-272.974995 380.293536-272.974995 209.638472 0 380.23415 122.454637 380.234149 272.974995C927.282768 563.919177 756.687091 686.344121 547.048619 686.344121c-36.666357 0-71.934087-4.126258-105.51855-11.156254z"
              fill="#27323A"
            ></path>
            <path
              d="M345.019662 369.499736c3.367559 0 6.505767 0.175084 9.412578 0.434127 2.26381-0.259043 5.28632-0.404435 8.481866-0.404434 44.508295 0 99.824724 25.188603 121.788087 95.814165 3.367559 10.950454 5.054922 22.951413 5.054922 35.705952 0 9.468891-1.975075 19.610476-3.951173 29.428512 7.321804 3.284624 9.936807 16.591038 10.692434 22.080087 0.752556 0 1.103748 12.985938 1.103749 13.104709 0 9.701313-1.803062 19.580783-5.405091 30.270146-2.439919 6.972659-9.645 27.658214-31.261267 32.1029-0.348121 1.832755-1.219447 3.197594-1.684291 4.967892 28.122034 5.230006 57.291503 8.716336 87.797143 8.716335 185.002768 0 335.610156-102.410034 335.610155-228.291615 0-125.914346-150.606364-228.351001-335.610155-228.351001-185.062153 0-335.669541 102.436655-335.669541 228.351001 0 18.998192 3.890764 37.329835 10.400627 54.965236 0.348121-1.133441 0.46382-2.410226 0.871326-3.543667 23.647655-70.307134 78.731662-95.350345 122.368631-95.350345z"
              fill="#FFFFFF"
            ></path>
            <path
              d="M288.251364 837.067208c-19.87259-20.976339-33.818932-47.878926-38.989553-75.304717-10.808133 5.345705-23.12445 10.489705-36.722671 15.282512-12.200618 4.27165-48.631481 17.141888-60.718448 30.852736-1.451869 2.877118-6.390068 14.469547-9.12077 29.169469h145.551442z"
              fill="#79CCBF"
            ></path>
            <path
              d="M290.806982 774.836482c9.18118-10.168205 19.580783-18.331643 30.913145-24.257891l5.866863-3.052202-4.997584-4.299294c-9.061385-7.669925-16.850081-14.961012-23.416257-21.817973l-3.890765-4.126258-3.078823 4.8225c-3.314317 5.200314-7.205081 10.025885-12.027581 14.848385a45.98269 45.98269 0 0 1-2.790087 3.48633l-1.336171 1.508183 0.232422 2.004767a142.086614 142.086614 0 0 0 7.029997 29.401891l2.499304 7.029997 4.995537-5.548435zM407.130593 804.556802l-1.859375-2.671317c-20.21764-28.821348-44.157102-35.270802-52.698354-36.57728-6.85696 1.306478-30.852736 7.785624-51.017134 36.633594l-1.859376 2.674388 1.975075 2.615003c13.830643 17.953829 31.436351 31.200858 45.903851 34.601181l0.523205 0.115699 12.783208-0.262115c13.47945-3.400323 30.852736-16.939159 44.272802-34.544867l1.976098-2.584286zM416.023037 774.777097l4.994513 5.551506 2.499304-7.033068c3.778137-10.516326 5.869935-21.205689 6.333755-31.751708 0 0-4.590078-6.307134-5.054922-6.886653-3.426944-3.48633-6.85696-7.901323-9.936807-12.753515l-3.02251-4.881885-3.951173 4.15595c-6.566177 6.913274-14.4675 14.321084-23.58827 22.050394l-5.05697 4.299295 5.869935 3.052202c11.388676 5.925224 21.78828 14.058969 30.913145 24.197482z"
              fill="#FFFFFF"
            ></path>
            <path
              d="M418.054426 837.067208h146.367479c-3.430016-17.924136-10.283904-30.097109-10.344314-30.243524-11.156254-12.461708-47.994625-25.507031-60.079543-29.779705-13.654535-4.852193-26.03126-10.022813-36.898779-15.398211-5.168573 27.486202-19.172253 54.445102-39.044843 75.42144z"
              fill="#79CCBF"
            ></path>
            <path
              d="M454.777097 584.660022c3.022509-9.353192 4.706801-19.259283 2.90681-29.573904-0.815013-5.027277-2.441966-8.19313-5.173692-10.77844-1.859376-0.902043-5.810549 0.318428-5.982562-2.180876 5.518742-21.728894 7.261395-44.157102 1.451869-63.44915-24.403283-81.549394-95.87355-72.570944-95.87355-72.570944s-70.131025-9.356264-96.802214 72.570944c-6.218056 19.146656-4.123186 41.720255 1.511255 63.44915-0.115699 2.499304-4.126258 1.278833-5.926249 2.180876-2.847425 2.58531-4.414994 5.75014-5.286319 10.77844-1.803062 10.314621-0.175084 20.220711 3.019437 29.573904 4.766186 14.149071 9.996192 20.07532 26.090646 15.196506 0 36.633593 14.119379 39.974531 17.198202 43.259155 9.12077 9.876398 16.850081 33.873198 16.850081 45.435935 4.241957 4.706801 16.269538 19.173277 44.392596 41.66087 25.855152-20.628218 37.767034-34.223367 43.288847-41.66087h0.1157c0-0.056314 0.056314-0.115699 0.056313-0.173036 0.523205-0.755627 1.338218-1.743677 1.803062-2.383605-0.699314-0.493513-0.930712-2.499304-1.047434-4.679156 1.803062-12.985938 7.612587-29.544211 14.063065-38.201162 2.148111-2.963124 17.138816-6.101333 17.138816-43.259155 16.153839 4.879837 21.382821-1.046411 26.205321-15.195482z"
              fill="#F4CE73"
            ></path>
            <path
              d="M752.448206 540.907354c0 20.512519-16.677044 37.186491-37.186491 37.186491-20.512519 0-37.186491-16.673973-37.186491-37.186491 0-20.509447 16.674996-37.186491 37.186491-37.186491 20.508423 0 37.186491 16.678068 37.186491 37.186491zM573.136193 437.308589h208.245988c8.19313 0 14.875006-6.625562 14.875006-14.875006 0-8.19313-6.681876-14.875006-14.875006-14.875006H573.136193c-8.249444 0-14.815621 6.681876-14.815621 14.875006 0 8.249444 6.566177 14.875006 14.815621 14.875006zM770.750156 488.730158c0 16.442574 13.307438 29.748988 29.748988 29.748988 16.386261 0 29.750012-13.307438 29.750012-29.748988 0-16.442574-13.363751-29.750012-29.750012-29.750012-16.442574 0.001024-29.748988 13.307438-29.748988 29.750012zM599.225815 523.013934c-24.579391 0-44.56768 20.045627-44.567681 44.680308 0 24.579391 19.988289 44.56768 44.567681 44.567681 24.576319 0 44.623994-19.988289 44.623994-44.567681 0-24.635705-20.047675-44.680308-44.623994-44.680308zM573.136193 372.46286h208.245988c8.19313 0 14.875006-6.681876 14.875006-14.875006 0-8.249444-6.681876-14.875006-14.875006-14.875006H573.136193c-8.249444 0-14.815621 6.625562-14.815621 14.875006 0 8.194154 6.566177 14.875006 14.815621 14.875006zM358.207305 307.561841h423.174876c8.19313 0 14.875006-6.625562 14.875006-14.875006 0-8.19313-6.681876-14.875006-14.875006-14.875006H358.207305c-8.19313 0-14.875006 6.681876-14.875006 14.875006 0.001024 8.249444 6.681876 14.875006 14.875006 14.875006z"
              fill="#27323A"
            ></path>
          </g>
        </svg>
        <Link to="contact-us" className="flex items-center">
          Contact
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="dark:bg-black mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 sticky">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900 ">
        <Link to="/">
          <img
            src={iskcondhanbadLogo}
            alt="ISKCON Dhanbad"
            className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl max-h-32"
          />
        </Link>
        <div className="hidden lg:block">{navList}</div>
        {/* <div className="flex items-center gap-x-1">
          <Button variant="text" size="lg" className="hidden lg:inline-block">
            <span>Log In</span>
          </Button>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block text-black"
          >
            <span>Sign in</span>
          </Button>
        </div> */}
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-black"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          {/* <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="text-black">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="text-black">
              <span>Sign in</span>
            </Button>
          </div> */}
        </div>
      </MobileNav>
    </Navbar>
  );
};

export default MainNavbar;
