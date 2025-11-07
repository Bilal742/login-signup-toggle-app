import React from "react";
import "./Login.css";

function Login({ toggleForm }) {
  return (
    <section id="home-container">
      <div id="home">
        <div className="bg-animate"></div>

        {/* Login Form */}
        <div className="form-box">
          <h2>Login</h2>
          <form action="">
            <div className="input-box">
              <label htmlFor="username">Username/Email address</label>
              <br />
              <input type="text" name="username" id="username" />
              <i className="bx bxs-user"></i>
            </div>

            <div className="input-box">
              <label htmlFor="password">Password</label>
              <br />
              <input type="password" name="password" id="password" />
              <i className="bx bxs-lock"></i>
            </div>

            <button className="btn" type="submit">Sign in</button>

            <div className="logreg-link">
              <a href="#">Forgot password?</a>
            </div>
          </form>
        </div>

        {/* Welcome Box */}
        <div className="form-box1 login">
          <h2>WELCOME BACK!</h2>
          <p>
            Lorem ipsum dolor sit
            <br />
            amet consectetur
            <br />
            adipisicing.
          </p>
          <button className="ntn" onClick={toggleForm}>Signup</button>
        </div>
      </div>
    </section>
  );
}

export default Login;

