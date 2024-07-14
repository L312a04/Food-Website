import React from 'react'
import './exploreMenu.css'
import { menuList } from '../../Assets/assets'

const exploreMenu = ({category, setCategory})=> {
  return (
    <div className='explore-menu'>
        <h1>Explore Our <span>Menu</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita tenetur voluptatibus, nisi necessitatibus, rem, voluptates consequuntur ipsam cupiditate sapiente quas numquam minima facilis? Corporis, odit obcaecati sint nesciunt aut dolore?</p>
        <div className="explore-menu-list">
            {menuList.map((item,index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                        <i id={category===item.menu_name?"active":""} className={item.icon}/>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
      
    </div>
  )
}

export default exploreMenu
