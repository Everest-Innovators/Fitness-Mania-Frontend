import React, { useEffect, useState } from "react";
import Post from "../../Components/Post/Post";
import "../../Css/Home/Home.css";
import { api_url } from "../../Utilities/Constants";

const Home = () => {
  const [posts, setPosts] = useState<Array<JSX.Element>>([]);
  useEffect(() => {
    (async () => {
      const userId = localStorage.getItem("id");
      const res = await fetch(`${api_url}/latest`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let resData = await res.json();
      let tempPost = [];
      for (let i = 0; i < resData.length; i++) {
        tempPost.push(
          <Post
            key={i}
            userid={resData[i][1]}
            timestamp={new Date(resData[i][5]).getTime()}
            body={resData[i][3]}
            comments={resData[i][8] ? resData[i][8].length : 0}
            dislike={resData[i][7] ? resData[i][7].length : 0}
            like={resData[i][6] ? resData[i][6].length : 0}
            postId={resData[i][0]}
            title={resData[i][2]}
            likeClass={resData[i][6] && resData[i][6].includes(+(userId || "")) ? "liked" : "like"}
            dislikeClass={resData[i][7] && resData[i][7].includes(+(userId || "")) ? "disliked" : "dislike"}
          />
        );
      }
      setPosts(tempPost);
    })();
  }, []);
  return (
    <div className="home">
      <div className="posts">{posts}</div>
    </div>
  );
};

export default Home;
