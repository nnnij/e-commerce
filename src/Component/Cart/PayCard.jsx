import React from "react";
import { Col, Row } from "react-bootstrap";

const PayCard = () => {
  const price_order = 899.74;
  const price_delevary = 40.80;
  return (
    <Col xs="12" className="card-pay w-100 d-flex flex-column align-items-center gap-3 my-2 p-2">
      <Row className="w-100 gap-3 border-bottom pb-3">
        <div className="title">ملخص الطلب</div>

        <div className="w-100 sup-title d-flex align-items-center justify-content-between">
          <div>قيمة الطلب</div>
          <div>
            <span>$</span>
            {price_order}
          </div>
        </div>

        <div className="w-100 sup-title d-flex align-items-center justify-content-between">
          <div>تكلفة الشحن</div>
          <div className="">
            <span>$</span>
            {price_delevary}
          </div>
        </div>
      </Row>
      <Row className="w-100 gap-3">
        <div className="title">المجموع</div>

        <div className="title d-flex justify-content-end">
          <span>$</span>
          {price_delevary + price_order}
        </div>

        <div className="w-100 d-flex align-items-center justify-content-between">
          <div style={{ width: "75%" }} className="m-0 p-0">
            <input
              className="input-form text-center w-100"
              type="text"
              placeholder="اسخدم الرمز"
            />
          </div>
          <button style={{ width: "25%" }} className="code-button m-0 p-0">
            تأكيد الرمز
          </button>
        </div>

        <button className="pay-button w-100 m-auto my-2">اتمام الشراء</button>

        <div className="d-flex justify-content-center align-items-center gap-1">
          <i class="fa-brands fa-cc-visa icon-way-pay"></i>
          <i class="fa-brands fa-cc-mastercard icon-way-pay"></i>
          <i class="fa-brands fa-cc-paypal icon-way-pay"></i>
          <i class="fa-brands fa-apple-pay icon-way-pay"></i>
        </div>
      </Row>
    </Col>
  );
};

export default PayCard;
