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
          <Link className="group" to="/">
            <h1 className="text-white group-hover:text-rac-yellow prose prose-2xl font-semibold transition-colors rac-transition">
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
