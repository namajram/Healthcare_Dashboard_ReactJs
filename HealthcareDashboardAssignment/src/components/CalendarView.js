import React from 'react';
import '../styles/CalendarView.css';

function CalendarView() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dates = ['25', '26', '27', '28', '29', '30', '31'];
  const times = [
    ['10:00', '08:00', '12:00', '10:00', '—', '12:00', '10:00'],
    ['11:00', '09:00', '—', '13:00', '14:00', '14:00', '10:00'],
    ['12:00', '10:00', '13:00', '—', '16:00', '15:00', '11:00']
  ];

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