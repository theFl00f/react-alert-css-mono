import React from "react";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { Wrapper } from "../components/Wrapper";

export const GlobalLayout = ({ children }) => {
  return (
    <main>
      <Wrapper>
        <Nav />
      </Wrapper>
      {children}
      <Wrapper>
        <Footer />
      </Wrapper>
    </main>
  );
};
