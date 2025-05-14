import React from "react";

const AlignRightIcon = () => {
  return (
    <div className="d-flex flex-column justify-content-between m-0 p-0" style={{ width: "15px", height: "11.67px", 
    // direction: "rtl" ,
     cursor:"pointer" }}>
      <div
        style={{
          height: "2px",
          width: "100%",
          backgroundColor: "#111827",
          borderRadius: "8px",
          lineHeight:"100%"
          
        }}
      ></div>
      <div
        style={{
          height: "2px",
          width: "100%",
          backgroundColor: "#111827",
          borderRadius: "8px",
          lineHeight:"100%"
          
        }}
      ></div>
      <div
        style={{
          height: "2px",
          width: "50%",
          backgroundColor: "#111827",
          borderRadius: "8px",
          lineHeight:"100%"
          
        }}
      ></div>
    </div>
  );
};

export default AlignRightIcon;
