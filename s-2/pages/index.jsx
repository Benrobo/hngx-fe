import React, { useCallback, useEffect, useState } from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import logoImg from "../public/images/logo/tv.svg";
import posterImg from "../public/images/poster/Poster.png";
import imdbImg from "../public/images/logo/imdb.svg";
import tomatoImg from "../public/images/logo/tomato.svg";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { ChevronRightIcon, PlayIcon, SearchIcon } from "../components/SvgIcons";
import { twMerge } from "tailwind-merge";
import FeaturedMovies from "../components/Movies/Featured";
import { getPopularMovies, searchMovieByName } from "../http";
import Link from "next/link";
import { Spinner } from "../components/Loader";

function Home({ movieData }) {
  const [pagination, setPagniation] = React.useState([
    { value: 1, active: false },
    { value: 2, active: false },
    { value: 3, active: true },
    { value: 4, active: false },
    { value: 5, active: false },
  ]);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [moviesCopy, setMoviesCopy] = useState([]);
  const [previewMovie, setPreviewMovie] = useState([]);
  const [selectedPostermovie, setSelectedPosterMovie] = useState({});
  const [pause, setPause] = useState(false);
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchWrd, setSearchWrd] = useState("");
  const [loading, setLoading] = useState(false);

  const imagePrix = `https://image.tmdb.org/t/p/original`;

  useEffect(() => {
    const movies = movieData?.data?.results;
    setError(movieData?.err);
    setMovies(movies);
    setMoviesCopy(movies);

    const fivePreviewMovie = movies?.length > 0 ? movies.slice(0, 6) : [];
    setPreviewMovie(fivePreviewMovie);
    setSelectedPosterMovie(fivePreviewMovie[0]);
  }, []);

  // handle random movie selection
  useEffect(() => {
    const countInterval = setInterval(() => {
      randomPosterMovie();
      if (pause) {
        clearInterval(countInterval);
        console.log("[INTEVAL]: CLEARED");
        return;
      }
    }, 15000);

    if (pause === false) {
      console.log("[POSTER TIMING]: RESUME");
      console.log("[INTEVAL]: RESUMED");
    }

    function randomPosterMovie() {
      if (previewMovie.length >= 5) {
        const rand = Math.floor(Math.random() * 5);
        const movie = previewMovie[rand];
        setSelectedPosterMovie(movie);
      }
    }

    return () => {
      clearInterval(countInterval); // Clear the interval when the component unmounts
    };
  }, [previewMovie, movies, pause]);

  // monitor when user clicks the movie indicator and resume random timing after 15ms
  useEffect(() => {
    if (pause) {
      setTimeout(() => {
        setPause(false);
      }, 15000);
      console.log("[POSTER TIMING]: PAUSED");
    }
  }, [pause]);

  // keep track of current search wrd
  useEffect(() => {
    if (
      searchWrd.length <= 0 ||
      movies?.length !== moviesCopy?.length ||
      error !== null
    ) {
      setMovies(moviesCopy);
    }
  }, [searchWrd]);

  function selectMovie(id) {
    if (!id) return;
    const filteredMovie = previewMovie.find((m) => m.id === id);
    setSelectedPosterMovie(filteredMovie);
    setPause(true);
  }

  // console.log(movies);

  async function handleSearchMovies() {
    if (searchWrd.length === 0) return;
    setLoading(true);
    const resp = await searchMovieByName(searchWrd);
    setLoading(false);

    if (resp?.success === false || typeof resp?.success === "undefined") {
      setError(resp?.status_message);
    } else {
      setError(null);
      setMovies(resp?.results);
    }
  }

  return (
    <Layout showFooter={true}>
      <div className="w-full h-full min-h-[600px] md:min-h-[600px] relative bg-white-200 flex flex-col items-center justify-center ">
        {/* navbar */}
        <div className="w-full md:max-w-[80%] mx-auto min-h-[80px] absolute top-2 px-4 flex items-center justify-between gap-10 z-upper">
          <div className="w-auto flex items-center justify-center gap-4">
            <Image
              src={logoImg}
              className={"w-[30px] h-[30px] md:w-[50px] md:h-[50px] "}
              width={50}
              height={50}
              alt="image"
            />
            <p className="text-white-100 font-ppB text-[14px] md:text-[20px] ">
              MovieBox
            </p>
          </div>
          <div className="w-auto md:min-w-[525px] invisible md:visible ">
            <InputGroup>
              <Input
                placeholder="What do you want to watch?"
                className="text-white-100 font-ppReg text-[10px] "
                borderWidth={2}
                _focus={{ borderColor: "#fff" }}
                _placeholder={{
                  color: "#fff",
                }}
                style={{ fontFamily: "var(--font-dmsans)", fontSize: 16 }}
                onChange={(e) => {
                  if (e.target.value.length === 0) {
                    setMovies(moviesCopy);
                  }
                  setSearchWrd(e.target.value);
                }}
                onKeyDown={(e) => {
                  console.log(e.code);
                  if (e.code === "Enter") {
                    handleSearchMovies();
                  }
                }}
                defaultValue={searchWrd}
              />
              <InputRightElement>
                <SearchIcon color="#fff" width={15} />
              </InputRightElement>
            </InputGroup>
          </div>
          <div className="w-auto">
            <p></p>
          </div>
        </div>

        {/* Poster */}
        <PosterComponent movie={selectedPostermovie} />

        {/* pagination box (medium screen) */}
        <div className="w-auto h-full flex flex-col items-center justify-center absolute right-0 invisible md:visible ">
          <div className="w-auto flex flex-col items-start justify-start gap-2 px-6">
            {previewMovie?.map((p, idx) => (
              <button
                className={twMerge(
                  p.id === selectedPostermovie?.id
                    ? "text-white-100 text-[16px]"
                    : "text-white-300 text-[12px] ",
                  "font-ppB flex items-center justify-start"
                )}
                key={p.id}
                onClick={() => selectMovie(p.id)}
              >
                <span
                  className={twMerge(
                    "w-[20px] rounded-[30px] mr-2 p-[2px] ",
                    p.id === selectedPostermovie?.id
                      ? "bg-white-100"
                      : "bg-transparent"
                  )}
                ></span>
                <span className="transition-all">{idx + 1}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Pagination box (small screen) */}
        <div className="w-screen flex items-center justify-center gap-2 py-3 absolute bottom-1 visible  md:hidden ">
          {previewMovie?.map((p) => (
            <button
              className={twMerge(
                "w-[20px] rounded-[30px] mr-2 p-[2px] ",
                p.id === selectedPostermovie?.id
                  ? "bg-white-100"
                  : "bg-white-300 opacity-[.4]"
              )}
              key={p.id}
              onClick={() => selectMovie(p.id)}
            ></button>
          ))}
        </div>
      </div>

      {/* feature movie */}
      <section className="w-full min-h-[500px] flex flex-col items-center justify-start mt-9 py-9">
        <div className="w-full md:max-w-[80%] mx-auto ">
          {/* heading */}
          <div className="w-full flex items-center justify-between px-9 md:px-0">
            <h1 className="text-dark-100 font-dmsansB md:text-[36px] ">
              Feature Movie
            </h1>
            <Link
              href="#"
              className="text-red-205 text-[18px] font-dmsans flex items-center justify-center gap-1 "
            >
              See more
              <ChevronRightIcon />
            </Link>
          </div>
          {/* all movies */}
          {loading ? (
            <div className="w-full h-auto mt-9 flex flex-col items-center justify-center">
              <Spinner color="#000" />
            </div>
          ) : error === null ? (
            <FeaturedMovies movies={movies} />
          ) : null}
          {error !== null && (
            <div className="w-full h-[400px] flex flex-col items-center justify-center">
              <p className="text-dark-300 font-ppB">Something went wrong!</p>
              <h2 className="text-white-400 font-dmsans text-[20px] ">
                Oops, there is an error!
              </h2>
              <br />
              <button
                type="button"
                onClick={() => {
                  window && window.location.reload();
                }}
                className="w-auto px-5 py-3 rounded-md flex items-center justify-center text-center bg-dark-100 text-white-100 ppR text-[13px] "
              >
                Try again?
              </button>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}

export default Home;

function PosterComponent({ movie }) {
  const imagePrix = `https://image.tmdb.org/t/p/original`;

  if (Object.entries(movie).length === 0) return null;

  const fullImage = `${imagePrix}/${movie?.backdrop_path}`;

  const imageStyle = {
    backgroundImage: `url(${fullImage ?? "/images/poster/Poster.png"})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="w-full h-[650px] md:min-h-[600px] ">
      {/* <Image
        // src={posterImg}
        src={fullImage ?? posterImg}
        className={"w-screen h-screen md:h-full object-cover "}
        alt="poster image"
        width={0}
        height={0}
        placeholder="empty"
        priority={true}
        blurDataURL={fullImage}
      /> */}
      <div
        className="w-screen h-screen md:h-full object-cover relative"
        style={imageStyle}
      >
        <div className="w-full h-full absolute left-0 top-0 bg-dark-800"></div>
      </div>

      <div className="w-screen h-full absolute top-[8em] md:top-[1em] flex items-center ">
        <div className="w-full px-6 md:max-w-[80%] mx-auto flex items-center justify-between ">
          {/* description box */}
          <div
            id="left"
            className="w-full md:w-[404px] h-auto flex items-start justify-start flex-col gap-[16px] "
          >
            <h1 className="text-white-100 text-[20px] md:text-[48px] leading-[56px] font-ppB ">
              {movie?.original_title ?? ""}
            </h1>
            <div className="w-full flex items-center justify-start gap-10">
              <div className="w-auto flex items-center gap-3">
                <Image src={imdbImg} width={35} height={30} />
                <span className="text-white-105 font-dmsans text-[13px]">
                  0 / 100
                </span>
              </div>
              <div className="w-auto flex items-center gap-3">
                <Image src={tomatoImg} width={15} height={10} alt="tomato" />
                <span className="text-white-105 font-dmsans text-[13px]">
                  0%
                </span>
              </div>
            </div>
            <p className="text-white-100 text-[12px] md:text-[14px] font-dmsans ">
              {movie?.overview}
            </p>
            <Button
              leftIcon={<PlayIcon />}
              className="font-dmsans text-[12px] "
              style={{
                background: "#BE123C",
                color: "#fff",
                // fontSize: "14px",
              }}
              _hover={{
                opacity: 0.8,
              }}
            >
              <span className="text-[12px] md:text-[14px] ">WATCH TRAILER</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const apiKey = process.env.TMDB_API;
  const resp = await getPopularMovies(apiKey);

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
    revalidate: 60,
  };
}
