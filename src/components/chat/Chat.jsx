import React, {useState, useRef, useEffect } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import Details from "./details/Details";
import "./details/details.css"

const Chat = () => {
  const [popup, setPopup] = useState(false);
  const [text, setText] = useState("");
  const [showDetails, setShowDetails] = useState(false); // Toggle dropdown

  const endRef = useRef(null);

  useEffect(()=> {
    endRef.current?.scrollIntoView({behavior:"smooth"})
  })

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setPopup(false);
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
        <div className="message personal">
          <div className="messageContent">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="messageContent">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message personal">
          <div className="messageContent">
            <img src="https://frontendsimplified.com/_nuxt/img/platform.1d1619c.png" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <span>1 min ago</span>
          </div>
        </div>
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
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
