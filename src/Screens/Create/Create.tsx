import React, { useEffect, useState } from "react";
import imagePng from "../../Assets/image.png";
import "../../Css/Create/Create.css";
import { NavigateFunction, useNavigate } from "react-router-dom";
import ValidUser from "../../Utilities/ValidUser";
import { api_url } from "../../Utilities/Constants";

const Create = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    (async () => {
      let status = await ValidUser();
      if (!status) navigate("/register");
    })();
  }, [navigate]);

  const onSubmit = async () => {
    let id = window.localStorage.getItem("id");
    let password = window.localStorage.getItem("password");

    if (!id || !password) return navigate("/register");
    const res = await fetch(`${api_url}/post`, {
      method: "POST",
      body: JSON.stringify({
        id,
        password,
        title,
        body: description,
      }),
      headers: {
        "Content-Type": "application.json",
      },
    });
    let resData = await res.json();
    console.log(resData);
    if (res.status === 401) return navigate("/register");
    if (res.status === 200) {
      console.log("Post created successfully");
    }
  };
  return (
    <div className="create">
      <div className="container">
        <div className="title">Create a post</div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" type="text" />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <div>
          <img src={imagePng} alt="Attach" />
          <button onClick={onSubmit}>Post</button>
        </div>
      </div>
    </div>
  );
};

export default Create;
