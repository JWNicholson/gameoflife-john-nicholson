import React from "react";
import { Link } from "react-router-dom";
import { Row,Col, } from 'reactstrap';
import HomePageStyle from "./styles/homepageStyles";
import Footer from './Footer'

const Home = () => {
  return (
    <div className="main-wrapper">
      <HomePageStyle>
        <div className="main">

        <h1>Conway's Game of Life</h1>
        <Row>
          <Col>
        <p>The Game Of Life is a simulation developed in 1970 by mathematician John Conway. It applies rules to create Cellular Automation. Cellular Automation is a grid of cells that cycle through different states. It is "Turing Complete" and fully reprogrammable to be used to execute any other computable function.</p>
        </Col>
        </Row>

        <Row>
          <Col>
        <p>The simulation follows 4 simple rules, which give infinite different results.</p> 
        <p>Sometimes it is a repeating sequence (somtimes referred to as a glider).</p> 
        <p>Occasionaly all of the cells die or settle into a still pattern.</p>
        </Col>
        </Row>

        <Row>
          <Col>
          <h2>
            <Link to="/game"><em>Play the game now!</em></Link>
          </h2>
          </Col>
        </Row> 
        </div>
       
      </HomePageStyle>
      <Footer />
    </div>
  );
};

export default Home;
