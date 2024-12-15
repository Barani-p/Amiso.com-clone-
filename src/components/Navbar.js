import React from 'react';
import './Navbar.css';
import image from "../assests/logo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF,faTwitter,faInstagram,faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope,faPhone} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
      <div class="nav_1">
      <span class='phone'><FontAwesomeIcon icon={ faPhone} /></span>
        <h6>+123+456 7890</h6>
        <span class='emai'><FontAwesomeIcon icon={ faEnvelope} /></span>
        <h6 class='mai'>@info@amiso.com</h6>
      </div>
      <div class='ioc'>
      <span class='ema'><FontAwesomeIcon icon={ faFacebookF} /></span>
      <span class='ema'><FontAwesomeIcon icon={ faTwitter} /></span>
      <span class='ema'><FontAwesomeIcon icon={ faInstagram} /></span>
      <span class='ema'><FontAwesomeIcon icon={ faLinkedinIn} /></span>
      </div>
      <button className="quote-button">Get a Quote</button>
   
    <div class="nav_con">
    <ul class="nav_ul">
      <img src={image}/>
      <h1 class='text'>amiso</h1>
      <li><a href="#">HOME</a></li>
      <li><a href="#">ABOUT</a></li>
      <li><a href="#">PAGES</a></li>
      <li><a href="#">GALLERY</a></li>
      <li><a href="#">BLOG</a></li>
      <li><a href='#'>CONTACT</a></li>
    </ul>
    </div>
      <div class="hero">
      <div class="hero-content">
        <h6>RENEW YOUR LOOK</h6>
        <h1><strong>A TRADITION OF</strong><br/>
       <strong> QUALITY CLEANING </strong></h1> 
        <button>Contact Us</button>
      </div>
      </div>
       <div>
       </div>
      </nav>
    </>
  );
};

export default Navbar;
