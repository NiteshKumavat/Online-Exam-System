import React from "react";
import "./Register.css";
import google from "./google.png"

function Register() {
  return (
    <div className="register-page">
      <div className="register-container">
        
        <div
          className="register-image"
        >
          <div className="image-text">
            <h2>Join MindMetrics</h2>
            <p>Empower your learning journey with us.</p>
          </div>
        </div>


        <div className="register-form">
          <h2>Create Account</h2>
          <h3>Start your journey today</h3>
          <form>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" placeholder="Enter your name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Create a password" />

            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Re-enter password"
            />

            <button type="submit">Sign Up</button>
          </form>

          <a href="#" id="google" ><img src={google} alt="google icon" style={{width : "20px"}} />Sign Up With Google</a>
          <p className="login-link">
            Already have an account? <a href="#">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
