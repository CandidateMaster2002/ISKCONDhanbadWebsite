import React from "react";
import { MobileNav, Typography, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import iskcondhanbadLogo from "../../assets/iskcon-dhanbad-image-removebg-preview.png";
import {useTranslation} from "react-i18next";
import i18n from "i18next";


import ContactUs from "../../assets/contact-removebg-preview.png";
import Donate from "../../assets/3d-render-hand-put-golden-coin-into-piggy-bank-removebg-preview (1).png";
import Clock from "../../assets/clock-removebg-preview.png";
import Services from "../../assets/servicemic-removebg-preview.png";

const MainNavbar = () => {
  const [openNav, setOpenNav] = React.useState(false);

  const { t } = useTranslation();

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-black dark:text-white">
      <Typography
        as="li"
        variant="h5"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <img src={Services} alt="Our Services" className="w-10 h-10" />
        <Link to="our-services" className="flex items-center">
          {t('Our Services')}
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h5"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <img src={Clock} alt="Temple Schedule" className="w-10 h-10" />
        <Link to="temple-schedule" className="flex items-center">
          {t('Temple Schedule')}
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h5"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <img src={Donate} alt="Donate" className="w-10 h-10" />
        <Link to="donate" className="flex items-center">
          {t('Donate')}
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="h5"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <img src={ContactUs} alt="Contact Us" className="w-10 h-10" />
        <Link to="contact-us" className="flex items-center">
          {t('Contact Us')}
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
              fill="#FF0000"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="#FF0000"
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
              fill="red"
              stroke="#333333"
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
        <div className="container mx-auto">{navList}</div>
      </MobileNav>
    </div>
  );
};

export default MainNavbar;
