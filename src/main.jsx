import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './i18n.js'
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "flowbite";
import AboutIskcon from "./Pages/AboutIskcon.jsx";
import AboutISKCONFounder from "./Pages/AboutISKCONFounder.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
// import AboutISKCONDhanbad from "./Pages/AboutISKCONDhanbad.jsx";
// import BookDistribution from "./Pages/BookDistribution.jsx";
// import DhanbadTribalCare from "./Pages/DhanbadTribalCare.jsx";
// import GirlsEmpowerment from "./Pages/GirlsEmpowerment.jsx";
import Donate from "./Pages/Donation/Donate.jsx";
import Home from "./Pages/Home.jsx";
import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
import RefundCancel from "./Pages/RefundCancel.jsx";
import TnC from "./Pages/TnC.jsx";
// import VillagePreaching from "./Pages/VillagePreaching.jsx";
// import YouthEmpowerment from "./Pages/YouthEmpowerment.jsx";
// import DhamYatra from "./Pages/DhamYatra.jsx";
// import Festivals from "./Pages/Festivals.jsx";
import TempleSchedule from "./Pages/TempleSchedule.jsx";
import OurServices from "./components/OurServices/OurServices.jsx";
import DonateEveryMonth from "./Pages/Donation/DonateEveryMonth.jsx";
import ComingSoon from "./Pages/ComingSoon.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about-iskcon", element: <AboutIskcon /> },
      { path: "about-iskcon-dhanbad", element: <ComingSoon /> },
      { path: "about-iskcon-founder", element: <AboutISKCONFounder /> },
      { path: "book-distribution", element: <ComingSoon /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "tribal-care", element: <ComingSoon /> },
      { path: "donate", element: <Donate /> },
      { path: "girls-empowerment", element: <ComingSoon /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "refund-cancel", element: <RefundCancel /> },
      { path: "terms-and-conditions", element: <TnC /> },
      { path: "village-preaching", element: <ComingSoon /> },
      { path: "youth-empowerment", element: <ComingSoon /> },
      { path: "dham-yatra", element: <ComingSoon /> },
      { path: "festivals", element: <ComingSoon /> },
      { path: "temple-schedule", element: <TempleSchedule /> },
      { path: "donate-every-month", element: <DonateEveryMonth /> },
      { path: "our-services", element: <OurServices /> },
      { path: "coming-soon", element: <ComingSoon /> },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
 
    <RouterProvider router={router} />
);
