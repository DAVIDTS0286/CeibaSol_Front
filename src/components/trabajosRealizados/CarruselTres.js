import { Carousel } from "react-responsive-carousel";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const images = [
  {
    id: "1",
    title: "Argos",
    image:
      "https://i.imgur.com/T7oGmjV.jpg",
  },
  {
    id: "2",
    title: "Argos",
    image:
      "https://i.imgur.com/HPCZz0p.jpg",
  },
  {
    id: "3",
    title: "Argos",
    image:
      "https://i.imgur.com/6PkVDkx.jpg",
  },
  {
    id: "4",
    title: "Argos",
    image:
      "https://i.imgur.com/7mlJeGY.jpg",
  },
  {
    id: "5",
    title: "Argos",
    image:
      "https://i.imgur.com/Mcg7ewR.jpg",
  },
  {
    id: "6",
    title: "Argos",
    image:
      "https://i.imgur.com/NMTumgL.jpg",
  },
  {
    id: "7",
    title: "Argos",
    image:
      "https://i.imgur.com/PP5vYEw.jpg",
  },
  {
    id: "8",
    title: "Argos",
    image:
      "https://i.imgur.com/JsZsnbr.jpg",
  },
  {
    id: "9",
    title: "Argos",
    image:
      "https://i.imgur.com/IVmXBZ6.jpg",
  },
  {
    id: "10",
    title: "Argos",
    image:
      "https://i.imgur.com/cSGUEae.jpg",
  },
];

export default function DemoCarousel() {
  return (
    <div>
      <Carousel slideInterval={500}>
				{images.map((image) => (
					<div key={image.id} className='slider__content--item'>
						<img src={image.image} alt={image.title} />
						<p className='legend'>{image.title}</p>
					</div>
				))}
		
       
      </Carousel>
    </div>
  );
}
