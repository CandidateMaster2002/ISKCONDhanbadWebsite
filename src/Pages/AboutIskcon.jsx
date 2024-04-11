import React from 'react'
import { Transition } from '@headlessui/react';
import Mayapur from "../assets/mayapur.jpg"
import Radhamadhav from "../assets/radhamadhav.jpg"
import PrabupadaMp from "../assets/prabhupadamww.png"
import Prabhupada from "../assets/prabhupada.jpeg"
import IskconLogo from "../assets/iskcon_logo.jpg"
import HarinamSankirtan from "../assets/Hariinam_Sankirtan.jpg"
const AboutIskcon = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
    {/* Cover Photo and Title */}
    <div className="relative h-64 w-full mb-0">
      <img
        src={Radhamadhav}
        alt="Cover"
        className="object-cover h-full w-full rounded-t-md"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-white mt-32">About ISKCON</h1>
      </div>
    </div>

    {/* Section 1 */}
    <div className="bg-green-200 dark:bg-green-700 text-gray-800 dark:text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img
            src={IskconLogo}
            alt="Section 1"
            className="rounded-full overflow-hidden w-80 h-80 mx-auto md:mx-0"
          />
        </div>
        <div className=" md:w-1/2">
          <p className="text-justify">
          The International Society for Krishna Consciousness (ISKCON), otherwise known as the Hare Krishna movement, includes five hundred major centers, temples and rural communities, nearly one hundred affilated vegetarian restaurants, thousands of namahattas or local meeting groups, a wide variety of community projects, and millions of congregational members worldwide. Although less than fifty years on the global stage, ISKCON has expanded widely since its founding by His Divine Grace A. C. Bhaktivedanta Swami Prabhupāda in New York City in 1966.
          <br />
          <br />
          </p>
          <p>ISKCON belongs to the Gaudiya-Vaishnava sampradāya, a monotheistic tradition within the Vedic or Hindu culture. Philosophically it is based on the Sanskrit texts Bhagavad–gītā and the Bhagavat Purana, or Srimad Bhagavatam. These are the historic texts of the devotional bhakti yoga tradition, which teaches that the ultimate goal for all living beings is to reawaken their love for God, or Lord Krishna, the “all-attractive one”.</p>
        </div>
      </div>
    </div>

    {/* Section 2 */}
    <div className="bg-yellow-200 dark:bg-yellow-700 text-gray-800 dark:text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row-reverse items-center">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img
            src={HarinamSankirtan}
            alt="Section 2"
            className="rounded-full overflow-hidden w-72 h-72 mx-auto md:mx-0"
          />
        </div>
        <div className="w-full md:w-1/2">
        <p className="text-justify">
  God is known across the world by many names including Allah, Jehovah, Yahweh, Rama, etc. ISKCON devotees chant God’s names in the form of the maha–mantra, or the great prayer for deliverance:
  <br /><br />
  <blockquote className="text-2xl italic">
    "Hare Krishna, Hare Krishna, <br />
    Krishna Krishna, Hare Hare,
    <br />
    Hare Rama Hare Rama, 
    <br />Rama Rama, Hare Hare"
  </blockquote>
</p>

        </div>
      </div>
    </div>

    {/* Section 3 */}
    <div className="bg-green-200 dark:bg-green-700 text-gray-800 dark:text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <div className="rounded-full overflow-hidden w-60 h-72 mx-auto md:mx-0">
            <img
              src={Prabhupada}
              alt="Section 3"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
  <blockquote className="text-justify border-l-4 border-gray-500 pl-2 md:text-lg lg:text-xl xl:text-2xl sm:text-xs">
    <p>
    The Holy name of Krishna has extraordinary spiritual potency.
    {/* <br /> */}
    Because the name of God is non-different from God himself.
    {/* <br /><br /> */}
    </p>
   
    <cite className="block text-right text-xs italic md:text-sm lg:text-base xl:text-lg">
      H.D.G A.C Bhaktivedanta Swami Prabhupada
    </cite>
  </blockquote>
</div>



      </div>
    </div>
  </div>
  );

}

export default AboutIskcon