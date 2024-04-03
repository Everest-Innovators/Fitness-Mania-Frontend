import React from "react";
import imagePng from "../../Assets/image.png";
import "../../Css/Create/Create.css";

const Create = () => {
  return (
    <div className="create">
      <div className="container">
        <div className="title">Create a post</div>
        <input placeholder="Title" type="text" />
        <textarea placeholder="Description" />
        <div>
          <img src={imagePng} alt="Attach" />
          <button>Post</button>
        </div>
      </div>
    </div>
  );
};

export default Create;
