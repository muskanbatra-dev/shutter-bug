import React from 'react'
import  './Navigation.css'
import { HiShoppingCart } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import logo1 from "../../images/logo1.png";
import { FaSearch } from "react-icons/fa";
const Navigation = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img src={logo1} alt='logo' width={30} height={30}/>
        <p>ShutterBug</p>
      </div>

      <div className='header__search'>
        <input type='search'/>
        <FaSearch size={20} color='black' />

      </div>
      

      <div className='header__nav' >
        <button className='header_btn'>Login</button>
          <p><FaRegHeart size={20} color='white'/></p>
          <p><HiShoppingCart size={20} color='white'/></p>
          <p><FaUser size={20} color='white'/></p>
        
      </div>
    </header>
  )
}

export default Navigation