import React, { useState } from "react";
import "./personalInfo.css";
import AddChat from "./addChat/AddChat";
import { useUserStore } from "../../../lib/userStore";

const PersonalInfo = () => {

  const [showAddChat, setShowAddChat] = useState(false);
  const { currentUser } = useUserStore();

  const toggleAddChat = () => {
    setShowAddChat((prev) => !prev);
  };

  return (
    <div className="personalInfo">
      <div className="user">
        <img src={currentUser.avatar || "./avatar.png"} alt="" />
        <h2>{currentUser.username}</h2>
      </div>
      <div className="icons">
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" onClick={toggleAddChat} />
      </div>
      {showAddChat && <AddChat />}
    </div>
  );
};

export default PersonalInfo;
