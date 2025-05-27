import React from 'react';
import '../styles/SimpleAppointmentCard.css';

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="simple-appointment-card">
      <div className="icon">{icon}</div>
      <div className="details">
        <p className="title">{title}</p>
        <p className="time">{time}</p>
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;
