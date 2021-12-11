import React from "react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./socials.scss";

export const Socials = () => {
  return (
    <div className="social-connect">
      <a
        href="https://www.linkedin.com/pub/vitor-paulo-teixeira/26/5/983"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
      <a
        href="http://instagram.com/vitorpt"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram />
      </a>
    </div>
  );
};
