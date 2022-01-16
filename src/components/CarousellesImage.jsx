import React from "react";
import { Carousel } from "react-bootstrap";

const CarousellesImage = ({ certif }) => {
  //   console.log(certif);
  return (
    <div>
      <>
        <a href={certif.url} target="_blank">
          {certif.name}
        </a>
      </>
    </div>
  );
};

export default CarousellesImage;
