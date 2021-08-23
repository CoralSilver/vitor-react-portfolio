import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

export const Menu = () => {
  return (
    <section class="left-sidebar">
      <h1 class="logo text-left">
        <Link to="/">Vitor Paulo Teixeira <span>photography</span>
        </Link>
        </h1>
        <nav class="side-nav panel-group" id="accordion">
          <ul>
            <li><NavLink to="/product-photography">Product</NavLink></li>
            <li><NavLink to="/lifestyle">Lifestyle</NavLink></li>
            <li><NavLink to="/published-photos">Published</NavLink></li>
            <li><NavLink to="/retouching">Retouching</NavLink></li>
            <li><NavLink to="/bio">Biography</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      <div class="social-connect top-placement">
        <a href="https://www.linkedin.com/pub/vitor-paulo-teixeira/26/5/983" target="_blank"><i class="fa fa-2x fa-linkedin"></i></a>
        <a href="http://instagram.com/vitorpt" target="_blank"><i class="fa fa-2x fa-instagram"></i></a>
      </div>
    </section>
  )
};
