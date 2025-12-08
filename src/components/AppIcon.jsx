import React from 'react';

export default function AppIcon({ name, icon, color, onClick }) {
    return (
        <div className="app-icon-container" onClick={onClick}>
            <div className="app-icon" style={{ background: color }}>
                {icon}
            </div>
            <span className="app-name">{name}</span>
        </div>
    );
}
