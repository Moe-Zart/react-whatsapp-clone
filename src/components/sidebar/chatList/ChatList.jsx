import React, { useEffect, useState } from "react";
import "./chatList.css";
import { useUserStore } from "../../../lib/userStore";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";

const ChatList = () => {
  const [chats,setChats] = useState([]);
  const {currentUser} = useUserStore();

  useEffect(()=> {
    const unSub = onSnapshot(doc(db, "userchats", currentUser.id), (doc) => {
      setChats(doc.data().chats.sort((a,b)=>b.updatedAt - a.updatedAt));
  });

  return()=>{
    unSub();
  }
},[currentUser.id]);
  return (
    <div className="chatList">
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      {chats.map(chat=>(
        <div className="chatUser"key={chat.chatID}>
        <img src={chat.avatar || "./avatar.png"} alt="" />
        <div className="lastMessage">
            <span>{chat.username}</span>
            <p>{chat.lastMessage}</p>
        </div>
      </div>
      ))}
    </div>
  );
};

export default ChatList;
