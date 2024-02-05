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
// import {OurServicesSvg,TempleScheduleSvg,DonateSvg,ContactUsSvg} from "../../Svg";
import { OurServicesSvg,TempleScheduleSvg,DonateSvg,ContactUsSvg } from "../../Svg";

const MainNavbar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-black dark:text-white">
      <Typography
        as="li"
        variant="h5"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >

<div dangerouslySetInnerHTML={{ __html: OurServicesSvg }} />
      
      {/* <svg
fill="green"
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
</svg> */}


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
       <div dangerouslySetInnerHTML={{ __html: TempleScheduleSvg }} />
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
        <div dangerouslySetInnerHTML={{ __html: DonateSvg }} />
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
         <div dangerouslySetInnerHTML={{ __html: ContactUsSvg }} />
        <Link to="contact-us" className="flex items-center">
          Contact Us
        </Link>
      </Typography>
    </ul>
  );

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 dark:bg-gray-950 dark:text-white">
      <div className="container mx-auto flex items-center justify-between ">
        <Link to="/">
          <img
            src={iskcondhanbadLogo}
            alt="ISKCON Dhanbad"
            className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl max-h-32"
          />
        </Link>
        <div className="hidden lg:block">{navList}</div>
     
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
    </div>
  );
};

export default MainNavbar;
