import React, { useState } from "react";
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

function Home() {
  const [pagination, setPagniation] = React.useState([
    { value: 1, active: false },
    { value: 2, active: false },
    { value: 3, active: true },
    { value: 4, active: false },
    { value: 5, active: false },
  ]);

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
          <div className="w-auto md:min-w-[525px] hidden md:visible ">
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
        <PosterComponent />

        {/* pagination box (medium screen) */}
        <div className="w-auto h-full flex flex-col items-center justify-center absolute right-0 invisible md:visible ">
          <div className="w-auto flex flex-col items-start justify-start gap-2 px-6">
            {pagination?.map((p) => (
              <button
                className={twMerge(
                  p.active
                    ? "text-white-100 text-[16px]"
                    : "text-white-300 text-[12px] ",
                  "font-ppB flex items-center justify-start"
                )}
              >
                <span
                  className={twMerge(
                    "w-[20px] rounded-[30px] mr-2 p-[2px] ",
                    p.active ? "bg-white-100" : "bg-transparent"
                  )}
                ></span>
                <span className="transition-all">{p.value}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Pagination box (small screen) */}
        <div className="w-screen flex items-center justify-center gap-2 py-3 absolute bottom-1 visible  md:hidden ">
          {pagination?.map((p) => (
            <button
              className={twMerge(
                "w-[20px] rounded-[30px] mr-2 p-[2px] ",
                p.active ? "bg-white-100" : "bg-white-300 opacity-[.4]"
              )}
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
            <button className="text-red-205 text-[18px] font-dmsans flex items-center justify-center gap-1 ">
              See more
              <ChevronRightIcon />
            </button>
          </div>
          {/* all movies */}
          <FeaturedMovies />
        </div>
      </section>
    </Layout>
  );
}

export default Home;

function PosterComponent() {
  return (
    <div className="w-full h-[650px] md:min-h-[600px] ">
      <Image
        src={posterImg}
        className={"w-screen h-screen md:h-full object-cover "}
        alt="image"
        width={0}
        height={0}
      />

      <div className="w-screen h-full absolute top-[8em] md:top-[1em] flex items-center ">
        <div className="w-full px-6 md:max-w-[80%] mx-auto flex items-center justify-between ">
          {/* description box */}
          <div
            id="left"
            className="w-full md:w-[404px] h-auto flex items-start justify-start flex-col gap-[16px] "
          >
            <h1 className="text-white-100 text-[20px] md:text-[48px] leading-[56px] font-ppB ">
              John Wick 3 : Parabellum
            </h1>
            <div className="w-full flex items-center justify-start gap-10">
              <div className="w-auto flex items-center gap-3">
                <Image src={imdbImg} width={35} height={30} />
                <span className="text-white-105 font-dmsans text-[13px]">
                  86.0 / 100
                </span>
              </div>
              <div className="w-auto flex items-center gap-3">
                <Image src={tomatoImg} width={15} height={10} alt="tomato" />
                <span className="text-white-105 font-dmsans text-[13px]">
                  97%
                </span>
              </div>
            </div>
            <p className="text-white-100 text-[12px] md:text-[14px] font-dmsans ">
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
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
