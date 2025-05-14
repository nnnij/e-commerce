import React from "react";
import Carousel from "react-bootstrap/Carousel";
import all from "../../Image/all.jpg";
const Slider = () => {
  return (
    <Carousel controls={false} indicators={false}  className="slider" data-bs-theme="dark">
      <Carousel.Item>
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ backgroundColor: "red", borderRadius: "16px" }}
        >
          <img className="img-slid" src={all} alt="mmm" />
          <div className="caption-card d-flex justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-between align-items-center gap-2 slide-content">
              <div className="title-slider">كل ما تحتاجه في مكان واحد! تسوق من مجموعاتنا الجديدة</div>
              <div className="text-slider">اكتشف مجموعة واسعة من المنتجات المميزة التي تلبي جميع احتياجاتكو بأفضل الاسعارز</div>
              <button className="btn-slider">تسوق الأن</button>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
