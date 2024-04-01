import React from "react";
import "../../../Css/Post/Comments.css";
import threedotsPng from "../../../Assets/threedots.png";
import likePng from "../../../Assets/like.png";
import dislikePng from "../../../Assets/dislike.png";
import commentPng from "../../../Assets/comment.png";
import sharePng from "../../../Assets/share.png";
import backPng from "../../../Assets/back.png";
import Avatar from "../../../Assets/avatar.png";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

//timeAgo
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

interface Comment {
  author: {
    username: string;
    avatar: string;
  };
  timestmap: number;
  body: string;
  likes: number;
  dislikes: number;
  replies: Array<Comment>;
}

interface Props {
  comments: Array<Comment>;
  level: number;
}

interface CommentProps {
  author: {
    username: string;
    avatar: string;
  };
  timestmap: number;
  body: string;
  likes: number;
  dislikes: number;
  replies?: Array<Comment>;
}

const Comment = (props: CommentProps) => {
  return (
    <div className="comment">
      <div className="top">
        <img src={props.author.avatar} alt="Avatar" />
        <div className="username">@{props.author.username}</div>
        <div className="time">{timeAgo.format(props.timestmap, "mini")} ago</div>
      </div>
    </div>
  );
};

const Comments = (props: Props) => {
  return <div className="comments">{<Comment {...props.comments[0]} />}</div>;
};

export default Comments;
