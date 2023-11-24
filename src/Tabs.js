// Tabs.js
import React, { useState } from 'react';
import Tab from './Tab';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="tab-list">
        {children.map((child) => (
          <Tab
            key={child.props.label}
            label={child.props.label}
            isActive={activeTab === child.props.label}
            onClick={changeTab}
          />
        ))}
      </div>
      <div className="tab-content">
        {children.find((child) => child.props.label === activeTab)}
      </div>
    </div>
  );
};

export default Tabs;