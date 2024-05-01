import React from 'react'
import './about.css'
import doctor from './../../Picture/Doc-Img.webp';
const About = () => {
  return (
      <container id="about">
            <div className="bgBlueImg">
              <div className='row'>
                <div className='col-8'>
            <div className="introContent ms-5">
                <p className="introPara">Take Your Qualification to the Next Level</p>
                <span className=  "introText">With UCN’s <span className="text-warning">Master of<br/> Science </span>in Nursing</span>   
                <div className='butt'>
                <button className='px-4 py-2 bor text-white'>Get More Info</button>
                </div>
            </div>
            </div>
            <div className='col-8'>
                <img src={doctor} alt="profile" className="doc-img"/> 
            
            </div>
            </div>
            </div>
           </container>

  )
}

export default About
