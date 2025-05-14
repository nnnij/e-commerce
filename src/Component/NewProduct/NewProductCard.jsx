import React from "react";
import { Card } from "react-bootstrap";
const NewProductCard = ({price , priceBefor , img , title , description}) => {
  return (
    <div className="new-card mx-2 d-flex justify-content-start align-items-center">
      <Card className="card p-2 d-flex flex-column gap-2 align-items-center mx-2">
        <div className="new-card-container mb-3 p-1">
          <img className="img-card" src={img} alt="jef" />
          <div className="img-title">{title}</div>
          <div className="like-container">
            <i class="fa-regular fa-heart lik-icon"></i>
          </div>
        </div>
        <div className="w-100 h-100 d-flex flex-column justify-content-between ">
          <div className="d-flex justify-content-between align-items-top">
            <div className="sup-category" style={{fontSize:"16px"}}>{description}</div>
            <div>
              <div className="price">
                <span>$</span>
                {price}
              </div>
              <div className="sale">
                <span>$</span>
                {priceBefor}
              </div>
            </div>
          </div>
          <button className="btn-card my-2">أضف الى السلة</button>
        </div>
      </Card>
    </div>
  );
};

export default NewProductCard;
