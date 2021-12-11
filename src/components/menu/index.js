import React, { useState } from "react";
import {
  Link,
  NavLink,
} from "react-router-dom";
import "./menu.scss";

export const Menu = () => {
  const [showMenu, toggleMenu] = useState(false);

  const handleToggleMenu = () => {
    toggleMenu(!showMenu);
  }

  return (
    <>
    <section className="left-sidebar">
      <Link to="/">
        <img
          src="imgs/vitor-logo.png"
          className="logo-image"
          alt="Vitor Paulo Teixeira logo - go to home page"
        />
      </Link>
      <a role="button" onClick={handleToggleMenu}>
        <h1 className="logo-text">
          Vitor P Teixeira <span>photography</span>
        </h1>
      </a>
      <nav className={showMenu && "hide-menu"}>
        <ul className="accordion-menu">
          <li>
            <NavLink to="/product-photography">Product</NavLink>
          </li>
          <li>
            <NavLink to="/lifestyle">Lifestyle</NavLink>
          </li>
          <li>
            <NavLink to="/published-photos">Published</NavLink>
          </li>
          <li>
            <NavLink to="/retouching">Retouching</NavLink>
          </li>
          <li>
            <NavLink to="/bio">Biography</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </section>
    </>
  );
};
