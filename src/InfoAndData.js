import React from 'react'


const handleCallClick = (phoneNumber) => {
  const telUrl = `tel:${phoneNumber}`;
  window.location.href = telUrl;
};


const SocialHandleLinks = {
    facebook: "https://m.facebook.com/profile.php/?id=100064648604080",
    whatsapp: "https://wa.me/919903013399",
    instagram: "https://www.instagram.com/iskcondhanbadofficial/?hl=en",
    linkedin: "https://www.linkedin.com/in/yourProfile",
    youtube:"https://www.youtube.com/@iskcondhanbad",
    callingno:"+91 9903013399"
  };
  
  export  {SocialHandleLinks,handleCallClick};