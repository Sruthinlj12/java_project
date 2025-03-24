import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
//import "./Recommendation.css";

const Recommendation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movies = location.state?.movies || [];

  return (
    <div className="recommendations-container">
      <h2>Recommended Movies</h2>
      {movies.length > 0 ? (
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </ul>
      ) : (
        <p>No recommendations available.</p>
      )}
      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
};

export default Recommendation;
