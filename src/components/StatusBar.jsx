import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';

export default function StatusBar() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="status-bar">
            <div className="status-left">
                <span className="time">
                    {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
                </span>
            </div>
            <div className="status-notch"></div>
            <div className="status-right">
                <Signal size={16} className="status-icon" />
                <Wifi size={16} className="status-icon" />
                <Battery size={20} className="status-icon" />
            </div>
        </div>
    );
}
