import React from 'react';
import '../styles/UpcomingSchedule.css';

function UpcomingSchedule() {
  return (
    <section className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      <div className="schedule-day">
        <h4>On Thursday</h4>
        <div className="appointment-card">
          <div className="appointment-content">
            <strong>Health checkup complete</strong>
            <span>11:00 AM</span>
          </div>
        </div>
        <div className="appointment-card">
          <div className="appointment-content">
            <strong>Ophthalmologist</strong>
            <span>14:00 PM</span>
          </div>
        </div>
      </div>
      <div className="schedule-day">
        <h4>On Saturday</h4>
        <div className="appointment-card">
          <div className="appointment-content">
            <strong>Cardiologist</strong>
            <span>12:00 AM</span>
          </div>
        </div>
        <div className="appointment-card">
          <div className="appointment-content">
            <strong>Neurologist</strong>
            <span>16:00 PM</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UpcomingSchedule;