import React from 'react'
import { Link } from 'react-router'
import HeroImage from '../assets/imags/HeroImage.png'
function Header() {
  return (
    <div className='container flex items-start justify-between w-full h-[587px] bg-no-repeat pt-6 bg-cover px-[95px]' style={{backgroundImage: `url(${HeroImage})`}}>
      <h1>Brand-name</h1>
      <ul className='flex items-center justify-between w-150'>
        <li><Link to='/' className=''>Home</Link></li>
        <li><Link to='/aboutus'>About Us</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/destination'>Destination</Link></li>
        <li><Link to='/tips'>Tips</Link></li>
      </ul>
         
    </div>
  )
}

export default Header