import React from "react";
import "../Pages/LogReg.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function ChatList() {
  const chats = [
    {
      username: "Sreejith",
      message: "Hello",
    },
    {
      username: "Sanjay",
      message: "Heey",
    },
    {
      username: "Ayush",
      message: "Enthokke",
    },
    {
      username: "Anumol",
      message: "Sugham thanne",
    },
  ];

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/single-chat");
  };

  const handleNewChat = () => {
    navigate("/search-user");
  };

  return (
    <div className="h-[92vh] backgroundImage">
      <ul className="p-10">
        {chats.map((chat) => (
          <li
            key={chat.username}
            onClick={handleNavigate}
            className="bg-gray-100 bg-opacity-60 my-2 px-2 py-1 rounded-md hover:scale-105 hover:bg-gray-100 transition duration-300 lg:w-[50vw] cursor-pointer shadow-sm shadow-gray-500"
          >
            <h2 className="text-xl font-semibold">{chat.username}</h2>
            <p className="text-sm text-gray-600">{chat.message}</p>
          </li>
        ))}
        {/* <button className="bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-md transition-colors duration-300">New Chat</button> */}
        <Button variant="contained" color="success" onClick={handleNewChat}>
          New Chat
        </Button>
      </ul>
    </div>
  );
}

export default ChatList;
