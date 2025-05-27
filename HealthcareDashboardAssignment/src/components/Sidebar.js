import React from 'react';
import '../styles/Sidebar.css';
import { navLinks } from '../data/navigation'


function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">General</h2>
      <ul className="nav-list">
        {navLinks.map((link, index) => (
          <li key={index} className="nav-item">
            <span className="icon">{link.icon}</span>
            <span>{link.label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;