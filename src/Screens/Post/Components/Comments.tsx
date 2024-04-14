import React, { useState } from "react";
import "../../../Css/Post/Comments.css";
import commentPng from "../../../Assets/comment.png";
import plusPng from "../../../Assets/plus.png";
import minusPng from "../../../Assets/minus.png";
import { timeAgo } from "../../../Components/App";
import { commentPost } from "../../../Utilities/Post";
import { useNavigate } from "react-router-dom";

export interface CommentType {
  author: {
    username: string;
    avatar: string;
  };
  timestmap: number;
  body: string;
  replies: Array<CommentType>;
  id?: number;
}

interface Props {
  comments: Array<CommentType>;
  level: number;
  postId: number;
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
  postId: number;
  id?: number;
}

const Comment = (props: CommentProps) => {
  const navigate = useNavigate();
  const [displayReplies, setDisplayReplies] = useState<boolean>(false);
  const [expand, setExpand] = useState<boolean>(false);
  const [commentContent, setCommentContent] = useState<string>("");
  console.log(props.replies);

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
          <div onClick={() => setExpand(!expand)} className="comment">
            <img src={commentPng} alt="Comment" />
            <div>Reply</div>
          </div>
        )}
      </div>
      {expand ? (
        <div className="addComment">
          <textarea
            value={commentContent}
            onChange={(e) => {
              setCommentContent(e.target.value);
            }}
            className={"textarea2"}
            placeholder="Add a comment"
          />
          <div className="bottom">
            <button
              className="cancel"
              onClick={() => {
                setExpand(false);
                setCommentContent("");
              }}
            >
              Cancel
            </button>
            <button
              onClick={async () => {
                let ret = await commentPost(props.postId, commentContent, props.id);
                setCommentContent("");
                if (!ret) navigate(`/register`);
                else navigate(`/post/${props.postId}`);
              }}
              className="comment"
            >
              Comment
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
      {displayReplies && props.replies && props.replies.length > 0 ? <Comments postId={props.postId} comments={props.replies} level={props.level + 1} /> : ""}
    </div>
  );
};

const Comments = (props: Props) => {
  let comments = [];
  for (let i = 0; i < props.comments.length; i++) {
    comments.push(<Comment id={props.comments[i].id} postId={props.postId} key={i} {...props.comments[i]} level={props.level} />);
  }
  return <div className="comments">{comments}</div>;
};

export default Comments;
