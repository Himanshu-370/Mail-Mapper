import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="detail">
        <h4 className="word-bg">{user.name}</h4>
        <p className="word-bg">{user.email}</p>
      </div>
    )
  );
}

export default Profile;
