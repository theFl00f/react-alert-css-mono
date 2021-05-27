import React from "react";
import { Footer } from "../components/Footer";
import { Nav } from "../components/Nav";
import { Wrapper } from "../components/Wrapper";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const GlobalLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-rac-dark-purple flex flex-col text-white">
      <Wrapper>
        <header className="flex justify-between items-baseline py-2">
          <Link to="/">
            <h1 className="prose prose-2xl text-white font-semibold">
              react-alert-css
            </h1>
          </Link>
          <Nav />
        </header>
      </Wrapper>
      <main className="flex-grow">{children}</main>
      <Wrapper>
        <Footer />
      </Wrapper>
    </div>
  );
};

GlobalLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
