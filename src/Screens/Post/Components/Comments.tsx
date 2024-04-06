import React, { useState } from "react";
import "../../../Css/Post/Comments.css";
import commentPng from "../../../Assets/comment.png";
import plusPng from "../../../Assets/plus.png";
import minusPng from "../../../Assets/minus.png";
import { timeAgo } from "../../../Components/App";

export interface CommentType {
  author: {
    username: string;
    avatar: string;
  };
  timestmap: number;
  body: string;
  replies: Array<CommentType>;
}

interface Props {
  comments: Array<CommentType>;
  level: number;
}

export interface CommentProps {
  author: {
    username: string;
    avatar: string;
  };
  timestmap: number;
  body: string;
  replies?: Array<CommentType>;
  level: number;
}

const Comment = (props: CommentProps) => {
  const [displayReplies, setDisplayReplies] = useState<boolean>(false);
  return (
    <div className="comment" style={{ width: 725 - (props.level - 1) * 40 }}>
      <div className="top">
        <img src={props.author.avatar} alt="Avatar" />
        <div className="username">@{props.author.username}</div>
        <div className="time">{timeAgo.format(props.timestmap, "mini")} ago</div>
      </div>
      <div className="body">{props.body}</div>
      <div className="bottom">
        {props.level >= 4 || !props.replies || props.replies?.length === 0 ? (
          <span className="dummy" />
        ) : (
          <img onClick={() => setDisplayReplies(!displayReplies)} src={displayReplies ? minusPng : plusPng} alt="View Replies" />
        )}
        {props.level >= 4 ? (
          ""
        ) : (
          <div className="comment">
            <img src={commentPng} alt="Comment" />
            <div>Reply</div>
          </div>
        )}
      </div>
      {displayReplies && props.replies && props.replies.length > 0 ? <Comments comments={props.replies} level={props.level + 1} /> : ""}
    </div>
  );
};

const Comments = (props: Props) => {
  let comments = [];
  for (let i = 0; i < props.comments.length; i++) {
    comments.push(<Comment key={i} {...props.comments[i]} level={props.level} />);
  }
  return <div className="comments">{comments}</div>;
};

export default Comments;
