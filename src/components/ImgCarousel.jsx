import React, { useState } from "react";

const images = ["./images/s1.jpg", "./images/s2.jpg", "./images/s3.jpg"];

export default function ImgCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <div className="carousel-container">
      <img
        src={images[currentImageIndex]}
        alt="Stock Image"
        className="carousel-image"
      />
    </div>
  );
}
