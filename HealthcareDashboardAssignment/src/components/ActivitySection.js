import React from 'react';
import '../styles/ActivitySection.css';

function ActivitySection() {
  return (
    <section className="activity-section">
      <h3 className="activity-title">Activity</h3>
      <div className="activity-content">
        <div className="activity-left">
          <img
            src="https://media.gettyimages.com/id/109722994/photo/human-body-x-ray.jpg?s=1024x1024&w=gi&k=20&c=7wMr8C0d6nKelPb4ZZz23p5gwJPtthPCqpXT0DXA81M=="
            alt="Body Parts"
          />
        </div>
        <div className="activity-right">
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
        </div>
      </div>
    </section>
  );
}

export default ActivitySection;
