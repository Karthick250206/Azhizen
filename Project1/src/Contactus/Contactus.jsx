import React from "react";
import backgroundImage from "../assets/conbackground.jpg"; // Background for form
import contusImage from "../assets/contus.jpg"; // Side image

const ContactFormWithImage = () => {
  return (
    <div style={wrapperStyle}>
      {/* Centered Heading with Midnight Blue Color */}
      <h2 style={headingStyle}>Get in Touch</h2>

      {/* Container for Form & Image */}
      <div style={containerStyle}>
        {/* Left Section: Contact Form with Background Image */}
        <div style={formContainerStyle}>
          <label style={labelStyle}>Name:</label>
          <input type="text" placeholder="Enter your name" style={inputStyle} />

          <label style={labelStyle}>Mobile Number:</label>
          <input type="text" placeholder="Enter your mobile number" style={inputStyle} />

          <label style={labelStyle}>Email:</label>
          <input type="email" placeholder="Enter your email" style={inputStyle} />

          <label style={labelStyle}>Any queries:</label>
          <textarea placeholder="Any queries....." style={textareaStyle}></textarea>

          <button style={buttonStyle}>Register</button>
        </div>

        {/* Right Section: Image */}
        <div style={imageContainerStyle}>
          <img src={contusImage} alt="Contact Us" style={imageStyle} />
        </div>
      </div>
    </div>
  );
};

// 🔹 Styles
const wrapperStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  minHeight: "100vh",
  padding: "50px", // Reduced padding to reduce the gap
};

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "80px",
  padding: "40px",
};

// 🎯 "Get in Touch" in Midnight Blue
const headingStyle = {
  fontSize: "28px",
  fontWeight: "bold",
  marginBottom: "10px", // Reduced margin to reduce the gap
  color: "#03045E", // Midnight Blue
};

const formContainerStyle = {
  backgroundImage: `url(${backgroundImage})`, // 🎯 Background applied only to form
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  padding: "30px",
  borderRadius: "15px",
  width: "350px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  display: "flex",
  flexDirection: "column",
};

const labelStyle = {
  fontWeight: "bold",
  marginBottom: "5px",
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  marginBottom: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
};

const textareaStyle = {
  ...inputStyle,
  height: "80px",
};

const buttonStyle = {
  padding: "10px",
  background: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  marginTop: "10px",
};

const imageContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const imageStyle = {
  width: "300px",
  borderRadius: "10px",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
};

// Export Component
export default ContactFormWithImage;