import React from 'react'
import NewProductCard from './NewProductCard'
import img1 from '../../Image/tow.png'
const NewProductRow = () => {
  const price = 133
  const priceBefor = 155
  const title = 'سماعات رأس لاسلكية'
  const description = 'ينتهي في 2 يوم'
  return (
    <div style={{
      // direction:"rtl"
      }} className='d-flex justify-content-between my-4 py-1 mx-0 w-100 overflow-x-auto overflow-y-hidden'>
      <NewProductCard img={img1} price={price} title={title} priceBefor={priceBefor} description={description} />
      <NewProductCard img={img1} price={price} title={title} priceBefor={priceBefor} description={description} />
      <NewProductCard img={img1} price={price} title={title} priceBefor={priceBefor} description={description} />
      <NewProductCard img={img1} price={price} title={title} priceBefor={priceBefor} description={description} />
      <NewProductCard img={img1} price={price} title={title} priceBefor={priceBefor} description={description} />
    </div>
  )
}

export default NewProductRow
