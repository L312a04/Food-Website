import './App.css';
import { useState } from 'react';
import Home from './pages/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import Cart from './pages/cart/cart';
import Reviews from './Components/Reviews/review'
import FoodDisplay from './Components/FoodDisplay/FoodDisplay'
import Footer from './Components/Footer/Footer';

function App() {

  const [category, setCategory] = useState("All");
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/reviews' element={<Reviews/>}/>
      <Route path='/menu' element={<FoodDisplay category={category}/>}/>
      <Route path='/footer' element={<Footer/>}/>
    </Routes>
    </>
  );
}

export default App;
