import Heading from "../Shared/Heading";
import OurServiceCard from "./OurServiceCard";
import { OurServicesData } from "../../InfoAndData";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
const OurServices = () => {

  const {t,i18n}=useTranslation();

  useEffect(() => {
    // Set the language based on localStorage
    const language = localStorage.getItem('language') || 'en'; // Default to 'en' if no language is set
    i18n.changeLanguage(language);
  }, [i18n]);

  
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
