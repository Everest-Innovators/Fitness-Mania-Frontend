import React from "react";
import "../../Css/Layout/Nav.css";
import LogoImg from "../../Assets/logo.png";
import NotificationImg from "../../Assets/notification.png";
import PlusImg from "../../Assets/plus.png";
import SearchImg from "../../Assets/search.png";
import AvatarImg from "../../Assets/avatar.png";

const Nav = () => {
  return (
    <div className="nav">
      <div className="branding">
        <img alt="Logo" src={LogoImg} />
        <div className="logo">Fitness Mania</div>
      </div>
      <div className="search">
        <img alt="Search" src={SearchImg} />
        <input type="text" />
      </div>
      <div className="right">
        <img alt="Create" src={PlusImg} />
        <img alt="Notifications" src={NotificationImg} />
        <img alt="Profile" src={AvatarImg} />
      </div>
    </div>
  );
};

export default Nav;
