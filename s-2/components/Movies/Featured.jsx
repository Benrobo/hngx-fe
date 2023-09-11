import React from "react";
import MovieCard from "./Card";
import posterImg from "../../public/images/poster/Poster.png";
import Image from "next/image";

function FeaturedMovies({ movies }) {
  return (
    <div className="w-full mt-9 grid grid-cols-4 gap-4">
      {/* <MovieCard /> */}
      <div className="w-[0px] px-1 h-[200px] bg-red-200 ">hey</div>
      <br />
    </div>
  );
}

export default FeaturedMovies;
