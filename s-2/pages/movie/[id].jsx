import MovieSidebar from "../../components/MovieSidebar";
import React from "react";

function SelectedMovie() {
  return (
    <div className="w-full h-full relative">
      <div className="w-full flex items-start justify-start">
        <MovieSidebar />
      </div>
    </div>
  );
}

export default SelectedMovie;
