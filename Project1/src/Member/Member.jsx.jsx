import React, { useState } from 'react';
import './Member.css';
import { FaArrowRight } from 'react-icons/fa';

const Member = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const members = Array(9).fill(null).map((_, index) => ({ name: `Member ${index + 1}`, img: './member.jpg' }));
  const membersPerView = 3;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + membersPerView) % members.length);
  };

  const getVisibleMembers = () => {
    const total = members.length;
    const start = currentIndex;
    const end = (currentIndex + membersPerView) % total;

    if (end > start) {
      return members.slice(start, end);
    } else {
      return [...members.slice(start, total), ...members.slice(0, end)];
    }
  };

  return (
    <div className='main'>
      <div className="member-title">Meet The Crew</div>
      <div className="desc">Our dedicated team members bring passion, expertise, and innovation to every challenge, working together to achieve excellence.</div>
      <div className="grid-container">
        <div className="member-grid" style={{ display: 'grid', gridTemplateColumns: `repeat(${membersPerView}, 1fr)` }}>
          {getVisibleMembers().map((member, index) => (
            <div key={index} className="member-card">
              <div className="member-img"><img src={member.img} alt={member.name} /></div>
              <div className='member-count'>{member.name}</div>
            </div>
          ))}
        </div>
        <button className="arrow-button right" onClick={handleNext}>
          <FaArrowRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Member;
