import React from 'react';
import ActivitySection from './ActivitySection';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import '../styles/DashboardMain.css';

function DashboardMain() {
  return (
    <main className="dashboard-main">
      <h2>Dashboard</h2>
      <div className="dashboard-sections">
        <ActivitySection />
        <CalendarView />
        <UpcomingSchedule />
      </div>
    </main>
  );
}

export default DashboardMain;
