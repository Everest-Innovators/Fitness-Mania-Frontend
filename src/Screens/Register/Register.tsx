import React from "react";
import WomenImg from "../../Assets/women.png";
import LogoImg from "../../Assets/logo.png";

const Register = () => {
  return (
    <div className="register">
      <div className="left">
        <div className="branding">
          <img alt="Logo" src={LogoImg} />
          <div className="logo">Something</div>
        </div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="displayName">Display Name</label>
        <input type="text" id="displayName" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <img alt="Strong Women" src={WomenImg} />
    </div>
  );
};

export default Register;
