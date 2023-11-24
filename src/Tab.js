// Tab.js
import React from 'react';

const Tab = ({ label, isActive, onClick }) => {
  return (
    <div
      className={`tab ${isActive ? 'active' : ''}`}
      onClick={() => onClick(label)}
    >
      {label}
    </div>
  );
};

export default Tab;