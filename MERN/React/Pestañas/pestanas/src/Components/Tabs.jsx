import React, { useState } from 'react';
import './Tabs.css';

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);
    const [changingTab, setChangingTab] = useState(false);

    const handleTabClick = (index, callback) => {
        if (!changingTab) {
            setChangingTab(true);
            setTimeout(() => {
                setActiveTab(index);
                setChangingTab(false);
                if (callback) {
                    callback();
                }
            }, 150); // Duración de la animación
        }
    };

    return (
        <div className="tabs">
            <div className="tab-headers">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`tab-header ${index === activeTab ? 'active' : ''}`}
                        onClick={() => handleTabClick(index, tab.onClick)}
                    >
                        {tab.label}
                    </div>
                ))}
            </div>
            <div className={`tab-content ${changingTab ? 'hidden' : ''}`}>
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

export default Tabs;