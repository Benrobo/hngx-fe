import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <div className="w-full h-auto min-h-[50px] flex items-center justify-center py-5 px-5 ">
      <footer className="md:px-6 px-2 py-20 font-bold text-gray90 flex flex-col gap-11">
        <div className="md:text-3xl text-xl flex justify-center items-center gap-12">
          <AiFillFacebook />
          <BsInstagram />
          <BsTwitter />
          <BsYoutube />
        </div>
        <ul className="flex justify-center md:text-lg text-base flex-col md:flex-row items-center md:gap-12 gap-6">
          <li>Conditions of Use</li>
          <li>Privacy & Policy</li>
          <li>Press Room</li>
        </ul>
        <p className="text-gray50 text-center">
          &copy; {currYear} MovieBox by Adriana Eka Prayudha
        </p>
      </footer>
    </div>
  );
}

export default Footer;
