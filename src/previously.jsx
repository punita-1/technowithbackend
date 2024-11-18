import React from 'react'
import CarouselComponent from './Carousel'
import './previously.css'
import { NavLink } from 'react-router-dom'
import { Button } from "../src/styles/Button";
function Previously() {
  return (
<div className='myclassforvh'>
    <div className="prev-container container grid grid-two-column">
      <div className='prev-container-desc'>

      </div>
      <div className="carousel-container">
        <CarouselComponent first="./images/301.jpeg" second="./images/301.jpeg" third="./images/301.jpeg" />
      </div>
    </div>
    </div>
  )
}

export default Previously