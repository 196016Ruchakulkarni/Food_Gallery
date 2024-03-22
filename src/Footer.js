import React from 'react'
// import { useState } from 'react';
import google from './Images/google.jpeg';
import facebook from './Images/facebbok.jpeg';
import instagram from './Images/instagram.jpeg';
import twitter from './Images/twitter.jpeg';

const Footer = () =>{


    return(
      // https://www.culinaryschools.org/international/indian-cuisine.php
        <>
          <div className="footer-con">
             <div className="more-info">

             <div className="logos">

              <a href="https://www.culinaryschools.org/international/indian-cuisine.php" target="_blank" rel="noreferrer">
                  <img className='google-logo'
                  src={google}
                  alt="google-logo"
              />
              </a>

              <a href="https://www.facebook.com/" target='_blank' rel="noreferrer">
                <img className='facebook-logo' src={facebook} alt="facebook-logo" />
              </a>

              <a href="https://www.instagram.com/accounts/login/?hl=en" target='_blank' rel="noreferrer">
                <img className='instagram-logo' src={instagram} alt="instagram-logo" />
              </a>

              <a href="https://twitter.com/i/flow/login" target='_blank' rel="noreferrer">
                <img className='twitter-logo' src={twitter} alt="instagram-logo" />
              </a>

             </div>

             <p className='footer-text'>@2024 All Rights Reserverd..!</p>
             <div className='footer-text1'>Developed by RK</div> 

             </div>
    </div>

        </>
    );
}

export default Footer;