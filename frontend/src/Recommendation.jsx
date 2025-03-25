import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Recommendation.css";

const Recommendation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movies = location.state?.movies || [];

  return (
    <div className="recommendations-container" >
      <h2>Recommended Movies</h2>
      {movies.length > 0 ? (
        <div className="grid-container">
          {movies.map((movie, index) => (
            <div key={index} className="box">
              <p className="box-title">{movie}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No recommendations available.</p>
      )}
      <button onClick={() => navigate("/home")}>Go Back</button>
    </div>
  );
};

export default Recommendation;
