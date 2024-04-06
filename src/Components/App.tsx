import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Screens/Home/Home";
import Layout from "./Layout/Layout";
import Register from "../Screens/Register/Register";
import Login from "../Screens/Login/Login";
import PostExpanded from "../Screens/Post/PostExpanded";
import Create from "../Screens/Create/Create";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import Error from "../Screens/Error/Error";

TimeAgo.addDefaultLocale(en);
export const timeAgo = new TimeAgo("en-US");

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/post/:id" element={<PostExpanded />} />
          <Route path="/post" element={<PostExpanded />} />
          <Route path="/create" element={<Create />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
