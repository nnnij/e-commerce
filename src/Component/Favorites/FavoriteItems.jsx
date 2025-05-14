import React from 'react'
import { Row } from 'react-bootstrap'
import FavoriteCard from './FavoriteCard'

const FavoriteItems = () => {
  return (
    <Row className='justify-content-center my-3' style={{
      // direction:"rtl"
      }}>
      <FavoriteCard/>
      <FavoriteCard/>
      <FavoriteCard/>
      <FavoriteCard/>
      <FavoriteCard/>
      <FavoriteCard/>
    </Row>
  )
}

export default FavoriteItems
