import React from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import threedotsPng from "../../Assets/threedots.png";
import likePng from "../../Assets/like.png";
import dislikePng from "../../Assets/dislike.png";
import commentPng from "../../Assets/comment.png";
import sharePng from "../../Assets/share.png";
import "../../Css/Post/Post.css";
import { Link } from "react-router-dom";

//timeAgo
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

interface Props {
  avatar: string;
  username: string;
  timestamp: number;
  title: string;
  body: string;
  like: number;
  dislike: number;
  comments: number;
  postId: number;
}

const Post = (props: Props) => {
  return (
    <Link to={`/post/${props.postId}`} className="post">
      <div className="postCont">
        <div className="top">
          <div className="left">
            <img src={props.avatar} alt="Avatar" />
            <div className="username">@{props.username}</div>
            <div className="time">{timeAgo.format(Date.now(), "mini")} ago</div>
          </div>
          <img src={threedotsPng} alt="Dots" />
        </div>
        <div className="title">{props.title}</div>
        <div className="desc">
          {props.body.slice(0, 750)}
          {props.body.length > 750 ? "..." : ""}
        </div>
        <div className="bottom">
          <div className="votes">
            <img className="like" src={likePng} alt="Like" />
            <div style={{ marginRight: 8 }}>{props.like}</div>
            <img className="dislike" src={dislikePng} alt="Dislike" />
            <div>{props.dislike}</div>
          </div>
          <div className="comment">
            <img src={commentPng} alt="Comment" />
            <div>{props.comments}</div>
          </div>
          <div className="share">
            <img src={sharePng} alt="Share" />
            <div>Share</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Post;
