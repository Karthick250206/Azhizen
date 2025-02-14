import React, { useState } from 'react';
import hardwareImage from '../assets/hardware.png';  
import manufacturingImage from '../assets/manufacturing.jpg';  
import softwareImage from '../assets/software.jpg';  

const wrapperStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  minHeight: "100vh",
  padding: "100px",
};
const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    textAlign: 'center',
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '18px',
    overflowY: 'auto',
  },
  servicesHeader: {
    color: '#0099cc',
    marginTop: '40px',
    fontSize: '32px',
  },
  buttons: {
    margin: '30px auto',
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    background: '#0099cc',
    color: 'white',
    padding: '12px 24px',
    border: 'none',
    cursor: 'pointer',
    margin: '0 1px',
    borderRadius: '5px',
    fontSize: '18px',
  },
  serviceContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    marginTop: '40px',
  },
  serviceCard: {
    width: '280px',
    border: '1px solid #ddd',
    textAlign: 'center',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    fontSize: '18px',
  },
  serviceImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  popup: {
    display: 'block',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#0099cc',
    padding: '50px',
    borderRadius: '8px',
    width: '700px',
    textAlign: 'left',
    color: 'white',
    boxSizing: 'border-box',
    zIndex: 9999,
    fontSize: '20px',
    maxHeight: '80vh',
    overflowY: 'auto',
  },
  closePopup: {
    position: 'absolute',
    top: '10px',
    right: '15px',
    fontSize: '36px',
    cursor: 'pointer',
    color: 'white',
    backgroundColor: 'transparent',
    border: 'none',
  },
};

function Service() {
  const [popupContent, setPopupContent] = useState(null);
  const [popupDetails, setPopupDetails] = useState(null);

  const openPopup = (content, details) => {
    setPopupContent(content);
    setPopupDetails(details);
  };

  const closePopup = () => {
    setPopupContent(null);
    setPopupDetails(null);
  };

  return (
    <div style={styles.body}>
      <section className="services">
        <h2 style={styles.servicesHeader}>Services</h2>
        <div style={styles.buttons}>
          <button style={styles.button} className="active">Ongoing</button>
          <button style={styles.button}>Planned</button>
        </div>
        <div style={styles.serviceContainer}>
          <div 
            style={styles.serviceCard} 
            onClick={() => openPopup('Hardware Design & Development', [
              'Custom PCB design and manufacturing',
              'Embedded system design',
              'Product prototyping',
              'IoT hardware solutions',
            ])}
          >
            <img src={hardwareImage} alt="Hardware Design" style={styles.serviceImage} />
            <h3>Hardware Design & Development</h3>
          </div>

          <div 
            style={styles.serviceCard} 
            onClick={() => openPopup('Manufacturing & Assembly', [
              'Assembly line setup',
              'Product packaging solutions',
              'Component sourcing and logistics',
              'Quality assurance processes',
            ])}
          >
            <img src={manufacturingImage} alt="Manufacturing" style={styles.serviceImage} />
            <h3>Manufacturing & Assembly</h3>
          </div>

          <div 
            style={styles.serviceCard} 
            onClick={() => openPopup('Software Development', [
              'Custom software solutions',
              'App development for IoT',
              'System integration',
              'Cloud-based software platforms',
            ])}
          >
            <img src={softwareImage} alt="Software Development" style={styles.serviceImage} />
            <h3>Software Development</h3>
          </div>
        </div>
      </section>

      {popupContent && (
        <div style={styles.popup}>
          <div>
            <span style={styles.closePopup} onClick={closePopup}>×</span>
            <h3>{popupContent}</h3>
            <ul>
              {popupDetails && popupDetails.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Service;
