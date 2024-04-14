import React from "react";
import "../../Css/Layout/Nav.css";
import LogoImg from "../../Assets/logo.png";
import PlusImg from "../../Assets/plus.png";
import SearchImg from "../../Assets/search.png";
import AvatarImg from "../../Assets/avatar.png";
import { NavigateFunction, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate: NavigateFunction = useNavigate();

  return (
    <div className="nav">
      <div style={{ cursor: "pointer" }} onClick={() => navigate("/")} className="branding">
        <img alt="Logo" src={LogoImg} />
        <div className="logo">Fitness Mania</div>
      </div>
      <div className="search">
        <img alt="Search" src={SearchImg} />
        <input placeholder="Search" type="text" />
        <div />
      </div>
      <div className="right">
        <img onClick={() => navigate("/create")} alt="Create" src={PlusImg} />
        <img className="pfp" alt="Profile" src={AvatarImg} />
        <div />
      </div>
    </div>
  );
};

export default Nav;
