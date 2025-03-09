import React from 'react';
import "./addChat.css";
const AddChat = () => {
    return (
        <div className="addChat">
        <form>
          <input type="text" placeholder="Username" name="username" />
          <button>Search</button>
        </form>
          <div className="user">
            <div className="info">
              <img src="./avatar.png" alt="" />
              <span>David Bragg</span>
            </div>
            <button>Add Chat</button>
          </div>
      </div>
    );
}

export default AddChat;
