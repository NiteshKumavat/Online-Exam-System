import React from "react";
import studyImage from "./study.jpg";
import google from "./google.png"
import "./Login.css";

function Login() {
  return (
    <div className="login-page">
        <div className="login-container">
            <div className="image-quote" >
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis laboriosam sed eius.
                </p>
            </div>
            <div className="login-form">
                <h2>Log In</h2>
                <h3>Welcome to MindMetrics</h3>
                <form action="">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password"/>

                    <a href="#" id="forget">forget password?</a>

                    <button type="submit">Sign in</button>   
                </form>

                <p id="or">-----------------or-----------------</p>

                <a href="#" id="google"><img src={google} alt="google icon" style={{width : "30px"}} />Sign in with Google</a>

                <p>New User? <a href="#">Create Account</a></p>
            </div>
        </div>
      
    </div>
  );
}

export default Login;
