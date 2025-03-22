import React from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar.jsx"; // Import the search bar

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div >
      {/* Include the search bar */}
      <SearchBar />      
      {/* Main content */}
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h1>Welcome to Home Page!</h1>
        <p>You have successfully logged in.</p>
      </div>
    </div>
  );
};

export default Home;
