import React from 'react'
import './Footer.css';
const Footer = () => {
  return (
    <div className='footer-main'>
        <div className="map-section">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7823.322487111315!2d77.82403741803788!3d11.359435193944206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba964016c607823%3A0x580736a65c2b0005!2sK.S.Rangasamy%20College%20of%20Technology!5e0!3m2!1sen!2sin!4v1739380305222!5m2!1sen!2sin" width="275" height="175" style={{borderStyle:'none'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <button>View on map</button>
        </div>
        <div className="contact-card">
            <div className="contact">Contact</div>
            <div className="number">+91 9750603988</div>
            <div className="email">azhizensolutions@gmail.com</div>
            <div className="follow">Follow us</div>
            <div className="social-icons">

            </div>
        </div>
    </div>
  )
}

export default Footer