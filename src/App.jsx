import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Services from "./components/Services/Services";
import Banner from "./components/Banner";
import SocialMediaLinks from "./components/SocialMediaLinks.jsx";
import { Outlet } from "react-router-dom";
import headphone from "./assets/hero/headphone.png";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png";
import PrivacyPolicy from "../src/Pages/PrivacyPolicy.jsx";
import Products from "./components/Products/Products";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer.jsx";
import Popup from "./components/Popup.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import TopmostBannerCarousel from "./components/TopmostBannerCarousel.jsx";
import DownFooter from "./components/DownFooter.jsx";
import DonateNavbar from "./components/DonateNavbar.jsx";
import RightNavbar from "./components/Navbar/RightNavbar.jsx";
import Navbar2 from "./components/Navbar/Navbar2.jsx"
import Navbar3 from "./components/Navbar/Navbar3.jsx";



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
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

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
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <RightNavbar/>
      <Navbar3/>
      {/* <DonateNavbar/> */}
     <Outlet/>
      <Footer />
      <DownFooter />
      {/* <Popup orderPopup={orderPopup} handleOrderPopup={handleOrderPopup} /> */}
    </div>
  );
};

export default App;
