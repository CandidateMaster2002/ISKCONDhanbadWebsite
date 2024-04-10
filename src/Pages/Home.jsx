import TopmostBannerCarousel from "../components/TopmostBannerCarousel";
import OurServices from "../components/OurServices/OurServices";
import IskconDhanbadHighlights from "../components/IskconDhanbadHighlights";
import IskconIn2023 from "../components/IskconIn2023";

import DonateComp from "../components/DonateComp";
const Home = () => {
  return (
    <>
      <TopmostBannerCarousel />
      <IskconIn2023 />
      <DonateComp></DonateComp>
      <OurServices />
      <IskconDhanbadHighlights />
    </>
  );
};

export default Home;
