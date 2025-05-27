import React from 'react';
import '../styles/ActivitySection.css';

function ActivitySection() {
  return (
    <section className="activity-section">
      <div className="activity-header">
        <h3>Activity</h3>
      </div>
      <div className="activity-items">
        <div className="activity-item healthy">
          <span>Healthy Heart</span>
        </div>
        <div className="activity-item">
          <span>Healthy Log</span>
        </div>
        <div className="activity-item">
          <span>Bone</span>
        </div>
        <div className="activity-date">
          <span>Date: 26 Oct 2021</span>
        </div>
      </div>
    </section>
  );
}

export default ActivitySection;