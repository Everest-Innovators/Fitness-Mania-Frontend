import { api_url } from "./Constants";

export default async function ValidUser(): Promise<boolean> {
  let id = window.localStorage.getItem("id");
  let password = window.localStorage.getItem("password");

  if (!id || !password) return false;

  const res = await fetch(`${api_url}/validuser`, {
    method: "POST",
    body: JSON.stringify({
      id,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.status !== 200) return false;

  return true;
}
