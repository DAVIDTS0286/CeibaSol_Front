import { Carousel } from "react-responsive-carousel";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function DemoCarousel(props) {

  const { imagenes } = props;

  return (
    <div>
      <Carousel slideInterval={500} showThumbs={false}>
        {imagenes?.map((image, index) => (
          <div key={index}>
            <img src={image} alt={"Imagen " + index} className="block object-cover object-center rounded-lg w-2/3 h-72"/>
          </div>
        ))}
      </Carousel>
    </div>


  );
}
