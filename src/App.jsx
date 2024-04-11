import React from "react";

import { Outlet } from "react-router-dom";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";
import Footer from "./components/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import DownFooter from "./components/DownFooter.jsx";
import TopmostNavbar from "./components/Navbar/TopmostNavbar.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
import MainNavbar from "./components/Navbar/MainNavbar.jsx";

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
      <ScrollToTop/>
      <TopmostNavbar />
      <MainNavbar />
      <Outlet />
      <Footer />
      <DownFooter />
    </div>
  );
};

export default App;
