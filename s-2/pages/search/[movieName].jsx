import Image from "next/image";
import React, { useEffect, useState } from "react";
import logoImg from "../../public/images/logo/tv.svg";
import FeaturedMovies from "../../components/Movies/Featured";
import { searchMovieByName } from "../../http";
import { Spinner } from "../../components/Loader";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

function SearchPage({ movieData }) {
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const movies = movieData?.data?.results;
    movieData?.err && setError("something went wrong");
    setMovies(movies);
  }, [movieData, movies]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-start">
      <div className="w-full mx-auto drop-shadow-sm shadoow-sm bg-white-100 min-h-[80px] absolute top-2 px-4 flex items-center justify-between gap-10 z-upper">
        <Link
          href="/"
          className="w-auto flex items-center justify-center gap-4"
        >
          <Image
            src={logoImg}
            className={"w-[30px] h-[30px] md:w-[50px] md:h-[50px] "}
            width={50}
            height={50}
            alt="image"
          />
          <p className="text-dark-100 font-ppB text-[14px] md:text-[20px] ">
            MovieBox
          </p>
        </Link>
      </div>
      <br />
      <br />
      <br />
      <section className="w-full min-h-[500px] flex flex-col items-center justify-start px-0 mt-10 py-9">
        <div className="w-full max-w-[90%] flex items-center justify-between md:px-5 px-8">
          <Link
            href="/"
            className="text-white-300 text-white-400 text-[14px] flex items-center justify-start gap-2 "
          >
            <FaArrowLeftLong size={20} /> Back
          </Link>
          <h1 className="text-dark-400 font-dmsansB md:text-[20px] ">
            Search Result :{" "}
            <span className="text-dark-100">{movies.length}</span>
          </h1>
        </div>
        <br />
        {loading && (
          <div className="w-full h-auto mt-9 flex flex-col items-center justify-center">
            <Spinner color="#000" />
          </div>
        )}
        <div className="w-full max-w-[90%] flex flex-col items-center justify-center">
          {!error && <FeaturedMovies movies={movies} />}

          {error ||
            (movies.length === 0 && (
              <div className="w-full h-auto min-h-[100px] flex flex-col items-center justify-center">
                <p className="text-dark-300 font-ppB">
                  {movies.length === 0
                    ? "No movies were found"
                    : "Something went wrong!"}
                </p>
                <h2 className="text-white-400 font-dmsans text-[20px] ">
                  {error && "Oops, there is an error!"}
                </h2>
                <br />
              </div>
            ))}
        </div>
      </section>
      <br />
      <br />
      <br />
    </div>
  );
}

export default SearchPage;

export async function getServerSideProps({ query }) {
  const apiKey = process.env.TMDB_API;
  const resp = await searchMovieByName(query?.movieName, apiKey);

  let result = { err: false, data: null };

  if (typeof resp?.results === "undefined") {
    result["err"] = true;
    result["data"] = null;
  } else {
    result["data"] = resp;
  }

  return {
    props: {
      movieData: result,
    },
  };
}
