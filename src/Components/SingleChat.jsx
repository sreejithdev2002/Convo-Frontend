import React from "react";
import "../Pages/LogReg.css";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";

function SingleChat() {
  const messages = [
    {
      message: "Heyyy",
    },
    {
      message: "Hello",
    },
    {
      message: "How are you",
    },
    {
      message: "I am fine",
    },
    {
      message: "How about you",
    },
    {
      message: "Fine. Thanks",
    },
    {
      message: "Heyyy",
    },
    {
      message: "Hello",
    },
    {
      message: "How are you",
    },
    {
      message: "I am fine",
    },
    {
      message: "How about you",
    },
    {
      message: "Fine. Thanks",
    },
  ];

  return (
    <main className="h-[92vh] backgroundImage flex items-center justify-center">
      <div className="h-[80vh] w-[90%] flex flex-col">
        <div className="bg-gray-200 h-[6vh] flex items-center px-2 rounded-t-md">
          <Avatar
            sx={{ bgcolor: deepOrange[500], height: "30px", width: "30px" }}
            alt="Remy Sharp"
            src="/broken-image.jpg"
          >
            U
          </Avatar>
          <h2 className="text-xl mx-2">Username</h2>
        </div>
        <div className="bg-gray-300 h-[70vh] px-2 bg-opacity-80 overflow-y-auto">
          <ul>
            {messages.map((message) => (
              <li
                key={message.message}
                className="p-2 bg-green-100 rounded-e-3xl rounded-s-xl my-2 w-[30vw]"
              >
                <p>{message.message}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-200 h-[6vh] px-2 flex items-center justify-start rounded-b-md">
          <AttachFileIcon className="mx-2" />
          <input
            type="text"
            placeholder="Enter your message..."
            className="w-[80%] p-1 text-sm rounded-lg outline-none border-2 border-gray-300"
          />
        </div>
      </div>
    </main>
  );
}

export default SingleChat;
