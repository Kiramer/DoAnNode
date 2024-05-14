import React, { useState } from "react";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false);

  const toggleForm = () => {
    setIsSignup(!isSignup);
  };

  return (
    <div className="login-signup">
      <div className="login-signup-container">
        {isSignup ? (
          <>
            <h1>Sign Up</h1>
            <div className="login-signup-fields">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
            </div>
            <button>Continue</button>
            <p className="login-signup-login">
              Already have an account?{" "}
              <span onClick={toggleForm}>Login here</span>
            </p>
            <div className="login-signup-agree">
              <input type="checkbox" id="terms" />
              <p>By continuing, I agree to the terms of use & privacy policy</p>
            </div>
          </>
        ) : (
          <>
            <h1>Login</h1>
            <div className="login-signup-fields">
              <input type="email" placeholder="Email Address" />
              <input type="password" placeholder="Password" />
            </div>
            <button>Continue</button>
            <p className="login-signup-login">
              Don't have an account?{" "}
              <span onClick={toggleForm}>Sign up here</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
