import React, { useState } from "react";
import "./personalInfo.css";
import AddChat from "./addChat/AddChat";

const PersonalInfo = () => {

  const [showAddChat, setShowAddChat] = useState(false);

  const toggleAddChat = () => {
    setShowAddChat((prev) => !prev);
  };

  return (
    <div className="personalInfo">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>John Doe</h2>
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
