import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h1>Healthcare.</h1>
      </div>
      <div className="header-right">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="notification-icon">
          <i className="fas fa-bell"></i>
        </div>
        <div className="user-profile">
          <div className="avatar">JD</div>
          <span>John Doe</span>
        </div>
        <button className="add-button">
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </header>
  );
}

export default Header;