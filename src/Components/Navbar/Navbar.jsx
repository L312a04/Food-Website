import React, { useState } from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
    const [Page, setPage] = useState("Home");
    const [toggle, setToggle] = useState(false);
  return (
    <div className="Navbar">
        <div className="logo">
            <i className="fa-solid fa-utensils"></i>
            <div className="title">Food</div>
        </div>
        
        <ul className="navbar-menu" id={toggle?"active":"nav-menu"}>
            <li onClick={()=>setPage("Home")} className={Page==="Home"?"active":""}><Link to='/'  >Home</Link></li>
            <li onClick={()=>setPage("Menu")} className={Page==="Menu"?"active":""}><Link to='/menu'  >Menu</Link></li>
            <li onClick={()=>setPage("Reviews")} className={Page==="Reviews"?"active":""}><Link to='/reviews'>Reviews</Link></li>
            <li onClick={()=>setPage("Contact")} className={Page==="Contact"?"active":""}><Link to='/footer'  >Contact Us</Link></li>
        </ul>
        <div className="nav-right">
            <div onClick={() => setToggle(!toggle)} id="sections" className="fa-solid fa-bars"></div>
            <Link to='/cart'><i className="fa-solid fa-cart-shopping"></i></Link>
            <div className="dot"></div>
            <i className="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-user"></i>
            
        </div>
      
    </div>
  )
}
