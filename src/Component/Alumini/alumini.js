import React from 'react'
import logo1 from './../../Picture/logo1.webp'
import logo2 from './../../Picture/logo2.webp'
import logo3 from './../../Picture/logo3.webp'
import logo4 from './../../Picture/logo4.webp'
import logo5 from './../../Picture/logo5.webp'
import logo6 from './../../Picture/logo6.webp'
import './alumini.css';

const Alumini=()=> {
  return (
    <>
    <div className='alu-back p-4'>
        <h2 className='text-center'>Our Alumni Work At</h2>
        <div className='cen'>
       <img src={logo1} alt="logo" className="m-2"/>
        <img src={logo2} alt="logo" className="m-2"/>
        <img src={logo3} alt="logo" className="m-2"/>
        <img src={logo4} alt="logo" className="m-2"/>
        <img src={logo5} alt="logo" className="m-2"/>
        <img src={logo6} alt="logo" className="m-2"/>
        </div>
    </div>
    </>
  )
}

export default Alumini;
