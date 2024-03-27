import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../Screens/Home/Home";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
