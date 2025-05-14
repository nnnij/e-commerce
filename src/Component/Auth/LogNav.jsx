import React from "react";
import { Link } from "react-router-dom";


const LogNav = () => {
  const storName = "اسم المتجر";
  const text = "ليس لديك حساب ؟";
  const link = "أنشئ الأن!";



  
  return (
    <div
      style={{ height: "112px" }}
      className="d-flex justify-content-between align-items-center mx-2"
    >
      <Link to="/" className="link">
        <button className="btn-name">{storName}</button>
      </Link>

      <div className="d-flex align-items-center text-log">
        <div style={{ color: "#000" }} className="mx-2">
          {text}
        </div>
        <Link to="/logon" className="link">
          <div style={{ color: "var(--main-color-1)" }}>{link}</div>
        </Link>
      </div>
    </div>
  );
};

export default LogNav;
