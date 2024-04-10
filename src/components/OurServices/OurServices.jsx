import React from "react";
import Heading from "../Shared/Heading";
import OurServiceCard from "./OurServiceCard";
import { OurServicesData } from "../../InfoAndData";

const OurServices = () => {
  return (
    <div>
      <div className="container dark:bg-gray-950">
        <Heading title="Our Services"/>
        <OurServiceCard data={OurServicesData} />
      </div>
    </div>
  );
};

export default OurServices;
