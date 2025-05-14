import React from "react";
import { Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
const ProductCard = ({ img, title, price }) => {
  const setting = {
    size: 16,
    count: 5,
    color: "#979797",
    activeColor: "#ffc107",
    value: 4,
    edit: true,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      console.log(`Example 2: new value is ${newValue}`);
    },
  };

  return (
    <div
      className="mx-2 d-flex justify-content-start align-items-center p-0 m-0"
      style={{ width: "340px" }}
    >
      <Card className="card p-2 d-flex flex-column gap-2 align-items-center mx-2">
        <div
          className="mb-3 p-1"
          style={{
            position: "relative",
            width: "308px",
            height: "340px",
          }}
        >
          <img className="img-card" src={img} alt="jef" />
          <div className="img-title"> {title} </div>
          <div className="like-container">
            <i class="fa-regular fa-heart lik-icon"></i>
          </div>
        </div>
        <div className="w-100 h-100 d-flex flex-column justify-content-between ">
          <div className="d-flex justify-content-between align-items-center">
            <ReactStars {...setting} />
            <div className="price">
              <span>$</span>{price}
            </div>
          </div>
          <button className="btn-card">أضف الى السلة</button>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
