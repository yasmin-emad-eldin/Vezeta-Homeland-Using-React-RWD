import React from "react";
import { useTranslation } from "react-i18next";
import  { useEffect} from 'react'
import cookies from 'js-cookie'

const languages = [
  {
    code: 'en',
    name: 'English',
  },
  {
    code: 'ar',
    name: 'العربية',
    dir: 'rtl',
  },

]


function LanguageSwitcher() {

  const { i18n } = useTranslation();
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)

  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr'
  }, [currentLanguage])

  return (
    <>
<div>


      <select
      id="languageSwitcher"
      style={{backgroundColor:"transparent", color:"white" ,border:"none"}}
        value={i18n.language}
        onChange={(e) =>
          i18n.changeLanguage(e.target.value)
        }
      >
        <option       style={{ color:"black"}} value="en">English</option>
        <option      style={{ color:"black"}}    value="ar">عربي</option>
      </select>

    </div>


    </>
    
  );
}

export default LanguageSwitcher;