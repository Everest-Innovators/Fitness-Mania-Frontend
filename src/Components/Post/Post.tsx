import React from "react";

interface Props {
  avatar: string;
  username: string;
  timestamp: number;
  title: string;
  body: string;
  upvotes: number;
  comments: number;
  postId: number;
}

const Post = (props: Props) => {
  return <div className="post">Post</div>;
};

export default Post;
