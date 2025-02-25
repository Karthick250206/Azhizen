import React, { useState } from 'react'
import './Project.css';
import { IoIosCloseCircleOutline } from "react-icons/io";
const Project = () => {
    const details = [
        { id: 1, title: "Emotion Recognition using CNN", short_desc: "Uses Convolutional Neural Networks to classify human emotions from facial expressions in images or videos.", description: "Emotion Recognition using CNN (Convolutional Neural Networks) is a deep learning technique that identifies human emotions from facial expressions in images or videos. It involves training a CNN model on labeled emotion datasets, extracting facial features, and classifying emotions like happy, sad, angry, or neutral. The model processes pixel data through convolutional layers to detect patterns related to different emotions. This technology is widely used in sentiment analysis, human-computer interaction, and mental health monitoring.", image: "./1.jpg" },
        { id: 2, title: "Heart Disease Prediction Using Logestic Regression & XG Boost", short_desc: "Combines Logistic Regression for interpretability and XGBoost for high accuracy in predicting heart disease risk from medical data.", description: "Heart Disease Prediction using Logistic Regression and XGBoost is a machine learning approach to classify whether a person is at risk of heart disease based on medical parameters. Logistic Regression is a simple, interpretable model that estimates the probability of disease presence, while XGBoost is a powerful gradient boosting algorithm that improves prediction accuracy by handling complex relationships in data. The model is trained on datasets containing patient attributes like age, blood pressure, cholesterol levels, and heart rate. This approach is widely used in healthcare for early diagnosis and preventive measures.", image: "image2.jpg" },
        { id: 3, title: "Heart Disease Prediction Using Random Forest", short_desc: "Uses an ensemble of decision trees to classify heart disease risk based on medical attributes like age, cholesterol, and blood pressure.", description: "Heart Disease Prediction using Random Forest is a machine learning technique that classifies whether a person is at risk of heart disease based on medical features. Random Forest is an ensemble learning method that builds multiple decision trees and combines their outputs to improve accuracy and reduce overfitting. The model is trained on datasets with attributes like age, cholesterol levels, blood pressure, and heart rate to make predictions. It is widely used in healthcare due to its robustness, interpretability, and high predictive performance for early diagnosis.", image: "image3.jpg" }
    ,{ id: 4, title: "Milk Prediction using RGB values", short_desc: "Predicts milk quality by analyzing its RGB color values using machine learning models like Logistic Regression, Random Forest, or CNNs.", description: "Milk Quality Prediction using RGB Values is a machine learning approach to assess milk quality based on its color properties. By extracting Red, Green, and Blue (RGB) values from milk images, the model learns patterns that indicate freshness, adulteration, or spoilage. Techniques like Logistic Regression, Random Forest, or CNNs can be used to classify the milk as fresh or spoiled. This method is useful in food quality control, helping automate the detection process in dairy industries and reducing human inspection errors.", image: "image1.jpg" },
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
                    <div className="top-title">{selectedItem.title}</div>
                    
                </div>
                
                <div className='close' onClick={()=>{setSelectedItem(null);setShowGrid(true)}}><IoIosCloseCircleOutline size={40} /></div>
                <div className="details">
                {selectedItem.description}
                </div>
                </div>)}
           
        </div>
    </div>
  )
}

export default Project