import React, { useEffect, useState } from "react";
import imagePng from "../../Assets/image.png";
import "../../Css/Create/Create.css";
import { NavigateFunction, useNavigate } from "react-router-dom";
import ValidUser from "../../Utilities/ValidUser";

const Create = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const navigate: NavigateFunction = useNavigate();

  useEffect(() => {
    (async () => {
      let status = await ValidUser();
      if (!status) navigate("/login");
    })();
  }, [navigate]);

  const onSubmit = () => {};
  return (
    <div className="create">
      <div className="container">
        <div className="title">Create a post</div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" type="text" />
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <div>
          <img src={imagePng} alt="Attach" />
          <button>Post</button>
        </div>
      </div>
    </div>
  );
};

export default Create;
