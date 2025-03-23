import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar.jsx"; 
import MenuDrawer from "./MenuDrawer.jsx"; 
import "./Home.css"; 

const Home = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false); 

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
        { name: "Spiderman:No Way Home", img: "/public/ap.jpg" },
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
    {
      title: "New Release",
      items: [
        { name: "Bad Boys: Ride or Die", img: "/public/obb.jpg" },
        { name: "Deadpool & Wolverine", img: "/public/dw.jpg" },
        { name: "Avengers: Endgame", img: "/public/ae.jpg" },
        { name: "Clouds", img: "/public/c.jpg" },
        { name: "The Professionals", img: "/public/tp.jpg" },
      ],
    },
    {
      title: "Popular",
      items: [
        { name: "The Godfather", img: "/public/tg.jpg" },
        { name: "Schindler's List", img: "/public/sl.jpg" },
        { name: "Your Name.", img: "/public/yn.jpg" },
        { name: "Parasite", img: "/public/p.jpg" },
        { name: "The Dark Knight", img: "/public/dk.jpg" },
      ],
    },
    {
      title: "My List",
      items: [
        { name: "Like Stars On Earth", img: "/public/tz.jpg" },
        { name: "Forgotten", img: "/public/f.jpg" },
        { name: "Jurassic Park", img: "/public/jp.jpg" },
        { name: "The Pursuit of Happyness", img: "/public/ph.jpg" },
        { name: "La La Land", img: "/public/la.jpg" },
      ],
    },
  ];

  return (
    <div>
      {/* Search bar with menu toggle functionality */}
      <SearchBar onMenuClick={handleDrawerToggle} />
      
      {/* Menu Drawer */}
      <MenuDrawer mobileOpen={mobileOpen} onDrawerClose={handleDrawerToggle} />

      {/* Main content */}
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
      </div>
    </div>
  );
};

export default Home;
