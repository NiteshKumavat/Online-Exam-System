import React from "react";
import "./IntroPage.css";

const IntroPage = () => {
  return (
    <div className="intro">
        <div className="header">
            <h1 className="logo">MindMetrics</h1>
            
            <nav>
                <a href="home" className="nav-link">Home</a>
                <a href="roles" className="nav-link">Roles</a>
                <a href="aboutUs" className="nav-link">About Us</a>
            </nav>
        </div>
    </div>
  );
};

export default IntroPage;
