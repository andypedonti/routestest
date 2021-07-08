import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import  Navigation from "./Components/Navigation";
import  Home from "./Components/Home";
import  Contact from "./Components/Contact";
import  About from "./Components/About";
import  Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/contact" exact component={() => <Contact />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
