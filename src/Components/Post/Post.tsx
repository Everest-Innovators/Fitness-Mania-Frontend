import React from "react";
import TimeAgo from "javascript-time-ago";
import threedotsPng from "../../Assets/threedots.png";

//timeAgo
import en from "javascript-time-ago/locale/en";
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

interface Props {
  avatar: string;
  username: string;
  timestamp: number;
  title: string;
  body: string;
  upvotes: number;
  comments: number;
  postId: number;
}

const Post = (props: Props) => {
  return (
    <div className="post">
      <div className="top">
        <div className="left">
          <img src={props.avatar} alt="Avatar" />
          <div className="username">{props.username}</div>
          <div className="time">{timeAgo.format(props.timestamp)}</div>
        </div>
        <img src={threedotsPng} alt="Dots" />
      </div>
      <div className="title">{props.title}</div>
      <div className="desc">
        {props.body.slice(0, 300)}
        {props.body.length > 300 ? "..." : ""}
      </div>
    </div>
  );
};

export default Post;
