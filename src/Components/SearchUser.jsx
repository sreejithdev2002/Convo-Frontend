import React from "react";
import "../Pages/LogReg.css";
import { useNavigate } from "react-router-dom";

function SearchUser() {
  const users = [
    {
      username: "Sreejith",
      phone: "8714401091",
    }
  ];

  const navigate = useNavigate();

  const handleStartChat = ()=> {
    navigate("/single-chat");
  }

  return (
    <main className="h-[92vh] backgroundImage flex justify-center">
      <div className="p-10 bg-gray-50 bg-opacity-80 w-[70%] h-[80%] mt-10 rounded-md flex flex-col items-center">
        <h1 className="text-2xl font-semibold">Search User</h1>
        <input
          type="text"
          className="p-2 w-[80%] mt-5 rounded-md border-2 border-gray-300 outline-none"
          placeholder="+91 9876543210"
        />
        <hr className="h-[3px] bg-gray-300 w-[100%] my-10" />
        <h1 className="text-2xl font-semibold">Users List</h1>
        <ul className="bg-gray-300 p-5 justify-start items-center rounded-md mt-5 w-[30%] bg-opacity-60">
          {users.map((user) => (
            <li key={user.username} className="cursor-pointer" onClick={handleStartChat}>
              <h2 className="text-2xl font-semibold text-gray-800">
                {user.username}
              </h2>
              <p className="text-sm text-gray-700">{user.phone}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default SearchUser;
