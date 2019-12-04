import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import "./App.css";
import Main from "./Pages/Main";
import Wrapper from "./components/Wrapper/index";
import SignIn from "./Pages/SignIn";
import FAQ from "./Pages/FAQ";
import Advice from "./Pages/Advice";
import Foods from "./Pages/Foods";
import RecipeApp from "./Pages/Recipe";
import Philosophy from "./Pages/Philosophy";





function App() {
  return (
    <Router>
      <div className="App">
        <AppBar />
          <Wrapper>
          <Route exact path="/" component={Main} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/advice" component={Advice} />
          <Route exact path="/foods" component={Foods} />
          <Route exact path="/recipes" component={RecipeApp} />
          <Route exact path="/philosophy" component={Philosophy} />
          </Wrapper>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
