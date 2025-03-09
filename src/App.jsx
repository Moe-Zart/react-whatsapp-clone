import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const user = false;

  return (
    <div className="container">
      {user ? (<><Sidebar /><Chat /></>) : (<Login />)}
    </div>
  );
}

export default App;
