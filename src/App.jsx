import React from "react";

import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Banner from "./components/Banner";
import { Outlet } from "react-router-dom";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";
import PrivacyPolicy from "../src/Pages/PrivacyPolicy.jsx";
import Footer from "./components/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import TopmostBannerCarousel from "./components/TopmostBannerCarousel.jsx";
import DownFooter from "./components/DownFooter.jsx";
import TopmostNavbar from "./components/Navbar/TopmostNavbar.jsx";

import MainNavbar from "./components/Navbar/MainNavbar.jsx";
import SocialMediaBar from "./components/SocialMediaBar.jsx";
import DonateComp from "./components/DonateComp.jsx";
const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "14 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#2dcc6f",
};

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="dark:bg-gray-950 dark:text-white duration-200 overflow-hidden">
      <TopmostNavbar />
      <MainNavbar />
      <Outlet />
      <Footer />
      <DownFooter />
    </div>
  );
};

export default App;
