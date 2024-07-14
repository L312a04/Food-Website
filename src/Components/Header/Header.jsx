import React from 'react'
import { assets } from '../../Assets/assets'
import './Header.css'

export default function Home() {
  return (
    <div className='Container'>
        <div className="text">
            <h2>Savor Signature Dishes Everytime, With Lightning-Fast Delivery to your Doorstep!</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa magni, molestiae dolore ad eaque vel impedit accusantium odio porro debitis, at veritatis vitae recusandae ipsa alias consequatur voluptate. Molestiae, aliquid.</p>
            <button className='btn'>Order-Now</button>

        </div>

        <img src={assets.Chef_edit}/>
        
        <div className="Home-right">
            
        <div className="sign-in">
            <p className="heading">Sign-Up</p>
            <input type='text' placeholder='UserName'/>
            <input type='password' placeholder='Password'/>
            <button className="btn_sign-up">Sign-Up</button>
            <div className="buttons">
                <button><i className="fa-brands fa-google"></i> Google</button>
                <button><i className="fa-brands fa-facebook"></i> Facebook</button>
            </div>

            <div className="log-in">
                <p>already have an account?</p>
             <input type='text' placeholder='UserName'/>
             <input type='password' placeholder='Password'/>
             <button>Log-in</button>

            </div>


        </div>


        </div>

    </div>
  )
}
