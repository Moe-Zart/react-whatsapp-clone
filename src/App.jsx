import { onAuthStateChanged } from "firebase/auth";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import Sidebar from "./components/sidebar/Sidebar";
import { useEffect } from "react";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";

function App() {
  const { currentUser, fetchUserInfo} = useUserStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid)
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  console.log(currentUser)
  return (
    <div className="container">
      {currentUser ? (<><Sidebar /><Chat /></>) : (<Login />)}
      <Notification/>
    </div>
  );
}

export default App;
