import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Redirect back to login on logout
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to Home Page!</h1>
      <p>You have successfully logged in.</p>
      <button onClick={handleLogout} style={{ padding: "10px 20px", marginTop: "20px" }}>
        Logout
      </button>
    </div>
  );
};

export default Home;
