import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore suscipit quo corrupti sapiente doloribus dolorum id assumenda nobis! Nostrum, consequuntur! Neque, sit dolorum! Molestiae sint voluptatum rem ullam impedit laudantium repellendus itaque. Animi corporis numquam nobis eveniet ea, quas molestiae asperiores accusamus tempore ut consequatur necessitatibus distinctio sunt enim temporibus.</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="facebook_icon" />
            <img src={assets.twitter_icon} alt="twitter_icon" />
            <img src={assets.linkedin_icon} alt="linkedin_icon" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Private policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@food-del.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 &copy; Food-Del.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer