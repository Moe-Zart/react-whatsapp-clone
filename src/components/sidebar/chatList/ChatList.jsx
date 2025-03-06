import React from "react";
import "./chatList.css";

const ChatList = () => {
  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="chatUser">
        <img src="./avatar.png" alt="" />
        <div className="lastMessage">
            <span>David Bragg</span>
            <p>You are almost there!</p>
        </div>
      </div>
      <div className="chatUser">
        <img src="./avatar.png" alt="" />
        <div className="lastMessage">
            <span>David Bragg</span>
            <p>You are almost there!</p>
        </div>
      </div>
      <div className="chatUser">
        <img src="./avatar.png" alt="" />
        <div className="lastMessage">
            <span>David Bragg</span>
            <p>You are almost there!</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
