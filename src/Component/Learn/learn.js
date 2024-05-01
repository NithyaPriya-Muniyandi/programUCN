import React from 'react';
import './learn.css';
import { CiCircleList } from "react-icons/ci";
import { PiGraphLight, PiHandshake, PiHeartbeat } from "react-icons/pi";
const Learn=()=> {
  return (
    <container>
        <div className='learn-con pt-5'>
        <h2 className='text-center text-white'>Learning</h2>
    <div className='cen'>
    <div className="row">
    <div className="col-3 line-bor px-4">
    <CiCircleList className='ico text-white pb-3'/>
      <p className='text-white'>Apply modern scientific methods and techniques to appraise disease prevalence in the community</p>
    </div>
    <div className="col-3 line-bor px-4">
    <PiHeartbeat className='ico text-white pb-3'/>
      <p className='text-white'>Apply Nursing principles derived from Nursing courses</p>
    </div>
    <div className="col-3 line-bor px-4">
    <PiHandshake className='ico text-white pb-3'/>
      <p className='text-white'>Participate in community development activities</p>
    </div>
    <div className="col-3 px-4">
    <PiGraphLight className='ico text-white pb-3'/>
      <p className='text-white'>Cater to Community health needs</p>
    </div>
    </div>
  </div>
  </div>

  </container>
  )
}

export default Learn;


