import React from "react";
import { Col, Row } from "react-bootstrap";
import log from "../../Image/all.jpg";
const CardLogin = () => {
  return (
    <Row style={{
      // direction:"rtl"
      }}>
      <Col sm="12" md="6" lg="6">
        <div>
          <div>مرحبا بك في متجرنا</div>
        </div>
        <div>
            <label>الرقم او البريد الاكتروني</label>
            <input type="text" placeholder="emal@..." />
        </div>
        <div>
            <label>كلمة المرور</label>
            <input type="password" placeholder="password"/>
        </div>
        
        <button></button>
      </Col>
      <Col sm="12" md="6" lg="6">
        <img width="90%" height="450px" src={log} alt="jjh" />
      </Col>
    </Row>
  );
};

export default CardLogin;
