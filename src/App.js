import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import logo from './logo.svg';

import './App.scss';

import { Menu } from "./components/menu";
import { Home } from "./pages/home";
import { Product } from "./pages/product";
import { LifeStyle } from "./pages/lifestyle";
import { Published } from "./pages/published";
import { Retouching } from "./pages/retouching";
import { Biography } from "./pages/biography";
import { Contact } from "./pages/contact";

function App() {

  return (
    <Router>
      {/* <div className={`${currentLocation === "/" ? "index-background" : null}`}> */}
      <Menu />
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product-photography">
            <Product />
          </Route>
          <Route path="/lifestyle">
            <LifeStyle />
          </Route>
          <Route path="/published-photos">
            <Published />
          </Route>
          <Route path="/retouching">
            <Retouching />
          </Route>
          <Route path="/bio">
            <Biography />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
