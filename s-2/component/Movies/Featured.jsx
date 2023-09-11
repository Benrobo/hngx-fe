import React from "react";
import MovieCard from "./Card";
import posterImg from "../../public/images/poster/Poster.png";
import Image from "next/image";

function FeaturedMovies({ movies }) {
  return (
    <div className="w-full mt-9 grid grid-cols-4 gap-4">
      <MovieCard />
      <div className="w-[250px] max-w-[250px] min-h-[490px] flex flex-col items-center justify-start bg-red-200">
        <Image
          src={posterImg}
          alt="poster image"
          className="w-[250px] h-[370px] "
          width={0}
        />
        <br />
        <p>welcome</p>
      </div>
    </div>
  );
}

export default FeaturedMovies;
