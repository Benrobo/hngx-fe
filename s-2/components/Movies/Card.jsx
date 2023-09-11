import Image from "next/image";
import React from "react";
import posterImg from "../../public/images/poster/Poster.png";
import { AiFillHeart } from "react-icons/ai";
import { twMerge } from "tailwind-merge";
import imdbImg from "../../public/images/logo/imdb.svg";
import tomatoImg from "../../public/images/logo/tomato.svg";
import Link from "next/link";

function MovieCard() {
  const imageStyle = {
    backgroundImage: `url("/images/poster/Poster.png")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <Link
      href="#"
      className="w-[250px] max-w-[250px] min-h-[490px] flex flex-col items-center justify-start leading-5 "
    >
      <div className="w-full h-[360px] " style={imageStyle}>
        <div className="w-full flex items-center justify-between py-5 px-3">
          <span
            id="tag"
            className="w-auto px-2 py-[4px] rounded-[30px] text-[12px] font-dmsansB bg-white-105 "
          >
            TV SERIES
          </span>
          <button
            className={twMerge(
              "flex flex-col items-center justify-center text-white-300 p-2 rounded-[50%] ",
              true ? "bg-red-100" : "bg-white-105"
            )}
          >
            <AiFillHeart className={true ? "text-red-305" : "text-white-300"} />
          </button>
        </div>
      </div>
      <div className="w-full flex flex-col items-start justify-start mt-4 gap-2">
        <p className="text-white2-500 font-dmsansB text-[13px] ">
          USA, 2016-Current
        </p>
        <h1 className="text-dark-100 font-dmsansB text-[20px] ">
          Stranger Things
        </h1>
        <div className="w-full flex items-center justify-start gap-10">
          <div className="w-auto flex items-center gap-3">
            <Image src={imdbImg} width={35} height={30} />
            <span className="text-white-400 font-dmsans text-[13px]">
              86.0 / 100
            </span>
          </div>
          <div className="w-auto flex items-center gap-3">
            <Image src={tomatoImg} width={15} height={10} alt="tomato" />
            <span className="text-white-400 font-dmsans text-[13px]">97%</span>
          </div>
        </div>
        <div className="w-full flex gap-1">
          <span className="text-white2-500 text-[13px] font-dmsansB ">
            Action, Adventure
          </span>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
