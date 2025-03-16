import React from "react";
import "./personalInfo.css";

const PersonalInfo = () => {
  return (
    <div className="personalInfo">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>John Doe</h2>
      </div>
      <div className="icons">
        <img src="./more.png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./newChat.png" alt="" />
      </div>
    </div>
  );
};

export default PersonalInfo;
