import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
  faGithub,
  faInstagram, faLinkedin, faTwitter
} from "@fortawesome/free-brands-svg-icons"


export const  Footer = () => {

  return (
    <div className='main-footer'>
      <div className='container'>
        <div className="first-div">
          <h3 className= 'about'>
          <Link to="/about">About</Link>
          </h3>
        </div>

        <div className='second-div'>
        <h3>Contact</h3>
        <h4>6006083201</h4>
        <h4>amitabhparothia438@gmil.com</h4>
        </div>

        <div>
          <h3 >social links</h3>
          <div className='sociallinks'>


          <a href='https://www.linkedin.com/in/amitabh-parothia-29554729a/'>
            <FontAwesomeIcon icon={faLinkedin} size='2x' />
          </a>

          
          <a href='https://www.instagram.com/_amitabhparothia/'>
          <FontAwesomeIcon icon={faInstagram} size='2x' />
          </a>
          

          
            <a href='https://twitter.com/parothia88921'>
              <FontAwesomeIcon icon={faTwitter} size='2x' />
            </a>
         

          
            <a href='https://github.com/amitabhparothia'>
              <FontAwesomeIcon icon={faGithub} size = '2x' />
            </a>
          

          </div>
        </div>
      
      </div>
    </div>
  )
}

