import React, { useRef } from "react";
import Navbar from "./Navbar";


const Header = () => {

  return (
    <>
    <header className="header flex-column mt-auto py-5 bg-light text-dark">
      <Navbar />
    </header>
    </>
  );
};

export default Header;