import React, { useState } from 'react';
import './App.css';
import StatusBar from './components/StatusBar';
import Dock from './components/Dock';
import AppIcon from './components/AppIcon';
import HomeScreen from './components/HomeScreen';
import LockScreen from './components/LockScreen';
import {
  Mail, Map, Image, Settings, Compass, MessageCircle, Music, Phone,
  Calendar, Clock, Calculator, Camera, StickyNote
} from 'lucide-react';

function App() {
  const [activeApp, setActiveApp] = useState(null);
  const [isLocked, setIsLocked] = useState(true);

  const apps = [
    { id: 'mail', name: 'Mail 1', icon: <Mail color="white" size={32} />, color: '#838d98ff' },
    { id: 'mail', name: 'Mail', icon: <Mail color="white" size={32} />, color: '#007AFF' },
    { id: 'maps', name: 'Maps', icon: <Map color="white" size={32} />, color: '#34C759' },
    { id: 'photos', name: 'Photos', icon: <Image color="white" size={32} />, color: 'white' }, // Custom handling for multicolor later
    { id: 'calendar', name: 'Calendar', icon: <Calendar color="red" size={32} />, color: 'white' },
    { id: 'clock', name: 'Clock', icon: <Clock color="white" size={32} />, color: 'black' },
    { id: 'settings', name: 'Settings', icon: <Settings color="white" size={32} />, color: '#8E8E93' },
    { id: 'camera', name: 'Camera', icon: <Camera color="white" size={32} />, color: '#ccc' },
    { id: 'calculator', name: 'Calculator', icon: <Calculator color="white" size={32} />, color: '#333' },
    { id: 'notes', name: 'Notes', icon: <StickyNote color="white" size={32} />, color: '#F1C40F' },

  ];

  const dockApps = [
    { id: 'phone', name: 'Phone', icon: <Phone color="white" size={32} />, color: '#34C759' },
    { id: 'safari', name: 'Safari', icon: <Compass color="white" size={32} />, color: '#007AFF' },
    { id: 'messages', name: 'Messages', icon: <MessageCircle color="white" size={32} />, color: '#34C759' },
    { id: 'music', name: 'Music', icon: <Music color="white" size={32} />, color: '#FF3B30' },
  ];

  const handleAppClick = (app) => {
    setActiveApp(app);
  };

  const closeApp = () => {
    setActiveApp(null);
  };

  const unlock = () => {
    setIsLocked(false);
  };

  return (
    <div className="device-frame">
      <div className="screen">
        <StatusBar />

        {isLocked ? (
          <LockScreen onUnlock={unlock} />
        ) : (
          <>
            <HomeScreen>
              {apps.map(app => (
                <AppIcon
                  key={app.id}
                  name={app.name}
                  icon={app.icon}
                  color={app.color}
                  onClick={() => handleAppClick(app)}
                />
              ))}
            </HomeScreen>

            <Dock>
              {dockApps.map(app => (
                <AppIcon
                  key={app.id}
                  name="" // Dock icons usually don't have labels or they are hidden
                  icon={app.icon}
                  color={app.color}
                  onClick={() => handleAppClick(app)}
                />
              ))}
            </Dock>

            <div className="home-indicator" onClick={closeApp}></div>

            {activeApp && (
              <div className="app-window open">
                <div className="app-header">
                  <button onClick={closeApp} className="back-button">Back</button>
                  <h2>{activeApp.name}</h2>
                </div>
                <div className="app-content">
                  <h1>{activeApp.name} App</h1>
                  <p>This is a simulated fully functional interface.</p>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
