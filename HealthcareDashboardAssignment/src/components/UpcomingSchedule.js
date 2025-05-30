// src/components/UpcomingSchedule.jsx
import React from 'react';
import scheduleData from '../data/scheduleData';
import '../styles/UpcomingSchedule.css';

function UpcomingSchedule() {
  return (
    <section className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      {scheduleData.map(({ date, parts }) => (
        <div className="schedule-day" key={date}>
          <h4>On {date}</h4>
          {parts.map(({ partName, appointments }) => (
            <div className="schedule-part" key={partName}>
              <h5>{partName}</h5>
              {appointments.map(({ company, time }, idx) => {
                const companyParts = company.split(' ');

                return (
                  <div className="appointment-card" key={idx}>
                    <div className="appointment-content">
                      <div className="company-name">
                        {companyParts.map((part, i) => (
                          <span className="company-part" key={i}>
                            {part}
                          </span>
                        ))}
                      </div>
                      <span className="appointment-time">{time}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}

export default UpcomingSchedule;
