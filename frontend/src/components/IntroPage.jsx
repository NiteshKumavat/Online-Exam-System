import React from "react";
import "./IntroPage.css";
import person from "./person.jpg";

const IntroPage = () => {
    return (
        <div className="intro">
            <header className="header">
                <h1 className="logo">MindMetrics</h1>
                <nav>
                    <a href="#home" className="nav-link">Home</a>
                    <a href="#roles" className="nav-link">Roles</a>
                    <a href="#about" className="nav-link">About Us</a>
                </nav>
            </header>

            <section className="hero">
                <div className="hero-text">
                    <h2>Track Your Progress. Achieve More.</h2>
                    <p>
                        A secure, scalable, and user-friendly platform for creating, 
                        delivering, and evaluating online examinations. 
                        Designed for schools, colleges, coaching institutes, 
                        and corporate training.
                    </p>
                    <div className="cta-buttons">
                        <button className="btn-primary">Login</button>
                        <button className="btn-secondary">Register</button>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={person} alt="Person studying" />
                </div>
            </section>

            <footer className="footer">
                <p>© 2025 MindMetrics. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default IntroPage;

