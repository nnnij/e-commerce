import React from "react";
import { Col } from "react-bootstrap";
const CategoryCard = ({ img, title }) => {
  return (
    <Col
      className="d-flex justify-content-center align-items-center my-3"
      sm="12"
      md="6"
      lg="4"
    >
      <div className="cat-card">
        <img className="img-cat" src={img} alt="jjj" />
        <p className="title-cat ">{title}</p>
      </div>
    </Col>
  );
};

export default CategoryCard;
