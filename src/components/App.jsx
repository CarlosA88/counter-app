import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./home/Home";
import Navbar from "./layout/Navbar";
import index from "./counter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/counter" component={index} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
