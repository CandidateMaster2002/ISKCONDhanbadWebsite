import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { t,i18n } = useTranslation();

  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
  }
  return (
    <select className="custom-select" style={{width: 200}} onChange={changeLanguageHandler}>
    <option value="en" >English</option>
    <option value="hi" >Hindi</option>
  </select>
  );
}

export default LanguageSwitcher;
