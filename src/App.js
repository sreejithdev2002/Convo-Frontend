import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import SingleChatPage from "./Pages/SingleChatPage";
import SearchUserPage from "./Pages/SearchUserPage";
import ProfilePage from "./Pages/ProfilePage";
import { Toaster } from "react-hot-toast";
import Error from "./Components/Error";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search-user" element={<SearchUserPage />} />
          <Route path="/single-chat" element={<SingleChatPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<Error/>}/>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
