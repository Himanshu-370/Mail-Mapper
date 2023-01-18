import "./App.css";
import AuthenticationButton from "./components/AuthenticationButton";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import Profile from "./components/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="bg-red"></div>
        <main>
          <div className="container">
            <NavBar />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Profile />
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
