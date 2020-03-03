import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import Home from "./home/Home";
import Navbar from "./layout/Navbar";
import Favs from "./favs/Favs";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/favs" component={Favs} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
