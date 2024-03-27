import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Screens/Home/Home";
import Layout from "./Layout/Layout";
import Register from "../Screens/Register/Register";
import Login from "../Screens/Login/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
