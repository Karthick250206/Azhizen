import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const ServicePage = ({ onContactClick }) => {
  return (
    <div className="service-container">
      <h1>Our Services</h1>
      <p>We provide amazing services to our clients.</p>
      <button onClick={onContactClick}>Contact Us</button>
    </div>
  );
};

const ContactForm = ({ onClose }) => {
  return (
    <div className="overlay">
      <div className="container">
        <h2>Get in Touch</h2>
        <div className="contact-box">
          <div className="form-section">
            <label>Name:</label>
            <input type="text" placeholder="Enter your name" />

            <label>Mobile Number:</label>
            <input type="text" placeholder="Enter your mobile number" />

            <label>Email:</label>
            <input type="email" placeholder="Enter your email" />

            <label>Any queries:</label>
            <textarea placeholder="Any queries....."></textarea>

            <button>Register</button>
            <button className="close-btn" onClick={onClose}>Close</button>
          </div>

          <div className="image-section">
            <img src="contactus.jpg" alt="Contact Us" />
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [showContact, setShowContact] = useState(false);

  return (
    <div>
      {showContact ? (
        <ContactForm onClose={() => setShowContact(false)} />
      ) : (
        <ServicePage onContactClick={() => setShowContact(true)} />
      )}
    </div>
  );
};

// Inject CSS Styles
const styles = `
body {
  font-family: Arial, sans-serif;
  background-color: #f3f3f3;
  text-align: center;
  margin: 0;
  padding: 0;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

button:hover {
  background: #0056b3;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 500px;
}

.contact-box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-section {
  width: 100%;
}

.form-section label {
  display: block;
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
}

.form-section input,
.form-section textarea {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-section button {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.form-section button:hover {
  background: #0056b3;
}

.close-btn {
  background: red;
}

.image-section img {
  width: 100%;
  max-width: 300px;
  border-radius: 10px;
}
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

// Render the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

