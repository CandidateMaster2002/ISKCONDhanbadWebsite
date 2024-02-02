import React from "react";
import { ActivitiesLinks, AboutLinks } from "../InfoAndData.js";
import { FaMobileAlt } from "react-icons/fa";
// import { ActivitiesLinks } from "../InfoAndData";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";

import { FiClock } from "react-icons/fi";

// const AboutLinks = [
//   {
//     title: "About ISKCON",
//     link: "/terms-and-conditions",
//   },
//   {
//     title: "About ISKCON Founder",
//     link: "/privacy-policy",
//   },
//   {
//     title: "About ISKCON Dhanbad",
//     link: "/refund-cancel",
//   },
// ];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl
"
            >
              ISKCON Dhanbad
            </a>
            <p className="text-gray-600 dark:text-white/70  lg:pr-24 pt-3">
             ISKCON is serving humanity since 56 years ,distributed 300+ crore meals around the world.
            </p>
            <p className="text-gray-600 mt-4">
              Support us in our mission... 
            </p>
            <a
              href="https://www.youtube.com/channel/UC1H-a1MKEFXRiFlGNLcy7gQ"
              target="_blank"
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full"
            >
              DONATE Now !
            </a>
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                <span> Our Activities </span>
              </h1>
              <ul className="space-y-3">
                {ActivitiesLinks.map((data, index) => (
                  <li
                    key={index}
                    className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                  >
                    <span> {data.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {AboutLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>
                    21, Dhruv Singh Colony, Rahargora, Dhaiya, Dhanbad,
                    Jharkhand.
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+91 9903013399</p>
                </div>

                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl hover:text-primary duration-200" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl hover:text-primary duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
