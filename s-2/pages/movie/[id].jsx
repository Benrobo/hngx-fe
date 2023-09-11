import { PlayIcon } from "../../components/SvgIcons";
import MovieSidebar from "../../components/MovieSidebar";
import { BsFillPlayFill } from "react-icons/bs";
import { AiTwotoneStar } from "react-icons/ai";
import React from "react";

function SelectedMovie() {
  const imageStyle = {
    backgroundImage: `url("/images/poster/movie.png")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div className="w-full h-full relative">
      <div className="w-full flex items-start justify-start">
        <MovieSidebar />
        <div className="w-full h-screen overflow-scroll flex flex-col items-center justify-start py-9 px-6">
          {/* Thumbnail */}
          <div
            className="w-full h-[450px] relative rounded-[10px] bg-dark-100 "
            style={imageStyle}
          >
            {/* control button */}
            <div className="w-full h-full flex flex-col items-center justify-center absolute top-0 left-0">
              <div className="w-full max-w-[168px] flex flex-col items-center justify-center ">
                <button className="w-[109px] h-[109px] backdrop-blur-sm rounded-[50%] transition-all scale-[.75] hover:scale-[.85] bg-white-105 text-center flex flex-col items-center justify-center">
                  <BsFillPlayFill className="text-white-100 w-[54px] h-[54px] " />
                </button>
              </div>
            </div>
          </div>

          {/* Movie info */}
          <br />
          <div className="w-full flex flex-col items-center justify-start">
            <div className="w-full flex items-center justify-between">
              <div className="w-auto flex items-center justify-start gap-3">
                <span className="text-dark-100 font-dmsans">
                  Top Gun : Maverick
                </span>
                <span className="text-dark-100 font-dmsans">.</span>
                <span className="text-dark-100 font-dmsans">2022</span>
                <span className="text-dark-100 font-dmsans">.</span>
                <span className="text-dark-100 font-dmsans">PG-13</span>
                <span className="text-dark-100 font-dmsans">.</span>
                <span className="text-dark-100 font-dmsans">2h 30min</span>
                {/* tags */}
                <div className="w-auto flex items-center justify-center gap-3">
                  <span
                    id="tag"
                    className="w-auto px-3 py-[4px] rounded-[30px] text-[12px] font-dmsansB bg-white-105 border-solid border-[1px] border-red-105 text-red-306 "
                  >
                    Action
                  </span>
                  <span
                    id="tag"
                    className="w-auto px-3 py-[4px] rounded-[30px] text-[12px] font-dmsansB bg-white-105 border-solid border-[1px] border-red-105 text-red-306 "
                  >
                    Drama
                  </span>
                </div>
              </div>
              <div className="w-auto flex items-center justify-start gap-2">
                <span className="text-white-400 flex items-center justify-start">
                  <AiTwotoneStar className="text-orange-200" />
                  <span className="font-dmsans">8.5</span>
                </span>
                <span className="font-dmsans">|</span>
                <span className="font-dmsans">350k</span>
              </div>
            </div>
            <br />
            <div className="w-full flex items-center justify-between gap-6">
              <div className="w-full  max-w-[700px] mt-2 flex flex-col items-start justify-start">
                <p className="text-gray-600 font-dmsans text-[14px] ">
                  After thirty years, Maverick is still pushing the envelope as
                  a top naval aviator, but must confront ghosts of his past when
                  he leads TOP GUN's elite graduates on a mission that demands
                  the ultimate sacrifice from those chosen to flv it.
                </p>
              </div>
              <div className="w-[600px] h-full "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectedMovie;
