import React from 'react'
import TopmostBannerCarousel from '../components/TopmostBannerCarousel'
import SocialMediaLinks from '../components/SocialMediaLinks'
import Products from '../components/Products/Products'
import Blogs from '../components/Blogs'
import Services from '../components/Services/Services'
import Category from '../components/Category/Category'
import Banner from '../components/Banner'
import headphone from "../assets/hero/headphone.png";
import gurukul from "../assets/JetAgeGurukul/voicessp.jpg"
import DonationSection from '../components/DonationSection'
const Home = () => {

  const BannerData = {
    discount: "30% OFF",
    title: "Fine Smile",
    date: "10 Jan to 28 Jan",
    image: gurukul,
    title2: "Air Solo Bass",
    title3: "Winter Sale",
    title4:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
    bgColor: "orange",
  };

  return (
    <>
    
    
     {/* <Hero handleOrderPopup={handleOrderPopup} /> */}
      <TopmostBannerCarousel />
      <Services />
      <SocialMediaLinks />
      <DonationSection/>
      {/* <Category /> */}
      {/* <Category2 /> */}
      {/* <Banner data={BannerData} /> */}
      <Products />
      {/* <Banner data={BannerData2} /> */}
      <Blogs />
    </>
  )
}

export default Home