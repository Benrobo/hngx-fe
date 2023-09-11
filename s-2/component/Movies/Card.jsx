import Image from "next/image";
import React from "react";
import posterImg from "../../public/images/poster/Poster.png";

function MovieCard() {
  const imageStyle = {
    backgroundImage: `url("/images/poster/Poster.png")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat", // Prevent image repetition
    backgroundPosition: "center", // Center the image
    // backgroundAttachment: "fixed",
  };

  return (
    <div className="w-[250px] max-w-[250px] min-h-[490px] flex flex-col items-center justify-start ">
      <div className="w-full h-[370px] " style={imageStyle}>
        <div className="w-full flex items-center justify-between py-5">
          <span
            id="tag"
            className="w-auto px-3 py-2 rounded-xl text-[14px] bg-white-105 "
          >
            TV SERIES
          </span>
        </div>
      </div>
      <br />
      <p>welcome</p>
    </div>
  );
}

export default MovieCard;
