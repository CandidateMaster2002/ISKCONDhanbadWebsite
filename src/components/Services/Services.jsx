import React, { useEffect } from "react";
import {
  FaCarSide,
  FaHeadphonesAlt,
  FaWallet,
  FaCheckCircle,
} from "react-icons/fa";

import food from "../../assets/gajarhalwa.png";
import festival from "../../assets/festival.png"
import holybook from "../../assets/holybook.png"
import socialmedia from "../../assets/socialmedia.png";
import { useTranslation } from 'react-i18next';

const ServiceData = [

  {
    id: 1,
    icon: <img src={food} className="h-8 md:h-10 rounded-full text-4xl md:text-5xl text-primary" />,
    title: '25K+ People Served Free Prasad',
    description: "Free Shipping On All Order",
  },
  {
    id: 2,
    icon: <img src={festival} className="h-8 md:h-10 rounded-full text-4xl md:text-5xl text-primary" />,
    title: "10+ Grand Festivals celebrated",
    description: "",
  },
  {
    id: 3,
    icon: <img src={holybook} className="h-8 md:h-10 rounded-full text-4xl md:text-5xl text-primary" />,
    title: "4200+ Holy Books distributed",
    description: "All Payment Secure",
  },
  {
    id: 4,
    icon: <img src={socialmedia} className="h-8 md:h-10 rounded-full text-4xl md:text-5xl text-primary" />,
    title: "500K+ reach on Social Media",
    description: "Technical Support 24/7",
  },
];

const Services = () => {


  useEffect(() => {
    console.log("jfj")
  // <Services/>
   
  }, [localStorage.getItem('language')]);


  const { t } = useTranslation();
  return (
    <div className="dark:bg-black">
 <div className="container my-14 md:my-20">
  <h1 className="text-2xl font-bold mb-6 text-center">ISKCON Dhanbad in 2023</h1>
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
    {ServiceData.map((data) => (
      <div className="flex flex-col items-start sm:flex-row gap-4">
        {data.icon}
        <div>
          <h1 className="lg:text-xl font-bold line-clamp-3">{t(data.title)}</h1>
          {/* Additional styling for longer titles */}
        </div>
      </div>
    ))}
  </div>
</div>


  </div>
  
  );
};

export default Services;