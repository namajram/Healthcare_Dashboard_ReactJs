import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMain from './components/DashboardMain';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar />
        <DashboardMain />
      </div>
    </div>
  );
}

export default App;