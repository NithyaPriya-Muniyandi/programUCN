import React from 'react';
import { PiSiren, PiStudentLight, PiStackLight, PiRocketLaunch, PiUser, PiUsersThreeLight} from 'react-icons/pi';
import './advantage.css'
const Advantage = ()=> {
  return (
    <section id='advantage'>
      <div className='container back p-5'>
        <h1 className='text-center p-3'>Advantages of Studying MPH</h1>
        <div className="row my-5">
        <div className="col">
            <div className="card bor">
            <div className="card-body text-white">
           
                        <PiSiren className='ico'/>
                    <h4>Technology Driven Learning</h4>
                    <p className='pt-4'>Learn anytime from any place with the help of our robust Learning Management System (LMS). Experience the joy of classroom learning virtually.</p>
                    </div>
               
          </div>
          </div>
        <div className="col">
        <div className="card bor">
            <div className="card-body text-white">
          
                    <PiUser className='ico'/>
                    <h4>Student Centered</h4>
                    <p className='pt-4'>Dedicated student coordinators work with students on every step throughout the course. They would be guiding students on faculty interactions, projects and more.</p>
                    </div>
                </div>
              
        </div>
        <div className="col">
        <div className="card bor">
            <div className="card-body text-white">
           
                    <PiStackLight className='ico'/>
                    <h4>Resources</h4>
                    <p className='pt-5'>Students have access to additional resources – Digital library for references, eJournals for research publications and eConference </p>
                    </div>
               
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col">
        <div className="card bor">
            <div className="card-body text-white">
           
                    <PiRocketLaunch className='ico'/>
                    <h4>Recognized</h4>
                    <p className='pt-4'>Degree awarded by University of Central Nicaragua. UCN is International Association of Universities and UNESCO listed University</p>
                    </div>
             
          </div>
        </div>
        <div className="col">
        <div className="card bor">
            <div className="card-body text-white">
          
                    <PiStudentLight className='ico'/>
                    <h4>Illustrious Alumni Base</h4>
                    <p className='pt-4'>Our alumni are employed in World Health Organization (WHO), United Nations (UN), NGOs, Ministries of various countries & more</p>
                    </div>
              
          </div>
        </div>
        <div className="col">
        <div className="card bor">
            <div className="card-body text-white">
                    <PiUsersThreeLight className='ico'/>
                    <h4>Student Diversity</h4>
                    <p className='pt-5'>Join 1000+ students from all over the world who have enrolled in Public Health program with us.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bu-center'>
      <button className='px-4 py-2 bor text-white'>Get More Info</button>
      </div>
      </div>
    
    </section>
  )
}

export default Advantage;
