import React from "react";
import imagePng from "../../Assets/image.png";

const Create = () => {
  return (
    <div className="create">
      <input type="text" />
      <textarea></textarea>
      <div>
        <img src={imagePng} alt="Attach" />
        <button>Post</button>
      </div>
    </div>
  );
};

export default Create;
