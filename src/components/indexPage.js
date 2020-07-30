import React from "react";
import { Link } from "react-router-dom";
import HomePageStyle from "./styles/homepageStyles";

const Home = () => {
  return (
    <div className="wrapper">
      <HomePageStyle>
        <h1>Conway's Game of Life</h1>
      <p>All about it and whatever needed to make MVP</p>
       
        <div className="main">
          <h2>
            <Link to="/game"><em>Play the game now!</em></Link>
          </h2>
          
        </div>
       
      </HomePageStyle>
    </div>
  );
};

export default Home;
