import React from 'react'
import './About.css';
const About = () => {
  return (
    <div className='About'>
        <div className="title">About Us</div>
        <div className="card">
            <div className="image"><img src="./handshake.png"></img></div>
            <div className="right-container">
            <div className="text">We foster a collaborative space 
for knowledge-sharing, 
connections, and growth. Through 
clear guidelines and effective 
moderation, we ensure a 
supportive, resource-rich forum 
that adapts, empowers, and drives 
innovation</div>
<button className='know'>Get to Know Us</button>
            </div>
           
        </div>
    </div>
  )
}

export default About