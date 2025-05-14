import React from "react";

const SupTitle = ({ title, btntitle }) => {
  return (
    <div style={{
      // direction:"rtl"
      }} className="d-flex justify-content-between mx-2 pt-4">
      <div className="sub-title">{title}</div>
      {btntitle ? (
          <div className="shopping-now ">{btntitle}</div>
      ) : null}
    </div>
  );
};

export default SupTitle;