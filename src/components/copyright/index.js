import React from "react";
import "./copyright.scss";

export const Copyright = () => {
  return (
    <small class="text-right copyright">
      &copy;2014 - {new Date().getFullYear()} Vitor Teixeira. All Rights
      Reserved.
    </small>
  );
};
