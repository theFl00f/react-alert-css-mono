import React from "react";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";

export const GlobalLayout = ({ children }) => {
  return (
    <main>
      <Nav />
      {children}
      <Footer />
    </main>
  );
};
