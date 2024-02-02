import React from 'react'
import PrabhupadaWalking from "../assets/prabhupadawalking.png"
import PrabhupadaSitting from "../assets/prabhupadasitting.jpg"
import SPKirtan from "../assets/spkirtan.png"

const AboutISKCONFounder = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white">
    {/* Cover Photo and Title */}
    <div className="relative h-124 w-full mb-8">
      <img
        src={PrabhupadaWalking}
        alt="Cover"
        className="object-cover h-full w-full rounded-t-md"
      />
 



    </div>

    {/* Section 1 */}
    <div className="bg-green-200 dark:bg-green-700 text-gray-800 dark:text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img
            src={PrabhupadaSitting}
            alt="Section 1"
            className="rounded-full overflow-hidden w-80 h-90 mx-auto md:mx-0"
          />
        </div>
        <div className=" md:w-1/2">
          <p className="text-justify">
          Within the final twenty years of his life Srila Prabhupada translated over sixty volumes of classic Vedic scriptures (such as the Bhagavad Gita and the Srimad Bhagavatam) into the English language. For their authority, depth, and clarity, his books have won praise from professors at universities like Harvard and Oxford, and his Bhagavad-Gita As It Is was published by Macmillan Publishers in 1968 and the unabridged edition in 1972, and is now available in over sixty languages around the world. Other books by Srila Prabhupada are available in over eighty different languages. Over 500 million books of his have been distributed to date.
          <br />
          <br />

Srila Prabhupada established The Bhaktivedanta Book Trust (BBT) in 1972 to publish his works. The BBT has also published his multi-volume biography, Srila Prabhupada-Lilamrta, that, according to acclaimed scholar of religion Larry Shinn, will “certainly be one of the most complete records of the life and work of any modern religious figure”. Srila Prabhupada reminded his devotees before his passing that he would live forever in his books, and through them would remain present as a spiritual master or guru.
</p>
        </div>
      </div>
    </div>

    {/* Section 2 */}
    {/* <div className="bg-yellow-200 dark:bg-yellow-700 text-gray-800 dark:text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row-reverse items-center">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img
            // src={HarinamSankirtan}
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
    </div> */}

    {/* Section 3 */}
    <div className="bg-yellow-200 dark:bg-yellow-700 text-gray-800 dark:text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <div className="rounded-full overflow-hidden w-60 h-60 mx-auto md:mx-0">
            <img
              src={SPKirtan}
              alt="Section 3"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
  <blockquote className="text-justify border-l-4 border-gray-500 pl-2 md:text-lg lg:text-xl xl:text-2xl sm:text-xs">
    <p>
    We are like fish out of water. Just as a fish cannot be happy unless he is in the water, we cannot be happy apart  from the spiritual world.
    </p>
   
    <cite className="block text-right text-xs italic md:text-sm lg:text-base xl:text-lg">
      H.D.G A.C Bhaktivedanta Swami Prabhupada
    </cite>
  </blockquote>
</div>



      </div>
    </div>
  </div>
  )
}

export default AboutISKCONFounder