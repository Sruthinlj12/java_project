import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar.jsx"; 
import MenuDrawer from "./MenuDrawer.jsx"; 
import "./Home.css"; 
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    navigate("/");
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const categories = [
    {
      title: "Trending Now",
      items: [
        { name: "Black Out", img: "/public/bo.jpg" },
        { name: "Carter", img: "/public/carter.jpg" },
        { name: "Justice League", img: "/public/jl.jpg" },
        { name: "Spiderman: No Way Home", img: "/public/ap.jpg" },
        { name: "Headshot", img: "/public/he.jpg" },
      ],
    },
    {
      title: "Watch It Again",
      items: [
        { name: "Yeh Jawaani Hai Deewani", img: "/public/yjhd.jpg" },
        { name: "The Shawshank Redemption", img: "/public/sr.jpg" },
        { name: "Interstellar", img: "/public/in.jpg" },
        { name: "Forrest Gump", img: "/public/fg.jpg" },
        { name: "Nadodikkattu", img: "/public/rh.jpg" },
      ],
    },
  ];

  const myListCategory = {
    title: "My List",
    items: [
      { name: "Like Stars On Earth", img: "/public/tz.jpg" },
      { name: "Forgotten", img: "/public/f.jpg" },
      { name: "Jurassic Park", img: "/public/jp.jpg" },
      { name: "The Pursuit of Happyness", img: "/public/ph.jpg" },
      { name: "La La Land", img: "/public/la.jpg" },
    ],
  };

  const newReleaseCategory = {
    title: "New Release",
    items: [
      { name: "Bad Boys: Ride or Die", img: "/public/obb.jpg" },
      { name: "Deadpool & Wolverine", img: "/public/dw.jpg" },
      { name: "Avengers: Endgame", img: "/public/ae.jpg" },
      { name: "Clouds", img: "/public/c.jpg" },
      { name: "The Professionals", img: "/public/tp.jpg" },
    ],
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async () => {
    if (!searchQuery.trim()) {
      alert("Please enter a movie name.");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:5000/recommend", {
        movie: searchQuery,
      });

      navigate("/recommendation", { state: { movies: response.data.recommendations } });
    } catch (error) {
      alert("Movie not found. Please try another title.");
    }
  };
  return (
    <div>
      {/* Search bar with menu toggle functionality */}
      <SearchBar onMenuClick={handleDrawerToggle} />
      <MenuDrawer mobileOpen={mobileOpen} onDrawerClose={handleDrawerToggle} />

      <div className="content-container">
        {categories.map((category, index) => (
          <div key={index} className="category-section">
            <h2 className="category-title">{category.title}</h2>
            <div className="grid-container">
              {category.items.map((item, i) => (
                <div
                  key={i}
                  className="box"
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <p className="box-title">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Search Field Above "My List" */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Enter movie name..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button className="search-button" onClick={handleSearchSubmit}>
            Show Recommendation
          </button>
        </div>

        {/* My List Section */}
        <div className="category-section">
          <h2 className="category-title">{myListCategory.title}</h2>
          <div className="grid-container">
            {myListCategory.items.map((item, i) => (
              <div
                key={i}
                className="box"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <p className="box-title">{item.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* New Release Section */}
        <div className="category-section">
          <h2 className="category-title">{newReleaseCategory.title}</h2>
          <div className="grid-container">
            {newReleaseCategory.items.map((item, i) => (
              <div
                key={i}
                className="box"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <p className="box-title">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
