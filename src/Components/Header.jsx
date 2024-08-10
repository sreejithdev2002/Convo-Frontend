import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userStatusApi } from "../Services/userApi";

function Header() {
  const [userData, setUserData] = useState("");

  const fetchData = async () => {
    try {
      const { user } = await userStatusApi();
      console.log( user + " User console");
      if (user) {
        setUserData(user.username);
      } else {
        setUserData("");
        console.log("No user found")
      }
    } catch (error) {
      console.error("Error fetching user status : ", error);
      setUserData("");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/home");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    navigate("/login");
    setUserData("");
  }
  return (
    <nav className="flex items-center justify-between px-4 h-[8vh] bg-gray-100">
      <h1 className="text-2xl font-mono cursor-pointer" onClick={handleHome}>
        Convo
      </h1>
      <div className="flex">
        <h2 className="mx-3 text-lg cursor-pointer" onClick={handleProfile}>
          {userData}
        </h2>
        <button
        onClick={handleLogout}
         className="px-2 py-1 bg-red-500 text-white hover:bg-red-600 transition-colors duration-300 rounded-md text-sm">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Header;
