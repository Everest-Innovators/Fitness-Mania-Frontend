import React, { useEffect, useState } from "react";
import threedotsPng from "../../Assets/threedots.png";
import likePng from "../../Assets/like.png";
import dislikePng from "../../Assets/dislike.png";
import commentPng from "../../Assets/comment.png";
import sharePng from "../../Assets/share.png";
import backPng from "../../Assets/back.png";
import Avatar from "../../Assets/avatar.png";
import "../../Css/Post/PostExpanded.css";
import Comments from "./Components/Comments";
import { timeAgo } from "../../Components/App";
import { useLocation, useNavigate } from "react-router-dom";

const PostExpanded = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    let postID = location.pathname.split("/")[2];
    if (!postID || Number.isNaN(+postID)) navigate("/error");
  }, [location, navigate]);
  const [commentBottom, setCommentBottom] = useState<boolean>(false);
  const [commentContent, setCommentContent] = useState<string>("");
  return (
    <div className="postExpanded">
      <div className="postCont">
        <div className="top">
          <div className="left">
            <img src={backPng} alt="Back" />
            <img src={Avatar} alt="Avatar" />
            <div className="username">@new__</div>
            <div className="time">{timeAgo.format(Date.now(), "mini")} ago</div>
          </div>
          <img src={threedotsPng} alt="Dots" />
        </div>
        <div className="title">[AskJS] Coding a webpage button that redirects to a random URL (read body text)</div>
        <div className="desc">
          Hello. I'm working on a Neocities website and I want to create a button that redirects the user to a random web URL when clicked (purely for fun). But here's the problem:
          even after following several guides I discovered on places like Quora and Stack Overflow, my code still doesn't seem to work at all — I've followed several different
          scripts I found online to no avail, and my button just redirects to a text page of the Javascript itself (image of both code strings here, issue lies within line 97). I
          also checked through the rest of my website's code and couldn't find any sort of conflicting elements, so the issue probably lies within the way in which I formatted the
          "MysteryLink" JavaScript (or the HREF string itself). I'm wondering if anyone here can guide me towards a working method of fixing this, or provide an alternative method
          for achieving the effect entirely. Any an all suggestions will be appreciated, thank you all in advance for your time.
        </div>
        <div className="bottom">
          <div className="votes">
            <img className="like" src={likePng} alt="Like" />
            <div style={{ marginRight: 8 }}>15</div>
            <img className="dislike" src={dislikePng} alt="Dislike" />
            <div>4</div>
          </div>
          <div className="comment">
            <img src={commentPng} alt="Comment" />
            <div>2</div>
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
            <button className="comment">Comment</button>
          </div>
        ) : (
          ""
        )}
      </div>
      <Comments
        level={1}
        comments={[
          {
            author: { avatar: Avatar, username: "new__" },
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            likes: 10,
            dislikes: 20,
            timestmap: Date.now() - 100000,
            replies: [
              {
                author: { avatar: Avatar, username: "new__" },
                body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                likes: 10,
                dislikes: 20,
                timestmap: Date.now() - 100000,
                replies: [],
              },
              {
                author: { avatar: Avatar, username: "new__" },
                body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                likes: 10,
                dislikes: 20,
                timestmap: Date.now() - 100000,
                replies: [
                  {
                    author: { avatar: Avatar, username: "new__" },
                    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                    likes: 10,
                    dislikes: 20,
                    timestmap: Date.now() - 100000,
                    replies: [
                      {
                        author: { avatar: Avatar, username: "new__" },
                        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                        likes: 10,
                        dislikes: 20,
                        timestmap: Date.now() - 100000,
                        replies: [],
                      },
                      {
                        author: { avatar: Avatar, username: "new__" },
                        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                        likes: 10,
                        dislikes: 20,
                        timestmap: Date.now() - 100000,
                        replies: [
                          {
                            author: { avatar: Avatar, username: "new__" },
                            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                            likes: 10,
                            dislikes: 20,
                            timestmap: Date.now() - 100000,
                            replies: [
                              {
                                author: { avatar: Avatar, username: "new__" },
                                body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                                likes: 10,
                                dislikes: 20,
                                timestmap: Date.now() - 100000,
                                replies: [],
                              },
                            ],
                          },
                          {
                            author: { avatar: Avatar, username: "new__" },
                            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                            likes: 10,
                            dislikes: 20,
                            timestmap: Date.now() - 100000,
                            replies: [],
                          },
                        ],
                      },
                      {
                        author: { avatar: Avatar, username: "new__" },
                        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                        likes: 10,
                        dislikes: 20,
                        timestmap: Date.now() - 100000,
                        replies: [],
                      },
                      {
                        author: { avatar: Avatar, username: "new__" },
                        body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                        likes: 10,
                        dislikes: 20,
                        timestmap: Date.now() - 100000,
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            author: { avatar: Avatar, username: "new__" },
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            likes: 10,
            dislikes: 20,
            timestmap: Date.now() - 100000,
            replies: [
              {
                author: { avatar: Avatar, username: "new__" },
                body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                likes: 10,
                dislikes: 20,
                timestmap: Date.now() - 100000,
                replies: [],
              },
            ],
          },
          {
            author: { avatar: Avatar, username: "new__" },
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            likes: 10,
            dislikes: 20,
            timestmap: Date.now() - 100000,
            replies: [],
          },
          {
            author: { avatar: Avatar, username: "new__" },
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            likes: 10,
            dislikes: 20,
            timestmap: Date.now() - 100000,
            replies: [],
          },
          {
            author: { avatar: Avatar, username: "new__" },
            body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            likes: 10,
            dislikes: 20,
            timestmap: Date.now() - 100000,
            replies: [
              {
                author: { avatar: Avatar, username: "new__" },
                body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                likes: 10,
                dislikes: 20,
                timestmap: Date.now() - 100000,
                replies: [],
              },
              {
                author: { avatar: Avatar, username: "new__" },
                body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
                likes: 10,
                dislikes: 20,
                timestmap: Date.now() - 100000,
                replies: [],
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default PostExpanded;
