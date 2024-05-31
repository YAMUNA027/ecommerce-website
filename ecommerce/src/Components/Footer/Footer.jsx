import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOP HUB</p>
      </div>
      <ul className="footer-links">
        <li><Link style={{textDecoration: 'none'}} to="/">Products</Link></li>
        <li><Link style={{textDecoration: 'none'}} to="/about">About</Link></li>
        <li><Link style={{textDecoration: 'none'}} to="/contact">Contact</Link></li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram_icon} alt=""/>
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div>
      </div>
    </div>
  )
}


export default Footer
