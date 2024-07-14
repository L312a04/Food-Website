import React from 'react'
import { assets } from '../../Assets/assets'
import './popular.css'

export default function popular() {
  return (
    <div class="popular" id="popular">
        <h3 class="heading">Most <span>Popular</span> Foods</h3>
        <div class="box-container">

            <div class="box">
                <p class="price">$5-$20</p>
                <img src={assets.image1}/>
                <h3 class="item">Tasty Burger</h3>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <a href="#" class="btn">Order Now</a>
            </div>

            <div class="box">
                <p class="price">$5-$20</p>
                <img src={assets.image2}/>
                <h3 class="item">Tasty Cake</h3>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <a href="#" class="btn">Order Now</a>
            </div>

            <div class="box">
                <p class="price">$5-$20</p>
                <img src={assets.image3}/>
                <h3 class="item">Tasty Sweets</h3>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <a href="#" class="btn">Order Now</a>
            </div>

            <div class="box">
                <p class="price">$5-$20</p>
                <img src={assets.image4}/>
                <h3 class="item">Tasty Cookies</h3>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <a href="#" class="btn">Order Now</a>
            </div>

            <div class="box">
                <p class="price">$5-$20</p>
                <img src={assets.image5}/>
                <h3 class="item">Tasty Drinks</h3>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <a href="#" class="btn">Order Now</a>
            </div>

            <div class="box">
                <p class="price">$5-$20</p>
                <img src={assets.image6}/>
                <h3 class="item">Tasty Ice-Creames</h3>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <a href="#" class="btn">Order Now</a>
            </div>

            <div class="box">
                <p class="price">$5-$20</p>
                <img src={assets.image7}/>
                <h3 class="item">Tasty Pizzas</h3>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <a href="#" class="btn">Order Now</a>
            </div>

            <div class="box">
                <p class="price">$5-$20</p>
                <img src={assets.image8}/>
                <h3 class="item">Tasty Curries</h3>
                <div class="rating">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-regular fa-star"></i>
                </div>
                <a href="#" class="btn">Order Now</a>
            </div>


        </div>
    </div>
  )
}
