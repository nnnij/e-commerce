import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Footer = () => {
    const emal = 'example@gmail.com'
    const phone = '+963-967-612-175'
  return (
    <Row className='footer m-auto h-100'>
      <Col sm='12' md='3' lg='3'>
        <div className=''>
            <div className='footer-title'>عن المتجر</div>
            <div className='text-footer my-3'>نحن نقدم أفضل المنجات بافضل الاسعار مع خدمة عملاء مميزة</div>
        </div>
      </Col>
      <Col sm='12' md='3' lg='3'>
        <div className='p-2'>
            <div className='footer-title'>روابط سريعة</div>
            <div className='text-footer'>
                <p className='my-3'>من نحن</p>
                <p className='my-3'>اتصل بنا</p>
                <p className='my-3'>الأسئلة الشائعة</p>
            </div>
        </div>
      </Col>
      <Col sm='12' md='3' lg='3'>
        <div className='p-2'>
            <div className='footer-title'>كن شريك معنا</div>
            <div className='text-footer'>
                <p className='my-3'>اعلن عن منتجاتك</p>
                <p className='my-3'>ارشادات البائع</p>
                <p className='my-3'>معلومات الشحن</p>
                <p className='my-3'>نسب العمولة</p>
            </div>
        </div>
      </Col>
      <Col sm='12' md='3' lg='3'>
        <div className='p-2'>
            <div className='footer-title'>تواصل معنا</div>
            <div className='text-footer'>
                <p className='my-3'>البريد الالكتروني : {emal}</p>
                <p className='my-3'>الهاتف : {phone}</p>
            </div>
        </div>
      </Col>
    </Row>
  )
}

export default Footer
