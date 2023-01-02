import "./App.css";
import AuthenticationButton from "./components/AuthenticationButton";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <AuthenticationButton />
      <Profile />
    </div>
  );
}

export default App;
