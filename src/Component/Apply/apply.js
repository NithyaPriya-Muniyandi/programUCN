import React from 'react'
import Select from 'react-select';
import { PiGraduationCap, PiBookOpenTextLight } from "react-icons/pi";
import 'bootstrap/dist/css/bootstrap.min.css';
import './apply.css';

const countryOptions = [
    { value: 'Afganistan', label: 'Afganistan' },
    { value: 'Albania', label: 'Albania' },
    { value: 'Algaria', label: 'Algaria' },
    { value: 'American Samoa', label: 'American Samoa' },
    { value: 'Andorra', label: 'Andorra' },
    { value: 'Angola', label: 'Angola' },
    // Add more countries as needed
  ];

  const currentQualification = [
    { value: 'RegNur', label: 'Registered Nurse' },
    { value: 'BOSN', label: 'Bachelor of Science in Nursing' },
    // Add more countries as needed
  ];
  
const Apply = () => {
  return (
    <div>
       <section id='apply'>
    <div className="container py-5 my-5">
      <div className="row">
        <div className="col-md-3 mt-5">
          <div className="card bor">
            <div className="card-body text-white">
            <div className="aboutBar">
                <div className="aboutBarText">
                    <div className='graduate'>
                    <h3><PiGraduationCap className='icon pe-4'/>Duration:</h3>
                    <p className='year-para'>2 Years</p>
                    </div>
                    <hr/>
                    <div className='eligibility'>
                    <h3><PiBookOpenTextLight className='icon pe-4'/>Eligibility</h3>
                    <p className='para'>Bachelors Degree in Nursing from a recognized university, Registered Nurse under respective country’s nursing council/LPN</p>
                    </div>
                    
                </div>
                </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-4">
          <div className="card border-0">
            <div className="card-body">
              <h3 className="card-title tit-bold">Masters of Science of Nursing is a widely recognized professional credential</h3>
              <hr/>
              <p className="card-text para">The program equips students to take up leadership and managerial positions in governmental, non-profit, and private organizations in the Nursing industry. UCN’s Masters of Science of Nursing Program ideally helps you develop the administrative, ethical, and professional skills needed to apply health education and communication programs in line with Nursing principles.</p>
            </div>
          </div>
        </div>
        <div className="col-md-5 mb-4">
          <div className="card bor application">
            <div className="card-body">
              <h2 className="card-title font-weight-bold">Get More Info</h2>
              <form>
      <div className="form-row">
          <label htmlFor="name"></label>
          <input type="text" id="name" name="name" className="form-control" placeholder='Name *' required/>
          <label htmlFor="email"></label>
          <input type="email" id="email" name="email" className="form-control" placeholder='Email *' required/>
          <label htmlFor="email"></label>
          <input type="number" id="phone" name="phone" className="form-control" placeholder='Phone Number *' required/>
          <Select options={countryOptions} placeholder="Select a country" className='mt-4'/>
          <Select options={currentQualification} placeholder="Current Qualification" className='mt-4'/>
          <div className="form-group form-check mt-4">
        <input type="checkbox" id="agreement" name="agreement" className="form-check-input"/>
        <label className="form-check-label che" htmlFor="agreement">I agree with Texila’s <span className='text-warning'>Terms of Service</span> and <span className='text-warning'>Privacy Policy</span></label>
      </div>
      </div>
      <button type="submit" className="btn mt-3 px-3 text-white">Submit</button>
    </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
    </div>
  )
}

export default Apply
