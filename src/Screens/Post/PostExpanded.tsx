import React, { useEffect, useState } from "react";
import threedotsPng from "../../Assets/threedots.png";
import likePng from "../../Assets/like.png";
import dislikePng from "../../Assets/dislike.png";
import commentPng from "../../Assets/comment.png";
import sharePng from "../../Assets/share.png";
import backPng from "../../Assets/back.png";
import Avatar from "../../Assets/avatar.png";
import "../../Css/Post/PostExpanded.css";
import Comments, { CommentType } from "./Components/Comments";
import { timeAgo } from "../../Components/App";
import { useLocation, useNavigate } from "react-router-dom";
import { api_url } from "../../Utilities/Constants";
import { commentPost, reactPost } from "../../Utilities/Post";

interface PostData {
  username: string;
  timestamp: number;
  title: string;
  body: string;
  likes: number;
  dislikes: number;
  comments: number;
  post_id: number;
  likeClass: "like" | "liked";
  dislikeClass: "dislike" | "disliked";
}

const PostExpanded = () => {
  const [postData, setPostData] = useState<PostData>();
  const navigate = useNavigate();
  const location = useLocation();
  const [commentBottom, setCommentBottom] = useState<boolean>(false);
  const [commentContent, setCommentContent] = useState<string>("");
  const [comments, setComments] = useState<JSX.Element>(<Comments postId={0} comments={[]} level={1} />);

  useEffect(() => {
    let postID = location.pathname.split("/")[2];
    if (!postID || Number.isNaN(+postID)) navigate("/error");

    (async () => {
      //post data
      const res = await fetch(`${api_url}/getpost/${postID}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res.status !== 200) return navigate("/error");
      const resData = await res.json();
      //user data
      const userRes = await fetch(`${api_url}/getuser/${resData[1]}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const userData = await userRes.json();
      const id = localStorage.getItem("id");
      setPostData({
        body: resData[3],
        comments: resData[8] ? resData[8].length : 0,
        dislikes: resData[7] ? resData[7].length : 0,
        likes: resData[6] ? resData[6].length : 0,
        timestamp: new Date(resData[5]).getTime(),
        title: resData[2],
        username: userData[0],
        post_id: +postID,
        likeClass: resData[6] && resData[6].includes(+(id || "")) ? "liked" : "like",
        dislikeClass: resData[7] && resData[7].includes(+(id || "")) ? "disliked" : "dislike",
      });

      //comments data
      const comentsRes = await fetch(`${api_url}/getcomments/${postID}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let commentsData = await comentsRes.json();
      let group: Record<string, CommentType[]> = {
        main: [],
      };
      for (let i = 0; i < commentsData.length; i++) {
        const userRes = await fetch(`${api_url}/getuser/${commentsData[i][1]}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const userData = await userRes.json();
        if (!commentsData[i][3]) {
          group.main.push({
            author: { avatar: Avatar, username: userData[0] },
            body: commentsData[i][4],
            timestmap: new Date(commentsData[i][5]).getTime(),
            replies: [],
            id: commentsData[i][0],
          });
        } else {
          if (group[commentsData[i][3]]) {
            group[commentsData[i][3]].push({
              author: { avatar: Avatar, username: userData[0] },
              body: commentsData[i][4],
              timestmap: new Date(commentsData[i][5]).getTime(),
              replies: [],
              id: commentsData[i][0],
            });
          } else {
            group[commentsData[i][3]] = [
              {
                author: { avatar: Avatar, username: userData[0] },
                body: commentsData[i][4],
                timestmap: new Date(commentsData[i][5]).getTime(),
                replies: [],
                id: commentsData[i][0],
              },
            ];
          }
        }
      }
      let keys = Object.keys(group);
      for (let i = 0; i < keys.length; i++) {
        for (let j = 0; j < keys.length; j++) {
          for (let k = 0; k < group[keys[j]].length; k++) {
            if (keys[i] === group[keys[j]][k].id?.toString()) group[keys[j]][k].replies.push(...group[keys[i]]);
          }
        }
      }
      setComments(<Comments postId={+postID} comments={group.main} level={1} />);
    })();
  }, [location, navigate]);

  if (postData)
    return (
      <div className="postExpanded">
        <div className="postCont">
          <div className="top">
            <div className="left">
              <img
                onClick={() => {
                  navigate("/");
                }}
                src={backPng}
                alt="Back"
              />
              <img src={Avatar} alt="Avatar" />
              <div className="username">{postData.username}</div>
              <div className="time">{timeAgo.format(postData.timestamp, "mini")} ago</div>
            </div>
            <img src={threedotsPng} alt="Dots" />
          </div>
          <div className="title">{postData.title}</div>
          <div className="desc">{postData.body}</div>
          <div className="bottom">
            <div className="votes">
              <img
                onClick={async () => {
                  let ret = await reactPost(postData.post_id, "like");
                  if (!ret) navigate(`/register`);
                  else navigate(`/post/${postData.post_id}`);
                }}
                className={postData.likeClass}
                src={likePng}
                alt="Like"
              />
              <div style={{ marginRight: 8 }}>{postData.likes}</div>
              <img
                onClick={async () => {
                  let ret = await reactPost(postData.post_id, "dislike");
                  if (!ret) navigate(`/register`);
                  else navigate(`/post/${postData.post_id}`);
                }}
                className={postData.dislikeClass}
                src={dislikePng}
                alt="Dislike"
              />
              <div>{postData.dislikes}</div>
            </div>
            <div className="comment">
              <img src={commentPng} alt="Comment" />
              <div>{postData.comments}</div>
            </div>
            <div className="share">
              <img src={sharePng} alt="Share" />
              <div>Share</div>
            </div>
          </div>
        </div>
        <div className="addComment">
          <textarea
            value={commentContent}
            onChange={(e) => {
              setCommentContent(e.target.value);
            }}
            onClick={() => setCommentBottom(true)}
            className={!commentBottom ? "textarea1" : "textarea2"}
            placeholder="Add a comment"
          />
          {commentBottom ? (
            <div className="bottom">
              <button
                className="cancel"
                onClick={() => {
                  setCommentBottom(false);
                  setCommentContent("");
                }}
              >
                Cancel
              </button>
              <button
                onClick={async () => {
                  let ret = await commentPost(postData.post_id, commentContent);
                  setCommentContent("");
                  if (!ret) navigate(`/register`);
                  else navigate(`/post/${postData.post_id}`);
                }}
                className="comment"
              >
                Comment
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        {comments}
      </div>
    );
  else return <div>Loading</div>;
};

export default PostExpanded;
