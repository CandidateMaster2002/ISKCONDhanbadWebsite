import React from 'react'
import TopmostBannerCarousel from '../components/TopmostBannerCarousel'
import SocialMediaLinks from '../components/SocialMediaLinks'
import Products from '../components/Products/Products'
import Blogs from '../components/Blogs'


const Home = () => {
  return (
    <>
    
    
     {/* <Hero handleOrderPopup={handleOrderPopup} /> */}
      {/* <Services /> */}
      <TopmostBannerCarousel />
      <SocialMediaLinks />
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