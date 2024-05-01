import React from 'react'
import { FaRegCheckCircle } from "react-icons/fa";
import benefits from './../../Picture/benefits.webp';
import './benefit.css';
const Benifit=()=> {
  return (
    <div id='benefits'>
       <div className="container my-5">
        <div className='row'>
      <div className="col-6">
        <img src={benefits} alt="benifits" className="m-2 benefit-img"/>
        </div>
        
        <div className='col-6 '>
        <div className='benefits-down'>
            <h3 className='benefit-heading'>Benefits</h3>
            <p className='benefit-para my-4'>With MSN degree, get a chance to work with global health organizations</p>
            
      <ul className='li-con'>
      <FaRegCheckCircle className='my-2 me-5 listt'/>Specially designed for working professionals<br/>
      <FaRegCheckCircle className='my-2 me-5 listt'/>Flexible learning program<br/>
      <FaRegCheckCircle className='my-2 me-5 listt'/>Strong alumni base<br/>
      <FaRegCheckCircle className='my-2 me-5 listt'/>Trusted from 60+ countries<br/>
      <FaRegCheckCircle className='my-2 me-5 listt'/>Flexible payment option available<br/>
      </ul>
      <button className='px-4 py-2 mt-4 bor text-white'>To Know more Details</button>
    </div>
      </div>
    </div> 
    </div> 
    </div>
  )
}

export default Benifit;
