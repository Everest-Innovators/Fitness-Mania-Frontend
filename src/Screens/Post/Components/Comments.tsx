import React from "react";
import "../../../Css/Post/Comments.css";
import likePng from "../../../Assets/like.png";
import dislikePng from "../../../Assets/dislike.png";
import commentPng from "../../../Assets/comment.png";
import plusPng from "../../../Assets/plus.png";
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
  level: number;
}

const Comment = (props: CommentProps) => {
  return (
    <div className="comment" style={{ width: 750 - (props.level - 1) * 50 }}>
      <div className="top">
        <img src={props.author.avatar} alt="Avatar" />
        <div className="username">@{props.author.username}</div>
        <div className="time">{timeAgo.format(props.timestmap, "mini")} ago</div>
      </div>
      <div className="body">{props.body}</div>
      <div className="bottom">
        <img src={plusPng} alt="View Replies" />
        <div className="votes">
          <img className="like" src={likePng} alt="Like" />
          <div style={{ marginRight: 8 }}>{props.likes}</div>
          <img className="dislike" src={dislikePng} alt="Dislike" />
          <div>{props.dislikes}</div>
        </div>
        <div className="comment">
          <img src={commentPng} alt="Comment" />
          <div>Reply</div>
        </div>
      </div>
    </div>
  );
};

const Comments = (props: Props) => {
  return <div className="comments">{<Comment {...props.comments[0]} level={1} />}</div>;
};

export default Comments;
