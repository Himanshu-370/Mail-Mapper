import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Modal from "./Modal";
import Home from "./Home";

function Hero() {
  const { isAuthenticated } = useAuth0();

  return <>{isAuthenticated ? <Modal /> : <Home />}</>;
}

export default Hero;
