import Heading from "../Shared/Heading";
import OurServiceCard from "./OurServiceCard";
import { OurServicesData } from "../../InfoAndData";
import { useTranslation } from "react-i18next";
const OurServices = () => {

  const {t}=useTranslation();
  
  return (
    <div>
      <div className="container dark:bg-gray-950 mt-10">
        <Heading title={t("Our Services")}/>
        <OurServiceCard data={OurServicesData} />
      </div>
    </div>
  );
};

export default OurServices;
