import Chat from "./components/chat/Chat";
import ChatList from "./components/chatList/ChatList";

function App() {
  return (
    <div className="container">
      <ChatList/>
      <Chat/>
    </div>
  );
}

export default App;
