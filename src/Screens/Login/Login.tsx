import React from "react";
import WomenImg from "../../Assets/women.png";
import LogoImg from "../../Assets/logo.png";
import "../../Css/Register/register.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="register">
      <div className="left">
        <div className="already">
          Don't have an account?{" "}
          <Link className="link" to={"/register"}>
            Sign up
          </Link>
        </div>
        <button>Login</button>
        <input placeholder="Password" type="password" id="password" />
        <label className="registerLabel" htmlFor="password">
          Password
        </label>
        <input placeholder="Email" type="email" id="email" />
        <label className="registerLabel" htmlFor="email">
          Email
        </label>
        <div className="branding">
          <img alt="Logo" src={LogoImg} />
          <div className="logo">Fitness Mania</div>
        </div>
      </div>
      <img alt="Strong Women" src={WomenImg} />
    </div>
  );
};

export default Login;
