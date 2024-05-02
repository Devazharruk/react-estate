import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./form.scss";

function Form({ userType, onClose, setUser }) {
  const [password, setPassword] = useState(false);
  const handleLogin = ()=>{
    setUser(true);
    onClose();
  }
  
  return (
    <div className={userType ? "active formContainer" : "formContainer"}>
      <form action="">
        <h1 className="title">Welcome Back!</h1>
        <div className="inputBox">
          <label htmlFor="email">Email</label>
          <div className="input">
            <img src="/email.png" alt="" />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="inputBox">
          <label htmlFor="password">Password</label>
          <div className="input">
            <img src="/lock.png" alt="" />
            <input
              type={password ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter your password"
            />
            <i
              className={password ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}
              onClick={() => setPassword((prev) => !prev)}
            ></i>
          </div>
          <Link to="/" className="forgetPassword">
            Forget Password
          </Link>
        </div>
        <button type="submit" onClick={handleLogin} >
          Login
        </button>
      </form>
    </div>
  );
}
export default Form;
