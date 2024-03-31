import React from "react";
import WomenImg from "../../Assets/women.png";
import LogoImg from "../../Assets/logo.png";
import "../../Css/Register/Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="register">
      <div className="left">
        <div className="already">
          Already have an account?{" "}
          <Link className="link" to={"/login"}>
            Sign in
          </Link>
        </div>
        <button>Register</button>
        <input placeholder="Password" type="password" id="password" />
        <label className="registerLabel" htmlFor="password">
          Password
        </label>
        <input placeholder="Email" type="email" id="email" />
        <label className="registerLabel" htmlFor="email">
          Email
        </label>
        <input placeholder="Display Name" type="text" id="displayName" />
        <label className="registerLabel" htmlFor="displayName">
          Display Name
        </label>
        <input placeholder="Username" type="text" id="username" />
        <label className="registerLabel" htmlFor="username">
          Username
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

export default Register;
