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
