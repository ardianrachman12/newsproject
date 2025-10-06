import React from "react";
import Navbar from "./Navbar";
import logo from "../../../src/assets/images/logo.svg";

const Header = () => {
  return (
    <header className="text-white p-4 text-center">
      <img src={logo} alt="Logo" className="mx-auto py-6" />
      <Navbar />
    </header>
  );
};

export default Header;
