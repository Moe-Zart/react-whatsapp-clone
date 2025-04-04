import React, {useState, useRef, useEffect } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import Details from "./details/Details";
import "./details/details.css"
import { db } from "../../lib/firebase";
import { useChatStore } from "../../lib/chatStore";
import { arrayUnion, doc, getDoc, onSnapshot, updateDoc } from "firebase/firestore";
import { useUserStore } from "../../lib/userStore";

const Chat = () => {
  const [popup, setPopup] = useState(false);
  const [text, setText] = useState("");
  const [showDetails, setShowDetails] = useState(false); // Toggle dropdown
  const [chat, setChat] = useState();

  const { currentUser } = useUserStore();
  const { chatId } = useChatStore();

  const endRef = useRef(null);

  useEffect(()=> {
    endRef.current?.scrollIntoView({behavior:"smooth"})
  })
  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", chatId), (res) => {
      setChat(res.data());
    });

    return () => {
      unSub();
    };
  }, [chatId]);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setPopup(false);
  };
  
    const handleSend = async () => {
      if (text === "") return;
    
      try {
        await updateDoc(doc(db, "chats", chatId), {
          messages: arrayUnion({
            senderId: currentUser.id,
            text,
            createdAt: new Date(),
          }),
        });
        const userChatsRef = doc(db, "userchats", currentUser.id);
        const userChatsSnapshot = await getDoc(userChatsRef);
        const userChatsData = userChatsSnapshot.data();
    
        const chatIndex = userChatsData.chats.findIndex(
          (c) => c.chatId === chatId
        );
    
        const receiverId = userChatsData.chats[chatIndex].receiverId;
    
        const userIDs = [currentUser.id, receiverId];
        userIDs.forEach(async (id) => {
          const userChatsRef = doc(db, "userchats", id);
          const userChatsSnapshot = await getDoc(userChatsRef);
  
          if (userChatsSnapshot.exists()) {
            const userChatsData = userChatsSnapshot.data();
  
            const chatIndex = userChatsData.chats.findIndex(
              (c) => c.chatId === chatId
            );
  
            userChatsData.chats[chatIndex].lastMessage = text;
            userChatsData.chats[chatIndex].updatedAt = Date.now();
  
            await updateDoc(userChatsRef, {
              chats: userChatsData.chats,
            });
          }
        });
      } catch (err) {
        console.log(err);
      } 
    };


  return (
    <div className="chat">
      <div className="top">
        <div className="selectedUser">
          <img src="./avatar.png" alt="" />
          <div className="bio">
            <span>David Bragg</span>
            <p>You are almost there!</p>
          </div>
        </div>
        <div className="topIcons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" onClick={() => setShowDetails((prev) => !prev)} // Toggle dropdown
            className="detailsIcon" alt="" />
        </div>
      </div>
      <div className={`detailsContainer scroll ${showDetails ? "show" : ""}`}>
        <Details />
      </div>
      <div className="center scroll">
      {chat?.messages?.map((message) => (
          <div className="message personal" key={message?.createdAt}>
            <div className="messageContent">
              {message.img && <img src={message.img.url} alt="" />}
              <p>{message.text}</p>
              {/* <span>{message.createdAt}</span>*/}
            </div>
          </div>
        ))}
        <div ref={endRef}></div>
      </div>

      <div className="bottom">
        <div className="bottomIcons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setPopup((prev) => !prev)}
          />
          <div className="picker">
            <EmojiPicker open={popup} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton" onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
