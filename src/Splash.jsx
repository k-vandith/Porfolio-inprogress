import React from 'react';
import './Splash.css'; // Optional: you can also put these styles in App.css

const Splash = ({ onEnter }) => {
  return (
    <div className="splash">
      <div className="spline-bg">
        {/* The Spline 3D viewer */}
        <spline-viewer 
          url="https://prod.spline.design/SzDHK3EQKMXNsMtG/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        ></spline-viewer>
      </div>
      <button className="enter-button" onClick={onEnter}>
        Enter Portfolio
      </button>
    </div>
  );
};

export default Splash;
