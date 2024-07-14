import React from 'react'
import './Footer.css'
import { assets } from '../../Assets/assets'

export default function Footer() {
  return (
    <div className='bottom'>
            <div className="promo">
        <h2 className="promotion">For better experience download our app</h2>
        <div className="apps">
            <div className="playstore">
                <img src={assets.playstore} alt=""/>
                <p>Get it on playstore</p>
            </div>
            <div className="appstore">
                <i className="fa-brands fa-apple"></i>
                <p>Download it from app store</p>
            </div>
        </div>
        
    </div>


    <div className="footer">

        <div className="footer-container">
            <div className="company">
                <div className="logo">
                    <i className="fa-solid fa-utensils"></i>
                    <p>Food</p>
                </div>
                <p><i id="copyright" className="fa-regular fa-copyright"></i>2024 All rights reserved</p>
            </div>
            
            <div className="social-media">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-whatsapp"></i>
                <i className="fa-brands fa-x-twitter"></i>
    
            </div>
        </div>

        <p><span>~</span>Lavanya Meesala</p>

    </div>
      
    </div>
  )
}
