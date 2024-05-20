import Heading from "./Shared/Heading";
import { useTranslation } from "react-i18next";
import Gurukul from "../assets/voice_photo cropped.jpg";
import IitJanmashtmi from "../assets/ISMJanmashtami/iitjanmashtmi.jpg";
import JagJivanNagar from "../assets/ISKCONProjects/jagjivannagar.jpg";
import { useEffect } from "react";

const BlogData = [
  {
    title: "Jet Age Gurukul",
    subtitle:"jet-age-gurukul-subtitle",
    image: Gurukul,
    aosDelay: "0",
  },
  {
    title: "IIT Dhanbad Official Janmashatmi",
    subtitle:"iit-dhanbad-janmashtmi-subtitle",
    image: IitJanmashtmi,
    aosDelay: "200",
  },
  {
    title: "Upcoming ISKCON Meditation Center",
    subtitle:"iskcon-meditation-center-subtitle",
    image: JagJivanNagar,
    aosDelay: "400",
  },
];
const IskconDhanbadHighlights = () => {
  const { t } = useTranslation();

  useEffect(()=>{},[])
  
  return (
    <div className="my-12 dark:bg-gray-950">
      <div className="container">
        {/* Header section */}
        <Heading title={t("ISKCON Dhanbad Highlights")} />

        {/* Blog section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7 dark:bg-gray-950">
          {/* Blog card */}
          {BlogData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.title}
              className="flex flex-col"
            >
              {/* image section */}
              <div className="overflow-hidden rounded-2xl mb-2 dark:bg-gray-950 h-80">
                <img
                  src={data.image}
                  alt=""
                  className="hover:scale-105 duration-500 object-cover h-full"
                />
              </div>
              {/* content section */}
              <div className="space-y-2 dark:bg-gray-950">
                {/* <p className="text-xs text-gray-500">{data.published}</p> */}
                <p className="font-bold line-clamp-2">{t(data.title)}</p>
                <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-400">
                  {t(data.subtitle)}
                  {/* Click <a href="/donate">here</a> to support. */}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IskconDhanbadHighlights;
