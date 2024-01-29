import React from "react";
import whatsapp from "../../assets/whatsapp.png";
import instagram from "../../assets/Instagram.webp";
import call from "../../assets/call2.png";
import youtube from "../../assets/youtube3.png";
import facebook from "../../assets/Facebook.png";



const Partners = () => {
  return (
    <div
      data-aos="zoom-out"
      className="py-8 mt-0.5 md:block bg-gray-200 dark:bg-white/10"
    >
      <div className="container">
        <div className="grid grid-cols-5 gap-3 place-items-center opacity-100">
          <img src={whatsapp} alt="brand" className="w-[80px] dark:invert" />
          <img src={call} alt="brand" className="w-[80px] dark:invert" />
          <img src={youtube} alt="brand" className="w-[80px] dark:invert" />
          <img src={instagram} alt="brand" className="w-[80px] dark:invert" />
          <img src={facebook} alt="brand" className="w-[80px] dark:invert" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
