import React from "react";
import Heading from "../components/Shared/Heading";

// import images
import Gurukul from "../assets/JetAgeGurukul/voicessp.jpg";
import IitJanmashtmi from "../assets/ISMJanmashtami/iitjanmashtmi.jpg";
import JagJivanNagar from "../assets/ISKCONProjects/jagjivannagar.jpg";

const BlogData = [
  {
    title: "Jet Age GuruKul",
    subtitle: "75+ boys getting trained in Indian Wisdom and Practices",
    published: "Jan 20, 2024 by Dilshad",
    image: Gurukul,
    aosDelay: "0",
  },
  {
    title: "IIT Dhanbad Official Janmashatmi",
    subtitle:
      "IIT Dhanbad invited ISKCON Dhanbad for Janmashtami celebration with 1000+ students",
    published: "Jan 20, 2024 by Satya",
    image: IitJanmashtmi,
    aosDelay: "200",
  },
  {
    title: "Upcoming ISKCON Meditation Center",
    subtitle:
      "ISKCON Meditation Center under development in Jagjivan Nagar.",
    published: "Jan 20, 2024 by Sabir",
    image: JagJivanNagar,
    aosDelay: "400",
  },
];
const Blogs = () => {
  return (
    <div className="my-12 dark:bg-black">
      <div className="container">
        {/* Header section */}
        <Heading title="ISKCON Dhanbad Highlights"/>

        {/* Blog section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7 dark:bg-black">
          {/* Blog card */}
          {BlogData.map((data) => (
            <div
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              key={data.title}
              className="bg-white dark:text-black"
            >
              {/* image section */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-[220px]  hover:scale-105 duration-500"
                />
              </div>
              {/* content section */}
              <div className="space-y-2">
                {/* <p className="text-xs text-gray-500">{data.published}</p> */}
                <p className="font-bold line-clamp-2">{data.title}</p>
                <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-400">
                  {data.subtitle} 
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

export default Blogs;
