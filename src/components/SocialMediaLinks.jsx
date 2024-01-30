import React from "react";
import whatsapp from "../assets/whatsapp.png";
import instagram from "../assets/Instagram.webp";
import call from "../assets/call2.png";
import youtube from "../assets/youtube3.png";
import facebook from "../assets/Facebook.png";
import { SocialHandleLinks, handleCallClick } from "../InfoAndData";

const SocialMediaLinks = () => {
  return (
    <div
      data-aos="zoom-out"
      className="py-8 mt-0.5 md:block  dark:bg-white/10"
    >
      <div className="container">
        <div className="grid grid-cols-5 gap-3 place-items-center opacity-100">
          <a
            href={SocialHandleLinks.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="brand" className="w-[80px] dark:invert hover:opacity-75" />
          </a>

        
            <img onClick={()=>handleCallClick(SocialHandleLinks.callingno)} src={call} alt="brand" className="w-[80px] dark:invert cursor-pointer hover:opacity-75" />
         

          <a
            href={SocialHandleLinks.youtube}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youtube} alt="brand" className="w-[80px] dark:invert hover:opacity-75" />
          </a>

          <a
            href={SocialHandleLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} alt="brand" className="w-[80px] dark:invert hover:opacity-75" />
          </a>

          <a
            href={SocialHandleLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebook} alt="brand" className="w-[80px] dark:invert hover:opacity-75" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
