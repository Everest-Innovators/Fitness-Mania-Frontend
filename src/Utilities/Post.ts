import { api_url } from "./Constants";

export const reactPost = async (postId: number, type: "like" | "dislike"): Promise<boolean> => {
  const id = window.localStorage.getItem("id");
  if (!id) return false;
  await fetch(`${api_url}/post/${postId}/${type}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
    }),
  });
  return true;
};

export const commentPost = async (post_id: number, body: string, parent_comment_id?: number): Promise<boolean> => {
  const id = window.localStorage.getItem("id");
  if (!id) return false;
  let data = parent_comment_id
    ? {
        id,
        post_id,
        body,
        parent_comment_id,
      }
    : {
        id,
        post_id,
        body,
      };
  await fetch(`${api_url}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return true;
};
