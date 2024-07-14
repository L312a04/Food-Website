import React from 'react'
import { assets } from '../../Assets/assets'
import './steps.css'

export default function Steps() {
  return (
    <div className='steps'>
        <div className="heading">
            How it <span>Works</span>
        </div>
        <div className="imgs">
            <img src={assets.food} alt="" />
            <img src={assets.delivery} alt="" />
            <img src={assets.payment} alt="" />
            <img src={assets.payment} alt="" />
        </div>
      
    </div>
  )
}
