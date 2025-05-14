import React from "react";
import {Container, Row, Col } from "react-bootstrap";
import AlignRightIcon from "../Utilitis/AlignRightIcon";

const Catigories = () => {
  const name1 = "جميع الفئات";
  const name2 = "الالكترونيات";
  const name3 = "المنزب";
  const name4 = "مكياج";
  const name5 = "الازياء";
  const name6 = "رياضة";
  const name7 = "الاطفال";

  return (
      <Row className="category-row px-3 mb-4">
        <Col sm='12' md='2' lg='2' className="m-0 d-flex align-items-center gap-2 h-100">
          <AlignRightIcon />
          <div className="All-category">{name1}</div>
        </Col>
        <Col sm='12' md='10' lg='10' className="m-0 h-100 d-flex align-items-center gap-5 overflow-x-auto">
          <div className="sup-category">{name2}</div>
          <div className="sup-category">{name3}</div>
          <div className="sup-category">{name4}</div>
          <div className="sup-category">{name5}</div>
          <div className="sup-category">{name6}</div>
          <div className="sup-category">{name7}</div>
        </Col>
      </Row>
  );
};

export default Catigories;
