import React, { useState, useEffect } from 'react';
import { Lock } from 'lucide-react';

export default function LockScreen({ onUnlock }) {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="lock-screen" onClick={onUnlock}>
            <div className="lock-header">
                <Lock size={20} color="white" />
            </div>
            <div className="time-display">
                <h1 className="clock-time">
                    {time.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', hour12: false })}
                </h1>
                <h2 className="clock-date">
                    {time.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })}
                </h2>
            </div>
            <div className="swipe-hint">
                Click to Unlock
            </div>
            <div className="bottom-actions">
                {/* Flashlight and Camera buttons could go here */}
                <div className="action-button flashlight"></div>
                <div className="action-button camera"></div>
            </div>
        </div>
    );
}
