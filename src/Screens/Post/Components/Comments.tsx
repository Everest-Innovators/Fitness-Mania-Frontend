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

interface CommentType {
  author: {
    username: string;
    avatar: string;
  };
  timestmap: number;
  body: string;
  likes: number;
  dislikes: number;
  replies: Array<CommentType>;
}

interface Props {
  comments: Array<CommentType>;
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
  replies?: Array<CommentType>;
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
  let comments = [];
  for (let i = 0; i < props.comments.length; i++) {
    comments.push(<Comment {...props.comments[0]} level={1} />);
  }
  return <div className="comments">{comments}</div>;
};

export default Comments;
