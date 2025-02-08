import React, { useState } from 'react';
// Ensure paths are correct
import hardwareImage from '../assets/hardware.png';  
import manufacturingImage from '../assets/manufacturing.jpg';  
import softwareImage from '../assets/software.jpg';  

const styles = {
  html: {
    margin: 1,
    padding: 0,
    width: '100%',
    height: '100%',
    overflowX: 'hidden',
  },
  body: {
    fontFamily: 'Arial, sans-serif',
    margin: 0,
    padding: 0,
    textAlign: 'center',
    height: '100vh',  // Full viewport height
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '18px',
    overflowY: 'auto',  // Allow vertical scrolling
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px 40px',
    background: 'white',
    borderBottom: '2px solid lightgray',
    width: '100%',
    boxSizing: 'border-box',
    flexShrink: 0,
  },
  logo: {
    fontSize: '30px',
    color: '#0099cc',
    margin: '0',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
  },
  navItem: {
    margin: '0 20px',
  },
  navLink: {
    textDecoration: 'none',
    color: 'black',
    fontSize: '18px',
  },
  activeNavLink: {
    fontWeight: 'bold',
    textDecoration: 'underline',
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
    borderRadius: '0',
    fontSize: '18px',
  },
  serviceContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    gap: '30px',
    marginTop: '40px',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginBottom: '40px',  // Add margin at the bottom to prevent overlapping
  },
  arrow: {
    fontSize: '36px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
  },
  serviceCard: {
    width: '280px',
    border: '1px solid #ddd',
    textAlign: 'center',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '350px',
    padding: '20px',
    boxSizing: 'border-box',
    fontSize: '18px',
  },
  serviceImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  serviceCardTitle: {
    padding: '10px',
    marginTop: '15px',
    fontSize: '22px',
  },
  dotContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '30px',
  },
  dot: {
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    background: '#0099cc',
    margin: '0 8px',
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
    maxHeight: '80vh', // Ensure the popup doesn't overflow the viewport
    overflowY: 'auto', // Allow scrolling inside the popup if the content is too long
  },
  popupContentTitle: {
    fontSize: '26px',
    marginTop: 0,
    marginBottom: '20px',
  },
  popupList: {
    paddingLeft: '20px',
    fontSize: '20px',
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
  const [currentPage, setCurrentPage] = useState(0); 

  const openPopup = (content, details) => {
    setPopupContent(content);
    setPopupDetails(details);
  };

  const closePopup = () => {
    setPopupContent(null);
    setPopupDetails(null);
  };

  const goToPage = (direction) => {
    if (direction === 'next') {
      setCurrentPage((prevPage) => (prevPage + 1) % 3); 
    } else {
      setCurrentPage((prevPage) => (prevPage - 1 + 3) % 3); 
    }
  };

  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <h1 style={styles.logo}>AZHIZEN</h1>
        <nav>
          <ul style={styles.navList}>
            <li style={styles.navItem}><a href="#" style={styles.navLink}>About us</a></li>
            <li style={styles.navItem}><a href="#" style={{...styles.navLink, ...styles.activeNavLink}}>Services</a></li>
            <li style={styles.navItem}><a href="#" style={styles.navLink}>Projects</a></li>
            <li style={styles.navItem}><a href="#" style={styles.navLink}>Our Team</a></li>
            <li style={styles.navItem}><a href="#" style={styles.navLink}>Contact us</a></li>
          </ul>
        </nav>
      </header>

      <section className="services">
        <h2 style={styles.servicesHeader}>Services</h2>
        <div style={styles.buttons}>
          <button style={styles.button} className="active">Ongoing</button>
          <button style={styles.button}>Planned</button>
        </div>
        <div style={styles.serviceContainer}>
          <div
            style={styles.arrow}
            onClick={() => goToPage('prev')}
          >
            &lt; 
          </div>

          <div style={styles.serviceCard} onClick={() => openPopup('Manufacturing & Assembly', [
            'Custom PCB design and manufacturing',
            'Embedded system design',
            'Product prototyping',
            'IoT hardware solutions',
          ])}>
            <img src={hardwareImage} alt="Hardware Design" style={styles.serviceImage} />
            <h3 style={styles.serviceCardTitle}>Hardware Design & Development</h3>
          </div>
          <div style={styles.serviceCard} onClick={() => openPopup('Hardware Design & Development', [
            'Assembly line setup',
            'Product packaging solutions',
            'Component sourcing and logistics',
            'Quality assurance processes',
          ])}>
            <img src={manufacturingImage} alt="Manufacturing" style={styles.serviceImage} />
            <h3 style={styles.serviceCardTitle}>Manufacturing & Assembly</h3>
          </div>
          <div style={styles.serviceCard} onClick={() => openPopup('Software Development', [
            'Custom software solutions',
            'App development for IoT',
            'System integration',
            'Cloud-based software platforms',
          ])}>
            <img src={softwareImage} alt="Software Development" style={styles.serviceImage} />
            <h3 style={styles.serviceCardTitle}>Software Development</h3>
          </div>

          <div
            style={styles.arrow}
            onClick={() => goToPage('next')}
          >
            &gt;
          </div>
        </div>

        <div style={styles.dotContainer}>
          {[0, 1, 2].map((dot, index) => (
            <div
              key={index}
              style={{
                ...styles.dot,
                background: index === currentPage ? '#0099cc' : '#ddd',
              }}
            />
          ))}
        </div>
      </section>

      {popupContent && (
        <div style={styles.popup}>
          <div>
            <span style={styles.closePopup} onClick={closePopup}>×</span>
            <h3 style={styles.popupContentTitle}>{popupContent}</h3>
            <ul style={styles.popupList}>
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
















