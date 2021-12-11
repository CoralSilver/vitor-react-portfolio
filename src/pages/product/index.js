import React from "react";
import { Copyright } from "../../components/copyright";

export const Product = () => {
  return (
    <section className="right-section not-home-page">
      <div className="flex-container">
        <div className="item">
            <img src="imgs/product/Shiseido.jpg" alt="Shiseido lipstick"/>
        </div>
        <div className="item">
            <img src="imgs/product/Erno-Laszlo.jpg" alt="Erno Laszlo makeup"/>
        </div>
        <div className="item">
            <img src="imgs/product/blush.jpg" alt="blush"/>
        </div>
        <div className="item">
            <img src="imgs/product/eyeshadow.jpg" alt="eyeshadow"/>
        </div>
        <div className="item">
            <img src="imgs/product/SonyXColor.jpg" alt="Sony cell phone"/>
        </div>
        <div className="item">
            <img src="imgs/product/sunglasses.jpg" alt="sunglasses"/>
        </div>
        <div className="item">
            <img src="imgs/product/bobby.jpg" alt="Bobby Brown pencils"/>
        </div>
        <div className="item">
            <img src="imgs/product/TwoNike.jpg" alt="Nike shoes"/>
        </div>
        <div className="item">
            <img src="imgs/product/Kenneth-Cole-shoes.jpg" alt="Kenneth Cole shoes"/>
            <img src="imgs/product/racket.jpg" alt="tennis racket"/>
        </div>
        <div className="item">
            <img src="imgs/product/EBuds.png" alt="earpods"/>
        </div>

        <div className="item">
          <img src="imgs/product/Slide-watch.png" alt="watch"/>
        </div>
        <div className="item">
          <img src="imgs/product/coach-bag.jpg" alt="Coach purse"/>
          <img src="imgs/product/Joice-spray.jpg" alt="Joice-spray"/>
        </div>

        <div className="item">
          <img src="imgs/product/black-earbuds.jpg" alt="Kenneth Cole shoes"/>
          <img src="imgs/product/cellphones.jpg" alt="tennis racket"/>
        </div>
        <div className="item">
            <img src="imgs/product/camera.png" alt="earpods"/>
        </div>

      </div>
      <Copyright />
    </section>
  )
};
