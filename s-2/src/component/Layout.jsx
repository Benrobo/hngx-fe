import React from "react";
import Footer from "./Footer";

function Layout({ children, showFooter }) {
  return (
    <div className="w-full transition-all scroll-smooth relative h-auto overflow-y-scroll bg-white-100 hideScrollBar">
      {children}
      {showFooter && <Footer />}
    </div>
  );
}

export default Layout;
