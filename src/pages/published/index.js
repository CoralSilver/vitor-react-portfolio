import React from "react";
import { Copyright } from "../../components/copyright";
import "./published.scss";

export const Published = () => {
  return (
    <section className="right-section not-home-page">
      <div
        id="carousel-published-page"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="published-image">
            <img
              src="imgs/published/she-keeps-bees2.jpg"
              alt="She Keeps Bees"
            />
            <div className="carousel-caption">
              <em>She Keeps Bees</em> performing at <em>Baby's All Right</em>.
              Published on{" "}
              <a
                href="http://www.culturecrux.com/review-she-keeps-bees-at-babys-all-right/"
                target="_blank"
                rel="noreferrer"
              >
                Culture Crux
              </a>{" "}
              May 8, 2014
            </div>
          </div>
          <div className="published-image">
            <img src="imgs/published/she-keeps-bees.jpg" alt="She Keeps Bees" />
            <div className="carousel-caption">
              <em>She Keeps Bees</em> performing at <em>Baby's All Right</em>.
              Published on{" "}
              <a
                href="http://www.culturecrux.com/review-she-keeps-bees-at-babys-all-right/"
                target="_blank"
                rel="noreferrer"
              >
                Culture Crux
              </a>{" "}
              May 8, 2014
            </div>
          </div>
          <div className="published-image">
            <img src="imgs/published/teletextile.jpg" alt="Teletextile" />
            <div className="carousel-caption">
              <em>Teletextile</em> performing at <em>Baby's All Right</em>.
              Published on{" "}
              <a
                href="http://www.culturecrux.com/review-she-keeps-bees-at-babys-all-right/"
                target="_blank"
                rel="noreferrer"
              >
                Culture Crux
              </a>{" "}
              May 8, 2014
            </div>
          </div>
          <div className="published-image">
            <img src="imgs/published/music1.jpg" alt="DM Stith" />
            <div className="carousel-caption">
              <em>DM Stith</em> performing at <em>Baby's All Right</em>.
              Published on{" "}
              <a
                href="http://www.culturecrux.com/review-she-keeps-bees-at-babys-all-right/"
                target="_blank"
                rel="noreferrer"
              >
                Culture Crux
              </a>{" "}
              May 8, 2014
            </div>
          </div>
          <div className="published-image">
            <img src="imgs/published/dada.jpg" alt="Dada Bomb Festival NYC" />
            <div className="carousel-caption">
              <em>Dada Bomb Festival</em>. Published on{" "}
              <a
                href="http://www.culturecrux.com/dada-bomb-an-evening-of-artistic-absurity-on-the-lower-east-side/"
                target="_blank"
                rel="noreferrer"
              >
                Culture Crux
              </a>{" "}
              May 19, 2014
            </div>
          </div>
          <div className="published-image">
            <img src="imgs/published/dada1.jpg" alt="Dada Bomb Festival NYC" />
            <div className="carousel-caption">
              <em>Dada Bomb Festival</em>. Published on{" "}
              <a
                href="http://www.culturecrux.com/dada-bomb-an-evening-of-artistic-absurity-on-the-lower-east-side/"
                target="_blank"
                rel="noreferrer"
              >
                Culture Crux
              </a>{" "}
              May 19, 2014
            </div>
          </div>
          <div className="published-image">
            <img
              src="imgs/published/sculpture_after.jpg"
              alt="Kara Walker Sugar Baby Installation"
            />
            <div className="carousel-caption">
              Kara Walker's <em>Sugar Baby</em> Installation at the Domino Sugar
              Factory. Published on{" "}
              <a
                href="http://www.culturecrux.com/does-kara-walkers-a-subtlety-sugarcoat-a-bitter-history//"
                target="_blank"
                rel="noreferrer"
              >
                Culture Crux
              </a>{" "}
              May 21, 2014
            </div>
          </div>
        </div>
      </div>
      <Copyright />
    </section>
  );
};
