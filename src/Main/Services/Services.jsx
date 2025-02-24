import React from 'react'
import './Services.css';
const Services = () => {
    return (
        <div className='Services'>
            <div className="service-title">Services</div>
            <div className="card">
                
                <div className="left-container">
                <div className="text">We provide advanced hardware 
prototyping, including custom 
PCB design, embedded systems, 
IoT solutions, and rapid 
prototyping. Our experts ensure 
functional testing, AI/ML 
integration, firmware updates, 
system calibration, and industry 
compliance</div>
    <button className='service'>Try our Services</button>
                </div>
                <div className="image"><img src="./services.jpeg"></img></div>
            </div>
        </div>
      )
}


export default Services