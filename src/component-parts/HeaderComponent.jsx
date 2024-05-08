import React, { useRef } from "react";
import Navbar from "./NavbarComponent";


const HeaderComponent = () => {

  return (
    <>
    <header className="header flex-column mt-auto py-5 bg-light text-dark">
      <Navbar />
    </header>
    </>
  );
};

export default HeaderComponent;