import React from 'react'
import './navigation.css'
import logo from '../../Picture/LOGO.png';
import {Link} from 'react-scroll';
const Navigation = () => {
  return (
    <div>
      <nav className="navbar bg-secondary text-center">
                <img src={logo} alt="logo" className="logo"/>
                <div className="desktopMenu">
                    <Link activeClass="active text-info" to="about" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem ">About</Link>
                    <Link activeClass="active text-info" to="apply" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem ">Apply Now</Link>
                    <Link activeClass="active text-info" to="advantage" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem ">Advantages</Link>
                    <Link activeClass="active text-info" to="benefits" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem ">Benefits</Link>
                    <Link activeClass="active text-info" to="faq" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">FAQs</Link>
                   
                    </div>  
            </nav> 
    </div>
  )
}

export default Navigation
