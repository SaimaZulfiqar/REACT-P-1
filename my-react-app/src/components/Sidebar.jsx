import React, { useState } from 'react';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isSidebarOpen ? 'Close' : 'Open'} Sidebar
      </button>
      <nav>
        <ul>
          <li>Home</li>
          <li>Profile</li>
          <li>Notifications</li>
          <li>Messages</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

