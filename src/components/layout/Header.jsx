import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="text-white p-4 text-center">
      <img src="/src/assets/images/logo.svg" alt="Logo" className="mx-auto py-6" />
      <Navbar />
    </header>
  );
};

export default Header;
