import React, {useState} from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../Components/ExploreMenu/exploreMenu'
import Steps from '../../Components/Steps/steps'
import Footer from '../../Components/Footer/Footer'
import FoodDisplay from '../../Components/FoodDisplay/FoodDisplay'
import Reviews from '../../Components/Reviews/review'

export default function Home() {
    
    const [category, setCategory] = useState("All");

  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory}/>
        <FoodDisplay category={category}/>
        <Steps/>
        <Reviews/>
        <Footer/>
    </div>
  )
}

