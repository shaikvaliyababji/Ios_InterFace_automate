import React from 'react';

export default function Dock({ children }) {
    return (
        <div className="dock-container">
            <div className="dock">
                {children}
            </div>
        </div>
    );
}
