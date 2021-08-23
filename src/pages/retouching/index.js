import React, { useState } from "react";
import { Copyright } from "../../components/copyright";

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
	}

  return (
    <section class="right-section">
      <div class="flex-container">
        {images.map((img, index) => {
          return (
            <div class="item">
              <img
                src={`imgs/retouched/${img.file}_${imageState[index] ? "after" : "before"}.jpg`}
                alt={img.alt}
                class="img-swap"
								onMouseOut={() => updateImage(index)}
								onMouseOver={() => updateImage(index)}
								onClick={() => updateImage(index)}
              />
            </div>
          );
        })}
      </div>
			<Copyright />
    </section>
  );
};
