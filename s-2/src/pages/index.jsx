import React, { useState } from "react";
import Layout from "../component/Layout";
import Image from "next/image";
import logoImg from "../public/images/logo/tv.svg";
import posterImg from "../public/images/poster/Poster.png";
import imdbImg from "../public/images/logo/imdb.svg";
import tomatoImg from "../public/images/logo/tomato.svg";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { PlayIcon, SearchIcon } from "../component/SvgIcons";
import { twMerge } from "tailwind-merge";

function Home() {
  const [pagination, setPagniation] = React.useState([
    { value: 1, active: false },
    { value: 2, active: false },
    { value: 3, active: true },
    { value: 4, active: false },
    { value: 5, active: false },
  ]);

  return (
    <Layout>
      <div className="w-full h-full min-h-[200px] md:min-h-[600px] relative bg-dark-200 flex flex-col items-center justify-center ">
        {/* navbar */}
        <div className="w-full max-w-[80%] mx-auto min-h-[80px] absolute top-2 px-4 flex items-center justify-between gap-10">
          <div className="w-auto flex items-center justify-center gap-4">
            <Image
              src={logoImg}
              className={"w-[50px] h-[50px] "}
              width={50}
              height={50}
              alt="image"
            />
            <p className="text-white-100 font-ppB">MovieBox</p>
          </div>
          <div className="w-auto md:min-w-[525px] ">
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

        {/* pagination box */}
        <div className="w-auto h-full flex flex-col items-center justify-center absolute right-0 ">
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
      </div>
    </Layout>
  );
}

export default Home;

function PosterComponent() {
  return (
    <div className="w-full h-[300px] md:h-[600px] ">
      <Image
        src={posterImg}
        className={"w-screen h-full object-cover "}
        alt="image"
      />

      <div className="w-screen h-full absolute top-[1em] flex items-center ">
        <div className="w-full max-w-[80%] mx-auto flex items-center justify-between ">
          {/* description box */}
          <div
            id="left"
            className="w-full md:w-[404px] h-auto flex items-start justify-start flex-col gap-[16px] "
          >
            <h1 className="text-white-100 text-[48px] leading-[56px] font-ppB ">
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
            <p className="text-white-100 text-[14px] font-dmsans ">
              John Wick is on the run after killing a member of the
              international assassins' guild, and with a $14 million price tag
              on his head, he is the target of hit men and women everywhere.
            </p>
            <Button
              leftIcon={<PlayIcon />}
              className="font-dmsans "
              style={{
                background: "#BE123C",
                color: "#fff",
                fontSize: "14px",
              }}
              _hover={{
                opacity: 0.8,
              }}
            >
              WATCH TRAILER
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
