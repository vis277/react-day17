import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import AboutDetails from "./Components/AboutDetails";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about/" element={<About></About>}></Route>
      <Route path="/about/:id" element={<AboutDetails></AboutDetails>}></Route>
      <Route
        path="/aboutDetails"
        element={<AboutDetails></AboutDetails>}
      ></Route>
    </Routes>
  </BrowserRouter>
);
