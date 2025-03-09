import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const user = true;

  return (
    <div className="container">
      {user ? (<><Sidebar /><Chat /></>) : (<Login />)}
      <Notification/>
    </div>
  );
}

export default App;
