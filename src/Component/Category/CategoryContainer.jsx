import React from 'react'
import { Row } from 'react-bootstrap'
import CategoryCard from './CategoryCard'
import img1 from "../../Image/one.jpg";
import img2 from "../../Image/house.jpg";
import img3 from "../../Image/cloath.jpg";
import img4 from "../../Image/children.jpg";
import img5 from "../../Image/run.jpg";
import img6 from "../../Image/mkyag.jpg";
const CategoryContainer = () => {
    const title1 = 'الكترونيات'
    const title2 = 'منزل'
    const title3 = 'الأزياء'
    const title4= 'الأطفال'
    const title5= 'رياضة'
    const title6= 'مكياج'
  return (
    <Row style={{
      // direction:"rtl"
      }} className='my-4 justify-content-between align-items-center'>
        <CategoryCard img={img1} title={title1}/>
        <CategoryCard img={img2} title={title2}/>
        <CategoryCard img={img3} title={title3}/>
        <CategoryCard img={img4} title={title4}/>
        <CategoryCard img={img5} title={title5}/>
        <CategoryCard img={img6} title={title6}/>
    </Row>
  )
}

export default CategoryContainer
