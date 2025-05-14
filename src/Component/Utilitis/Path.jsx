import React from "react";
import { useLocation } from "react-router-dom";

const breadcrumbNames = {
  "": "الرئيسية",
  "/cart": "سلة المشتريات",
  "/favorites": "المفضلة",
};

const Path = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <div
      // style={{ direction: "rtl" }}
      className="d-flex align-items-center gap-2 my-4 mx-2"
    >
      <a href="/" style={{textDecoration:"none" , cursor:"pointer"}} className="d-flex align-items-center gap-2">
        <i class="fa-solid fa-house house-icon"></i>
        <div className="link-path">الرئيسية</div>
      </a>

      <div className="corent-path">
        {path !== "/" && ` / ${breadcrumbNames[path] || path}`}
      </div>
    </div>
  );
};

export default Path;
