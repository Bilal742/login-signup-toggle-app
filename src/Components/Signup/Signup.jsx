import React from "react";

function Signup({ toggleForm }) {
  return (
    <section id="home-container">
      <div id="home">
        <div className="bg-animate"></div>

        {/* Signup Form */}
        <div className="form-box login">
          <h2>Sign Up</h2>
          <form action="#">
            <div className="input-box">
              <label htmlFor="username">Username</label>
              <br />
              <input type="text" name="username" id="username" />
              <i className="bx bxs-user"></i>
            </div>

            <div className="input-box">
              <label htmlFor="email">Email</label>
              <br />
              <input type="email" name="email" id="email" />
              <i className="bx bxs-envelope"></i>
            </div>

            <div className="input-box">
              <label htmlFor="password">Password</label>
              <br />
              <input type="password" name="password" id="password" />
              <i className="bx bxs-lock-alt"></i>
            </div>

            <button type="submit" className="btn">Sign Up</button>

            <div className="logreg-link">
              <p>
                Don't have an account? <a href="#">Login</a>
              </p>
            </div>
          </form>
        </div>

        {/* Welcome Message */}
        <div className="form-box1 login">
          <h2>WELCOME BACK!</h2>
          <p>
            Lorem ipsum dolor sit
            <br />
            amet consectetur
            <br />
            adipisicing.
          </p>
          <button className="ntn" onClick={toggleForm}>Login</button>
        </div>
      </div>
    </section>
  );
}

export default Signup;
