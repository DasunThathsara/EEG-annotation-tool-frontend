import React, { useEffect, useState } from "react";
import { sendRequest } from "../api";

interface Props {
  images: string[];
  onComplete: () => void;
}

const ImageSlideshow: React.FC<Props> = ({ images, onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < images.length) {
      sendRequest("name", { imageName: images[currentIndex] });
      const timer = setTimeout(() => setCurrentIndex(currentIndex + 1), 5000);
      return () => clearTimeout(timer);
    } else {
      onComplete();
    }
  }, [currentIndex, images, onComplete]);

  return (
    <div className="slideshow-container">
      {currentIndex < images.length ? (
        <div className="image-container">
          <img
            className="slideshow-img"
            src={`../../public/images/${images[currentIndex]}`}
            alt={`Image ${currentIndex + 1}`}
          />
          <div>
            <button className="instruction-button btn" onClick={onComplete}>
              Instructions
            </button>
            &nbsp;&nbsp;
            <button className="stop-button btn" onClick={onComplete}>
              Stop
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ImageSlideshow;
