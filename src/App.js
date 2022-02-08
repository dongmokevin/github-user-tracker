import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.css";
import "./styles.css";

import Header from "./components/Header";
import Search from "./components/Search";
import Profile from "./components/Profile";

export default function App() {
  return (
    <Router>
      <div className="container">
        <Header/>
        <Routes>
          <Route exact path="/" element={<Search />}>

          </Route>
          <Route path="/user/:username" element={<Profile />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
