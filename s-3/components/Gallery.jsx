import React from "react";
import { ImageLoader } from "./Image";

function Gallery() {
  return (
    <div className="w-full">
      <ImageLoader
        src={
          "https://images.pexels.com/photos/18056655/pexels-photo-18056655/free-photo-of-a-humpback-whale-emerging-from-the-water.jpeg"
        }
      />
    </div>
  );
}

export default Gallery;
