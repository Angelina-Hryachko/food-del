import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favorite food here</h2>
            <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission to satisfy your craving and elevate your donong experience, one delisious meal at a time.</p>
            <Link to={'#explore-menu'}>View Menu</Link>
        </div>
    </div>
  )
}

export default Header