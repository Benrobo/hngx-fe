import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import ImageTag from "./Image.jsx";
import { UserButton, useAuth } from "@clerk/nextjs";
import { BsFillShieldLockFill } from "react-icons/bs";

function TopBar() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolledPast, setIsScrolledPast] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const { isSignedIn } = useAuth();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userData"));
    setUserInfo(userInfo);
  }, []);

  useEffect(() => {
    function onScroll() {
      setScrollY(window.scrollY);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (scrollY > 30) {
      setIsScrolledPast(true);
    } else {
      setIsScrolledPast(false);
    }
  }, [scrollY]);

  const handleLogout = () => {};

  return (
    <div
      className={`w-full h-auto border-b-[1px] border-b-white-600 fixed top-0 left-0 z-[200] bg-dark-200 backdrop-blur `}
    >
      <div className="w-full px-[2rem] py-2 flex items-center justify-between">
        <div className="w-auto left flex items-center justify-center">
          <Link href="/" className="w-auto flex items-center justify-center">
            <ImageTag
              src="/images/logo/logo.png"
              alt="logo"
              height={0}
              width={0}
              className="scale-[1] w-[45px] rounded-[20px] "
              style={{}}
            />
            <span className="text-white-200 ml-2 font-ppB text-[20px] ">
              Gallarian
            </span>
          </Link>
        </div>
        <div className="w-auto px-7 left flex items-center justify-center">
          <UserButton afterSignOutUrl="/" />
          {isSignedIn === false ? (
            <div className="w-auto flex items-center gap-2">
              <Link
                href="/sign-up"
                className={`w-auto px-4 py-2 rounded-[30px] font-ppB bg-white-100 text-dark-100 text-[14px] flex items-center justify-start gap-2 border-[1px] border-white-600 hover:opacity-[1] opacity-[.80] transition-all scale-[.85] hover:scale-[1]  `}
                // onClick={toggleDnDModal}
              >
                <BsFillShieldLockFill className="text-dark-100" /> Signup
              </Link>
              <Link
                href="/sign-in"
                className={`w-auto px-4 py-2 rounded-[30px] font-ppB bg-white-100 text-dark-100 text-[14px] flex items-center justify-start gap-2 border-[1px] border-white-600 hover:opacity-[1] opacity-[.80] transition-all scale-[.85] hover:scale-[1]  `}
                // onClick={toggleDnDModal}
              >
                <BsFillShieldLockFill className="text-dark-100" /> Sign-in
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default TopBar;
