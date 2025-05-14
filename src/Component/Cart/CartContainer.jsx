import { Col, Row } from 'react-bootstrap'
import CardItem from './CardItem'
import PayCard from './PayCard'

import img1 from "../../Image/four.png";
import img2 from "../../Image/five.jpg";
import img3 from "../../Image/six.png";
import img4 from "../../Image/one.jpg";


const CartContainer = () => {
  const name_item = 'سماعات رأس لاسلكية';
  const describtion = 'سوداء / عزل صوت';
  const price = '100';
  return (
    <Row style={{
      // direction:"rtl"
      }} className='my-2 py-2'>
      <Col sm='12' md='8' lg='8'>
        <CardItem name_item={name_item} describtion={describtion} price={price} img={img1}/>
        <CardItem name_item={name_item} describtion={describtion} price={price} img={img2}/>
        <CardItem name_item={name_item} describtion={describtion} price={price} img={img3}/>
        <CardItem name_item={name_item} describtion={describtion} price={price} img={img4}/>
      </Col>
      <Col sm='12' md='4' lg='4'>
        <PayCard/>
      </Col>
    </Row>
  )
}

export default CartContainer
