import React from "react";
import "./IntroPage.css";
import person from "./person.jpg";

const IntroPage = () => {
    return (
        <div className="intro">
            <header className="header">
                <h1 className="logo">MindMetrics</h1>
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
                    <img src={person} alt="book" />
                </div>
            </section>

            <div className="information">
                <div className="roles">
                    <div className="students">
                        <h2>Roles of Students</h2>
                        <ul>
                            <li>Attend scheduled exams</li>
                            <li>Submit answers within deadlines</li>
                            <li>Access and review feedback</li>
                            <li>View performance reports</li>
                            <li>Participate in practice tests</li>
                            <li>Follow exam guidelines</li>
                            <li>Update personal profile information</li>
                        </ul>
                    </div>
                    <div className="teachers">
                        <h2>Roles of Teachers</h2>
                        <ul>
                            <li>Create and schedule exams</li>
                            <li>Manage question banks</li>
                            <li>Evaluate and grade submissions</li>
                            <li>Provide feedback to students</li>
                            <li>Monitor exam activity</li>
                            <li>Generate performance reports</li>
                            <li>Approve or reject content</li>
                            <li>Manage student groups</li>
                        </ul>
                    </div>
                </div>
            </div>

            <footer className="footer">
                <p>© 2025 MindMetrics. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default IntroPage;

