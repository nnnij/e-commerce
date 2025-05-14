import React from 'react'
import Catigories from '../Component/Home/Catigories'
import Slider from '../Component/Home/Slider'
import ShoppingCategory from '../Component/Home/ShoppingCategory'
import PriveteProduct from '../Component/Home/PriveteProduct'
import NewProductContainer from '../Component/Home/NewProductContainer'
import DistinctProduct from '../Component/Home/DistinctProduct'

const HomePage = () => {
  return (
    <div>
      <Catigories/>
      <Slider/>
      <ShoppingCategory/>
      <PriveteProduct/>
      <NewProductContainer/>
      <DistinctProduct/>
    </div>
  )
}

export default HomePage
