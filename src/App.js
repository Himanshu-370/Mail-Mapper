import "./App.css";
import AuthenticationButton from "./components/AuthenticationButton";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <div className="bg-red"></div>
      <main>
        <div className="container">
          <NavBar />
          <Hero />
          <Profile />
        </div>
      </main>
    </div>
  );
}

export default App;
