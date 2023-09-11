import React from "react";
import MovieCard from "./Card";
import posterImg from "../../public/images/poster/Poster.png";
import Image from "next/image";

function FeaturedMovies({ movies }) {
  return (
    <div className="w-full mt-9 flex flex-col items-center justify-center md:grid lg:grid xl:grid md:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3 gap-10">
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <br />
    </div>
  );
}

export default FeaturedMovies;
