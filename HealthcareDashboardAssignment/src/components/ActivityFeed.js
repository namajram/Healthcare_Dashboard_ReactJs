import React from 'react';
import '../styles/ActivityFeed.css';
import activityData from '../data/activityData'; 

const ActivityFeed = () => {
  return (
    <div className="activity-feed">
      <h3>Activity</h3>
      <p>3 appointments this week</p>
      <div className="activity-bars">
        {activityData.map((height, index) => (
          <div key={index} className="bar" style={{ height: `${height}%` }}></div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
