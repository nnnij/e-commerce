import React from "react";
import { Card, Col } from "react-bootstrap";

import img from "../../Image/five.jpg";

const FavoriteCard = () => {
  const title = "سماعات رأس لاسلكية";
  const price = 133;
  const stor_name = "اسم المتجر";

  return (
    <Col lg="4" md="6" sm="12" className="my-2">
      <Card className="card-fav d-flex flex-column align-items-center m-auto">
        <div
          className="mb-3 p-1"
          style={{
            position: "relative",
          }}
        >
          <img className="img-fav" src={img} alt="jef" />
          <div className="like-container-fav">
            <i
              style={{ width: "25px", height: "17px" }}
              class="fa-solid fa-heart"
            ></i>
          </div>
          <input
            type="checkbox"
            style={{
              position: "absolute",
              top: "15px",
              left: "15px",
              width: "16px",
              height: "16px",
            }}
          />
        </div>
        <div className="w-100 h-100 d-flex flex-column gap-2">
          <div className="describtion">{stor_name}</div>
          <div className="title-fav">{title}</div>
          <div className="d-flex justify-content-between align-content-center mt-4">
            <button className="btn-add-fav px-3">
              اضف الى السلة <i class="fa-solid fa-cart-shopping me-2"></i>
            </button>
            <div className="total-price d-flex align-items-center">
              <span>$</span>{price}
            </div>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default FavoriteCard;
