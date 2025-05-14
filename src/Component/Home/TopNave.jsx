import React from "react";
import { useTranslation } from "react-i18next";
import { useData } from "../Hooks/useData";

const TopNave = () => {
  const { i18n } = useTranslation();

  const handleLangChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    // اختياري: لو بدك تتأكد انه نخزن
    // localStorage.setItem('i18nextLng', lang);
  };

  const {topnav} = useData()

  return (
    <div
      style={{ direction:"ltr"}}
      className="d-flex justify-content-between align-items-center TopNave"
    >
      <div
        className="d-flex align-items-center gap-1 conection-font"
        style={{ cursor: "pointer" }}
      >
        <i className="fa-solid fa-phone"></i>
        <div>{topnav.call}</div>
      </div>

      <div
        className="d-flex align-items-center gap-1 language-font"
        style={{ cursor: "pointer" }}
      >
        <i className="fa-solid fa-globe"></i>
        <select
          name="language"
          id="language"
          className="language"
          value={i18n.language}
          onChange={handleLangChange}
        >
          <option value="ar">العربية</option>
          <option value="en">English</option>
          <option value="tr">Türkçe</option>
        </select>
      </div>
    </div>
  );
};

export default TopNave;