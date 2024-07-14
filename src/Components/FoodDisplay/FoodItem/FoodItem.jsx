import React, { useContext } from 'react'
import './FoodItem.css'
import { StoreContext } from '../../../Context/Storecontext';

export default function FoodItem({id,name,price,image}) {
  const {cartItems, addToCart, removeFromCart}=useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt=""/>
            {!cartItems[id]?
            <i onClick={()=>addToCart(id)} className="fa-solid fa-plus" id="initial-plus"></i>:
            <div className='add-remove'>
              <i onClick={()=>removeFromCart(id)} className="fa-solid fa-minus" id="minus"></i>
              <p>{cartItems[id]}</p>
              <i onClick={()=>addToCart(id)} className="fa-solid fa-plus" id="final-plus"></i>
            </div>
            }
        </div>
        <div className="food-item-name-rating">
            <p>{name}</p>
            <div className="rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>

            </div>
            
        </div>
        <p className='food-item-price'>${price}</p>
      
    </div>
  )
}
