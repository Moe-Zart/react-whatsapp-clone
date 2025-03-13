import React, { useState } from 'react';
import "./addChat.css";
import { useUserStore } from '../../../../lib/userStore';
import { arrayUnion, collection, doc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore';
import { db } from '../../../../lib/firebase';

const AddChat = () => {

  const [user, setUser] = useState(null);

  const { currentUser } = useUserStore();

  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");

      const userRef = collection(db, "users");

      const q = query(userRef, where("username", "==", username));

      const querySnapShot = await getDocs(q);

      if (!querySnapShot.empty) {
        setUser(querySnapShot.docs[0].data());
      }
  };
  const handleAdd = async () => {
    const chatRef = collection(db, "chats");
    const userChatsRef = collection(db, "userchats");

    try {
      const newChatRef = doc(chatRef);

      await setDoc(newChatRef, {
        createdAt: serverTimestamp(),
        messages: [],
      });

      await updateDoc(doc(userChatsRef, user.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          avatar: currentUser.avatar,
          username: currentUser.username,
          receiverId: currentUser.id,
          updatedAt: Date.now(),
        }),
      });

      await updateDoc(doc(userChatsRef, currentUser.id), {
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage: "",
          avatar: user.avatar,
          username: user.username,
          receiverId: user.id,
          updatedAt: Date.now(),
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };
    return (
        <div className="addChat">
        <form onSubmit={handleSearch}>
          <input type="text" placeholder="Username" name="username" />
          <button>Search</button>
        </form>
        {user && (

          <div className="user">
            <div className="info">
              <img src={user.avatar ||"./avatar.png"} alt="" />
              <span>{user.username}</span>
            </div>
            <button onClick={handleAdd}>Add Chat</button>
          </div>
          )}
      </div>
    );
}

export default AddChat;
