import React, { useEffect, useState } from "react";
import WomenImg from "../../Assets/women.png";
import LogoImg from "../../Assets/logo.png";
import "../../Css/Register/Register.css";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import ValidUser from "../../Utilities/ValidUser";
import { api_url } from "../../Utilities/Constants";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    (async () => {
      let status = await ValidUser();
      if (status) navigate("/");
    })();
  }, [navigate]);

  const onSubmit = async () => {
    const res = await fetch(`${api_url}/login`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let resData = await res.json();
    if (res.status === 200) {
      window.localStorage.setItem("id", resData.id);
      window.localStorage.setItem("password", password);
      navigate("/");
    }
  };

  return (
    <div className="register">
      <div className="left">
        <div className="already">
          Don't have an account?{" "}
          <Link className="link" to={"/register"}>
            Sign up
          </Link>
        </div>
        <button onClick={onSubmit}>Login</button>
        <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" id="password" />
        <label className="registerLabel" htmlFor="password">
          Password
        </label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email" id="email" />
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
