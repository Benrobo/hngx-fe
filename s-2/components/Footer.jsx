import React from "react";

function Footer() {
  const currYear = new Date().getFullYear();

  return (
    <div className="w-full h-auto min-h-[50px] flex items-center justify-between py-5 px-5 ">
      <p>Footer</p>
    </div>
  );
}

export default Footer;
