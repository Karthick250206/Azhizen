import React from 'react'
import './Partners.css';
const Partners = () => {
  return (
    <div className='partners-main'>
        <div className="partner-title">Our Partners</div>
        <div className="partners">
            <div className="partner">
                <div className="left-arrow">&lt;</div>
                <div className="img"><img src="./gfg.jpeg" alt="" /></div>
                <div className="right-arrow">&gt;</div>
            </div>
        </div>
    </div>
  )
}

export default Partners