import React from "react";

// Components
import { Navbar } from "../Navbar";

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
