import React, { useState } from "react";
import { Copyright } from "../../components/copyright";
import { RetouchedImage } from "../../components/retouchedImage";
import "./retouching.scss";

export const Retouching = () => {
  const images = [
    { file: "watch", alt: "watch" },
    { file: "nia", alt: "beauty product" },
    { file: "racket", alt: "tennis racket" },
    { file: "nike", alt: "nike shoes" },
    { file: "tattoo", alt: "tatoo" },
    { file: "rings", alt: "rings" },
    { file: "pistol", alt: "pistol" },
    { file: "whiskey", alt: "whiskey" },
    { file: "sushi", alt: "sushi" },
    { file: "sculpture", alt: "sculpture" },
  ];

  const [imageState, swapImage] = useState(new Array(images.length).fill(true));

  const updateImage = (index) => {
    const images = [...imageState];
    images[index] = !images[index];
    swapImage(images);
  };

  return (
    <section className="right-section not-home-page">
      <h2 className="instructions">
        Hover or click an image to see before and after
      </h2>
      <div className="flex-container">
        {images.map((img, index) => {
          return (
            <div
              className="item"
              key={img.file}
              onMouseOut={() => updateImage(index)}
              onMouseOver={() => updateImage(index)}
              onClick={() => updateImage(index)}
            >
              <RetouchedImage
                file={img.file}
                alt={img.alt}
                index={index}
                showRetouched={imageState[index]}
              />
            </div>
          );
        })}
      </div>
      <Copyright />
    </section>
  );
};
