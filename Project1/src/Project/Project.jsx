import React, { useState } from 'react';
import './Project.css';

const Project = () => {
  const details = [
    { id: 1, title: "Glucose Monitor", short_desc: "Non-invasive glucose monitoring device.", description: "A detailed description about how the glucose monitor works.", image: "/images/1.jpg" },
    { id: 2, title: "AI Chatbot", short_desc: "An AI-powered chatbot for customer support.", description: "Details about AI chatbot functionality and features.", image: "/images/image2.jpg" },
    { id: 3, title: "Smart Home Automation", short_desc: "A home automation system using IoT.", description: "Complete details about smart home automation.", image: "/images/image3.jpg" },
    { id: 4, title: "Health Tracker", short_desc: "Wearable tech for health monitoring.", description: "Detailed information on how the health tracker works.", image: "/images/image4.jpg" }
  ];

  const [selectedItem, setSelectedItem] = useState(null);
  const [showGrid, setShowGrid] = useState(true);

  return (
    <div className="main">
      <div className="title">Projects</div>
      
      <div className="container">
        {/* Grid View */}
        {showGrid && (
          <div className="grid">
            {details.map((item) => (
              <div 
                className="item" 
                key={item.id} 
                onClick={() => { setSelectedItem(item); setShowGrid(false); }}
              >
                <div className="projectNo">Project {item.id}</div>
                <div className="desc">{item.short_desc}</div>
              </div>
            ))}
          </div>
        )}

        {/* Detailed View */}
        {selectedItem && (
          <div className="projectDisplay">
            <div className="top">
              <div className="image">
                <img src={selectedItem.image} alt={selectedItem.title} />
              </div>
              <div className="title">{selectedItem.title}</div>
            </div>
            
            <button 
              className="close" 
              onClick={() => { setSelectedItem(null); setShowGrid(true); }}
            >
              Close ✖
            </button>

            <div className="details">
              {selectedItem.description}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
