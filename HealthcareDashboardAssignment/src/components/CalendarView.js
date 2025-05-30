import React from 'react';
import '../styles/CalendarView.css';
import { days, dates, times } from '../data/calendarAppointments'; // Adjust path as needed

function CalendarView() {
  return (
    <section className="calendar-section">
      <h3>October 2021</h3>
      <table className="calendar-table">
        <thead>
          <tr>
            {days.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {dates.map((date, index) => (
              <td key={index}>{date}</td>
            ))}
          </tr>
          {times.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((time, timeIndex) => (
                <td key={timeIndex}>{time}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default CalendarView;
