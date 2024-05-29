import Button from "../Shared/Button";
import { useTranslation } from "react-i18next";
import {useEffect} from 'react'


const OurServiceCard = ({ data }) => {

  const { t ,i18n} = useTranslation();

  useEffect(() => {
    const language = localStorage.getItem('language') || 'en'; 
    i18n.changeLanguage(language);
  }, [i18n]);


  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
        {/* card section */}
        {data.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.aosDelay}
            className="group"
            key={data.id}
          >
            <div className="relative">
              <img
                src={data.img}
                alt=""
                className="h-[180px] w-[260px] object-cover rounded-md"
              />
              {/* hover button */}
              <div className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-full w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200 rounded-md">
              <a href={data.link}>
                  <Button
                    text={t('Know more')}
                    bgColor={"bg-primary"}
                    textColor={"text-white"}
                  />
                </a>
              </div>
            </div>
            <div className="leading-7 py-2">
              <h2 className="font-semibold">{t(data.title)}</h2>
              {/* <h2 className="font-bold">${data.price}</h2> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServiceCard;
