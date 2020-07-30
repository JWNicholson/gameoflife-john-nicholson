import React from "react";
import {
  BrowserRouter as Router,
  Route, 
} from "react-router-dom";

import Grid from "./components/Grid";
import Home from "./components/indexPage";

const App = () => {
  return ( 
    <Router>
        <Route exact path="/" component={Home}/>
        <Route path="/game" component={Grid} />
    </Router>
  );
};

export default App;
