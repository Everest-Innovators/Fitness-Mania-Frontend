import React, { useState } from "react";
import "../../../Css/Post/Comments.css";
import likePng from "../../../Assets/like.png";
import dislikePng from "../../../Assets/dislike.png";
import commentPng from "../../../Assets/comment.png";
import plusPng from "../../../Assets/plus.png";
import minusPng from "../../../Assets/minus.png";
import { timeAgo } from "../../../Components/App";

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
        <div className="votes">
          <img className="like" src={likePng} alt="Like" />
          <div style={{ marginRight: 8 }}>{props.likes}</div>
          <img className="dislike" src={dislikePng} alt="Dislike" />
          <div>{props.dislikes}</div>
        </div>
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
