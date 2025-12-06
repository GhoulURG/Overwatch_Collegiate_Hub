import React from "react";

function Profile({ user }) {
  return (
    <div>
      <h2>Welcome, {user?.name || "User"}!</h2>
      <p>Email: {user?.email}</p>
    </div>
  );
}

export default Profile;
