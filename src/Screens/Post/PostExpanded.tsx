import React from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import threedotsPng from "../../Assets/threedots.png";
import likePng from "../../Assets/like.png";
import dislikePng from "../../Assets/dislike.png";
import commentPng from "../../Assets/comment.png";
import sharePng from "../../Assets/share.png";
import backPng from "../../Assets/back.png";
import Avatar from "../../Assets/avatar.png";
import "../../Css/Post/PostExpanded.css";

//timeAgo
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

const PostExpanded = () => {
  return (
    <div className="postExpanded">
      <div className="postCont">
        <div className="top">
          <div className="left">
            <img src={backPng} alt="Back" />
            <img src={Avatar} alt="Avatar" />
            <div className="username">@new__</div>
            <div className="time">{timeAgo.format(Date.now() - 100000)}</div>
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
    </div>
  );
};

export default PostExpanded;
// import React from "react";
// import TimeAgo from "javascript-time-ago";
// import threedotsPng from "../../Assets/threedots.png";
// import likePng from "../../Assets/like.png";
// import dislikePng from "../../Assets/dislike.png";
// import commentPng from "../../Assets/comment.png";
// import sharePng from "../../Assets/share.png";
// import "../../Css/Post/Post.css";

// //timeAgo
// import en from "javascript-time-ago/locale/en";
// import { Link } from "react-router-dom";
// TimeAgo.addDefaultLocale(en);
// const timeAgo = new TimeAgo("en-US");

// interface Props {
//   avatar: string;
//   username: string;
//   timestamp: number;
//   title: string;
//   body: string;
//   like: number;
//   dislike: number;
//   comments: number;
//   postId: number;
// }

// const Post = (props: Props) => {
//   return (
//     <Link to={`/post/${props.postId}`} className="post">
//       <div className="postCont">
// <div className="top">
//   <div className="left">
//     <img src={props.avatar} alt="Avatar" />
//     <div className="username">@{props.username}</div>
//     <div className="time">{timeAgo.format(props.timestamp)}</div>
//   </div>
//   <img src={threedotsPng} alt="Dots" />
// </div>
// <div className="title">{props.title}</div>
// <div className="desc">
//   {props.body.slice(0, 750)}
//   {props.body.length > 750 ? "..." : ""}
// </div>
// <div className="bottom">
//   <div className="votes">
//     <img className="like" src={likePng} alt="Like" />
//     <div style={{ marginRight: 8 }}>{props.like}</div>
//     <img className="dislike" src={dislikePng} alt="Dislike" />
//     <div>{props.dislike}</div>
//   </div>
//   <div className="comment">
//     <img src={commentPng} alt="Comment" />
//     <div>{props.comments}</div>
//   </div>
//   <div className="share">
//     <img src={sharePng} alt="Share" />
//     <div>Share</div>
//   </div>
// </div>
//       </div>
//     </Link>
//   );
// };

// export default Post;
