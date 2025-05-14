import React from 'react'
import { Row } from 'react-bootstrap'

const ToolsFavorite = () => {
  return (
    <Row className='align-items-center gap-3 my-4 mx-1' style={{
      // direction:"rtl"
      }}>
      <select
        name='order'
        id='order'
        className='select-menu'
      >
        <option>الاحدث</option>
        <option>الاقدم</option>
        <option>عشوائي</option>
      </select>
      <button className='add-btn' >اضافة الى السلة</button>
      <button className='del-btn'>ازالة من المفضلة</button>
      <div className='w-auto d-flex align-items-center'>
        <label for='check' className='' style={{
            color:"#3c3c3c",
            fontSize:"16px",
            fontWeight:"400",
            lineHeight:"100%",
            letterSpacing:"0%",
            cursor:"pointer"
        }}>تحديد الكل</label>
        <input id='check'  width='25px' height='25px' type='checkbox' className='mx-1'/>
      </div>
    </Row>
  )
}

export default ToolsFavorite
