import React, { useState, useEffect } from "react";
import "./home.scss";
import { Socials } from "../../components/socials";

export const Home = () => {

	const images = [
    { file: "skagen-front", alt: "Skagen wristwatch" },
    { file: "coach-bag", alt: "White Coach handbag" },
    { file: "tennis-racket", alt: "tennis racket" },
  ];

  const [visibleImage, swapImage] = useState(0);

	useEffect(() => {
    let id = setInterval(() => {
			const imageIndex = visibleImage < images.length - 1 ? visibleImage + 1 : 0;
			swapImage(imageIndex);
    }, 4000);
    return () => clearInterval(id);
  });

	useEffect(() => {
		document.body.classList.add("index-background");
	
		// returned function will be called on component unmount 
		return () => {
			document.body.classList.remove("index-background");
		}
	}, [])

  return (
		<div>
			<Socials />
			<section className="right-section home-section">
				<div id="index-carousel" className="carousel-inner no-border carousel slide">
					{images.map((img, index) => {
						return (
						<div className="item" key={index} style={{ display: visibleImage === index ? "block" : null}}>
							<img src={`imgs/${images[index].file}.png`} className="img-responsive splash-image" alt={images[index].alt} />
						</div>
						)
					})}
				</div>
			</section>
		</div>
  )
};
