import React from 'react'
import ProductCard from './ProductCard'

import img1 from "../../Image/five.jpg";
import img2 from "../../Image/four.png";
import img3 from "../../Image/six.png";
import img4 from "../../Image/three.png";
import img5 from "../../Image/tow.png";

const ProductRow = () => {

  const title = 'سماعات رأس لاسلكية'
  const price = 133
  return (
    <div style={{
      // direction:"rtl"
      }} className='d-flex justify-content-between my-4 py-1 mx-0 w-100 overflow-x-auto overflow-y-hidden'>
      <ProductCard img={img1} title={title} price={price}/>
      <ProductCard img={img2} title={title} price={price}/>
      <ProductCard img={img3} title={title} price={price}/>
      <ProductCard img={img4} title={title} price={price}/>
      <ProductCard img={img5} title={title} price={price}/>
      <ProductCard img={img1} title={title} price={price}/>
    </div>
  )
}

export default ProductRow
