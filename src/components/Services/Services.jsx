import  { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import holybook from "../../assets/books.jpg";
import socialmedia from "../../assets/socialmediamobile.jpg";
import festival from "../../assets/diwalilamps.jpg";
import indianfood from "../../assets/deliciousindianfood.jpg";

const ServiceData = [
  {
    id: 1,
    icon: indianfood,
    stats: "25K+",
    title: "People Served Free Prasad",
  },
  {
    id: 2,
    icon: festival,
    stats: "10+",
    title: "Grand Festivals celebrated",
  },
  {
    id: 3,
    icon: holybook,
    stats: "4200+",
    title: "Holy Books distributed",
  },
  {
    id: 4,
    icon: socialmedia,
    stats: "500K+",
    title: "reach on Social Media",
  },
];

const Services = () => {
  const { t } = useTranslation();
  const [iconHeight, setIconHeight] = useState("auto");

  useEffect(() => {
    const maxHeight = Math.max(
      ...ServiceData.map((data) => {
        const titleHeight = document.getElementById(
          `title-${data.id}`
        )?.offsetHeight;
        const statsHeight = document.getElementById(
          `stats-${data.id}`
        )?.offsetHeight;
        return titleHeight + statsHeight;
      })
    );
    setIconHeight(`${maxHeight}px`);
  }, []);

  return (
    <div className="dark:bg-gray-950">
      <div className="container my-14 md:my-20">
        <h1 className="text-2xl font-bold mb-6 text-center">
          ISKCON Dhanbad in 2023
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 gap-y-8">
          {ServiceData.map((data) => (
            <div key={data.id} className="flex items-center gap-4">
              <img
                src={data.icon}
                alt=""
                style={{ height: iconHeight, width: iconHeight }}
                className="rounded-full h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 xl:h-28 xl:w-28 text-primary"
              />
              <div>
                <h1 id={`stats-${data.id}`} className="text-xl md:text-2xl font-bold mb-1">
                  {data.stats}
                </h1>
                <h1
                  id={`title-${data.id}`}
                  className="text-base md:text-lg font-bold"
                >
                  {t(data.title)}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
