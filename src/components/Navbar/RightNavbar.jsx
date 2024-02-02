import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import DarkMode from './DarkMode';
import i18n from '../../i18n';

// const { i18n } = useTranslation();


const handleLanguageChange = (selectedLanguage,setLanguage) => {
  localStorage.setItem('language', selectedLanguage);
  setLanguage(selectedLanguage)
  i18n.changeLanguage(selectedLanguage);
};

const RightNavbar = () => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'hi');

  useEffect(() => {
    if (localStorage.getItem('language') === null) {
      localStorage.setItem('language', 'hi');
    }

    setLanguage(localStorage.getItem('language'));
  }, [localStorage.getItem('language')]);


  return (
    <div className="bg-red-500 dark:bg-gray-900 dark:text-white fixed top-0  shadow-md duration-200 relative z-40">
    <div className="py-1">
      <div className="container flex justify-between items-center">
        <div className="flex justify-between items-center gap-1 ml-auto"> {/* Use ml-auto here */}
          <div>
            <button
              onClick={() => handleLanguageChange('en',setLanguage)}
              className={`${
                language === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              } px-1 py-2 rounded mr-2`}
            >
              ENG
            </button>
            <button
              onClick={() => handleLanguageChange('hi',setLanguage)}
              className={`${
                language === 'hi' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              } px-1 py-2 rounded`}
            >
              हिंदी
            </button>
          </div>

          {/* Dark Mode section */}
          <div className="px-0">
            <DarkMode />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default RightNavbar;
