import React, { useEffect, useState } from "react";
import profileImage from "../Assets/Images/profile.jpg";
import "../Pages/LogReg.css";
import { userStatusApi } from "../Services/userApi";

function Profile() {
  const [username, setUsername] = useState();

  const fetchData = async () => {
    try {
      const { user } = await userStatusApi();
      if (user) {
        setUsername(user.username);
      }
    } catch (error) {
      console.error("Error fetching user status api")
    }
  };

  useEffect(() => {
    fetchData();
  }, [username]);
  return (
    <main className="p-10 h-[92vh] flex justify-center items-center backgroundImage">
      <div className="bg-gray-200 p-10 flex flex-col items-center rounded-md bg-opacity-90">
        <img src={profileImage} alt="" className="mb-2 h-28 w-28 rounded-full" />
        <h1 className="text-center text-xl font-semibold">{username}</h1>
        <hr className="h-[2px] w-[100%] bg-gray-400 my-1" />
        <h3 className="m-2">Edit Profile</h3>
        <input
          type="text"
          className="m-1 rounded-md text-sm px-2 py-1 outline-none border-2 border-gray-300 focus:border-gray-500 focus:transition duration-300"
          placeholder="Edit your name"
        />
        <input
          type="text"
          className="m-1 rounded-md text-sm px-2 py-1 outline-none border-2 border-gray-300 focus:border-gray-500 focus:transition duration-300"
          placeholder="Edit your phone number"
        />
        <input
          type="password"
          className="m-1 rounded-md text-sm px-2 py-1 outline-none border-2 border-gray-300 focus:border-gray-500 focus:transition duration-300"
          placeholder="Edit your password"
        />
        <button className="p-2 mt-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">Save Changes</button>
      </div>
    </main>
  );
}

export default Profile;
