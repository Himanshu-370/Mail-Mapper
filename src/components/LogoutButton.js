import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <button
      className="btn btn-primary"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log out
    </button>
  );
}

export default LogoutButton;
