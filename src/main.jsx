import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopmostBannerCarousel from "./components/TopmostBannerCarousel.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "flowbite";
import AboutIskcon from "./Pages/AboutIskcon.jsx";
import AboutISKCONDhanbad from "./Pages/AboutISKCONDhanbad.jsx";
import AboutISKCONFounder from "./Pages/AboutISKCONFounder.jsx";
import BookDistribution from "./Pages/BookDistribution.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import DhanbadTribalCare from "./Pages/DhanbadTribalCare.jsx";
import Donate from "./Pages/Donation/Donate.jsx";
import GirlsEmpowerment from "./Pages/GirlsEmpowerment.jsx";
import Home from "./Pages/Home.jsx";
import PrivacyPolicy from "./Pages/PrivacyPolicy.jsx";
import RefundCancel from "./Pages/RefundCancel.jsx";
import TnC from "./Pages/TnC.jsx";
import VillagePreaching from "./Pages/VillagePreaching.jsx";
import YouthEmpowerment from "./Pages/YouthEmpowerment.jsx";
import DhamYatra from "./Pages/DhamYatra.jsx";
import Festivals from "./Pages/Festivals.jsx";
import Faaltu from "./Pages/Faaltu.jsx";
import TempleSchedule from "./Pages/TempleSchedule.jsx";
import OurServices from "./components/OurServices/OurServices.jsx";
import DonateEveryMonth from "./Pages/Donation/DonateEveryMonth.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about-iskcon", element: <AboutIskcon /> },
      { path: "about-iskcon-dhanbad", element: <AboutISKCONDhanbad /> },
      { path: "about-iskcon-founder", element: <AboutISKCONFounder /> },
      { path: "book-distribution", element: <BookDistribution /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "dhanbad-tribal-care", element: <DhanbadTribalCare /> },
      { path: "donate", element: <Donate /> },
      { path: "Faaltu", element: <Faaltu /> },
      { path: "girls-empowerment", element: <GirlsEmpowerment /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "refund-cancel", element: <RefundCancel /> },
      { path: "terms-and-conditions", element: <TnC /> },
      { path: "village-preaching", element: <VillagePreaching /> },
      { path: "youth-empowerment", element: <YouthEmpowerment /> },
      { path: "dham-yatra", element: <DhamYatra /> },
      { path: "festivals", element: <Festivals /> },
      { path: "temple-schedule", element: <TempleSchedule /> },
      { path: "donate-every-month", element: <DonateEveryMonth /> },
      { path: "our-services", element: <OurServices /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
