import React from 'react'
import DhamYatra from "../src/assets/dhamyatra.png";
import GirlsEmpowerment from "../src/assets/maataji_abhishekam.png";
import YouthEmpowerment from "../src/assets/Presankalpa2023.png";
import BookDistribution from "../src/assets/tribalbgdistr.png";
import TribalPreaching from "../src/assets/tribalkirtansusakhapr.png";
import RathYatra from "../src/assets/rathyatra.png";
import VillagePreaching from "../src/assets/VillagePreaching/villagepreaching.jpeg";
const handleCallClick = (phoneNumber) => {
  const telUrl = `tel:${phoneNumber}`;
  window.location.href = telUrl;
};

// const handleLanguageChange = (lang) => {
//   const { t,i18n } = useTranslation();
//   localStorage.setItem("language", lang);
//   i18n.changeLanguage(lang);
// };

const currentLanguage=()=>localStorage.getItem('language')


const SocialHandleLinks = {
    facebook: "https://m.facebook.com/profile.php/?id=100064648604080",
    whatsapp: "https://wa.me/919903013399",
    instagram: "https://www.instagram.com/iskcondhanbadofficial/?hl=en",
    linkedin: "https://www.linkedin.com/in/yourProfile",
    youtube:"https://www.youtube.com/@iskcondhanbad",
    callingno:"+91 9903013399"
  };
  

  const AboutDropdownLinks = [
    {
      id: 1,
      name: "About ISKCON",
      link: "/about-iskcon",
    },
    {
      id: 2,
      name: "ISKCON Dhanbad",
      link: "/about-iskcon-dhanbad",
    },
    {
      id: 3,
      name: "ISKCON Founder",
      link: "/about-iskcon-founder",
    },
  ];
  
  const ActivitiesDropdownLinks = [
    {
      id: 1,
      name: "Youth Empowerment",
      link: "/youth-empowerment",
    },
    {
      id: 2,
      name: "Girls Empowerment",
      link: "/girls-empowerment",
    },
    {
      id: 3,
      name: "Dhanbad Tribal Care",
      link: "/dhanbad-tribal-care",
    },
    {
      id: 4,
      name: "Book Distribution",
      link:"book-distribution"
    },
    {
      id: 5,
      name: "Village Preaching",
      link:"village-preaching",
    },
    {
      id:6,
      name:"Dham Yatra",
      link:"dham-yatra"
    }
  ];
  
  const ProductsData = [
    {
      id: 1,
      img: DhamYatra,
      title: "Dham Yatra",
      link: "dham-yatra",
      aosDelay: "0",
    },
    {
      id: 2,
      img: YouthEmpowerment,
      title: "Youth Empowerment",
      link: "youth-empowerment",
      aosDelay: "200",
    },
    {
      id: 3,
      img: GirlsEmpowerment,
      title: "Girls Empowerment",
      link: "girls-empowerment",
      aosDelay: "400",
    },
    {
      id: 4,
      img: BookDistribution,
      title: "Book Distribution",
      link: "book-distribution",
      aosDelay: "600",
    },
    {
      id: 5,
      img: TribalPreaching,
      title: "Tribal Care",
      link: "dhanbad-tribal-care",
      aosDelay: "0",
    },
    {
      id: 6,
      img: RathYatra,
      title: "Festivals",
      link: "festivals",
      aosDelay: "200",
    },
    
    {
      id: 7,
      img: VillagePreaching,
      title: "Village Preaching",
      link: "village-preaching",
      aosDelay: "400",
    },
    // {
    //   id: 8,
    //   img: Img5,
    //   title: "Printed ",
    //   link: "220",
    //   aosDelay: "600",
    // },
  ];
  
  export  {SocialHandleLinks,AboutDropdownLinks,ActivitiesDropdownLinks,ProductsData,handleCallClick,currentLanguage};