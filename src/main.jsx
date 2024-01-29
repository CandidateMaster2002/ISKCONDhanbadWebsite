import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopmostBannerCarousel from "./components/TopmostBannerCarousel/TopmostBannerCarousel.jsx";
import ContactUs from "./components/Pages/ContactUs.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <ContactUs/> */}
    {/* <TopmostBannerCarousel/> */}
  </React.StrictMode>
);
