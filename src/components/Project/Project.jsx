import React, { useState } from 'react'
import './Project.css';
const Project = () => {
    const details = [
        { id: 1, title: "Glucose Monitor", short_desc: "This project focuses on creating a non-invasive glucose monitoring device.", description: "A detailed description about how the glucose monitor works.", image: "./1.jpg" },
        { id: 2, title: "AI Chatbot", short_desc: "An AI-powered chatbot for customer support.", description: "Details about AI chatbot functionality and features.", image: "image2.jpg" },
        { id: 3, title: "Smart Home Automation", short_desc: "A home automation system using IoT.", description: "Complete details about smart home automation.", image: "image3.jpg" }
    ,{ id: 4, title: "Glucose Monitor", short_desc: "This project focuses on creating a non-invasive glucose monitoring device.", description: "A detailed description about how the glucose monitor works.", image: "image1.jpg" },
    { id: 5, title: "AI Chatbot", short_desc: "An AI-powered chatbot for customer support.", description: "Details about AI chatbot functionality and features.", image: "image2.jpg" },
    { id: 6, title: "Smart Home Automation", short_desc: "A home automation system using IoT.", description: "Complete details about smart home automation.", image: "image3.jpg" },
    { id: 7, title: "Glucose Monitor", short_desc: "This project focuses on creating a non-invasive glucose monitoring device.", description: "A detailed description about how the glucose monitor works.", image: "image1.jpg" },
        { id: 8, title: "AI Chatbot", short_desc: "An AI-powered chatbot for customer support.", description: "Details about AI chatbot functionality and features.", image: "image2.jpg" },
        { id: 9, title: "Smart Home Automation", short_desc: "A home automation system using IoT.", description: "Complete details about smart home automation.", image: "image3.jpg" }  
    ];
    const [selectedItem,setSelectedItem]=useState(null);
    const [showGrid,setShowGrid]=useState(true);
    return (
    <div className='main'>
        <div className="title">Projects</div>
        <div className="container">
            {showGrid && 
              <div className="grid">
              {details.map((item)=>(
                   <div className="item" key={item.id} onClick={()=>{setSelectedItem(item);setShowGrid(false)}}>
                   <div className="projectNo">Project {item.id}</div>
                   <div className="desc">{item.short_desc}</div>
               </div>
              ))}

          </div>
            }
            {selectedItem && (<div className='projectDisplay'>
                <div className="top">
                    <div className="image"><img src={selectedItem.image}></img></div>
                    <div className="title">{selectedItem.title}</div>
                    
                </div>
                <div className="close" onClick={()=>{setSelectedItem(null);setShowGrid(true)}}>X</div>
                <div className="details">
                {selectedItem.description}
                </div>
                </div>)}
           
        </div>
    </div>
  )
}

export default Project