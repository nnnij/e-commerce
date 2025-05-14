import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";

const CardItem = ({ name_item, describtion, price, img }) => {
  const [num, setnum] = useState(0);
  const handelincrese = () => {
    setnum(num + 1);
  };
  const handeldicrese = () => {
    setnum(num - 1);
  };

  return (
    <Col xs="12" className="card-item-body  d-flex align-items-center my-2 p-2">
      <img className="img-cart" src={img} alt="lk" />
      <div className="w-100 h-100 pt-2 d-flex align-items-top mx-2">
        <div className="w-100 d-flex flex-column gap-1">
          <Row className="justify-content-between">
            <Col
              sm="12"
              className=" d-flex flex-row justify-content-between align-items-center"
            >
              <div className="img-title pb-2 mx-2">{name_item}</div>
              <div className="d-flex justify-content-between align-items-center num-item">
                <button
                  className="btn-cart m-0 p-0"
                  onClick={() => handeldicrese()}
                >
                  -
                </button>
                <div
                  className="num text-center"
                  style={
                    {
                      //  direction: "ltr"
                    }
                  }
                >
                  {num}
                </div>
                <button
                  className="btn-cart m-0 p-0"
                  onClick={() => handelincrese()}
                >
                  +
                </button>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center mt-2">
            <Col sm="12" className=" d-flex flex-row justify-content-between">
              <div className="describtion mx-2">{describtion}</div>
              <div
                style={
                  {
                    // direction: "ltr"
                  }
                }
                className="d-flex flex-row gap-3"
              >
                <i class="fa-solid fa-trash text-start delet-icon"></i>
                <div className="total-price mx-1">
                  <span>$</span>{price * num}
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm="12" className="mt-1">
              <div className="total-price my-2 mx-2">
                <span>$</span>
                {price}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
};

export default CardItem;
