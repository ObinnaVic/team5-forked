import React from "react";
import NewsLetters from "../NewsLetters/NewsLetters";
import { Link } from "react-router-dom";

const Footer = () => (
  <>
    <div className="w-full border-t border-border-dark bg-dark-footer dark:bg-dark-body text-light-body dark:text-dark-text flex flex-col justify-center items-center p-12 gap-8 flex-1 flex-shrink">
      <NewsLetters />
      <nav className="min-w-full flex justify-between items-center flex-col md:flex-row gap-5 md:gap-0">
        <header className="flex justify-center md:justify-start   text-hover-dark w-1/4">
          <i className="bx bx-code-alt self-end sm:bx-md text-3xl lg:text-4xl "></i>
          <Link to="/" className="text-xl md:text-3xl lg:text-4xl font-serif">
            CodersDen
          </Link>
        </header>
        <ul className="w-full md:w-1/2 md: flex justify-between md:justify-around items-center ">
          <li className="cursor-pointer text-dark-text font-sans  font-bold hover:text-hover-light dark:hover:text-hover-dark">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer text-dark-text font-sans  font-bold hover:text-hover-light dark:hover:text-hover-dark">
            <Link to="/category">Category</Link>
          </li>
          <li className="cursor-pointer text-dark-text font-sans  font-bold hover:text-hover-light dark:hover:text-hover-dark">
            <Link to="/about">About</Link>
          </li>
        </ul>
        <div className="flex items-center justify-center w-1/4">
          <Link
            to="https://github.com/codersden-hub/"
            className=" m-2 p-main-text"
          >
            <i className="bx bxl-github bx-sm text-border-light dark:text-border-dark  cursor-pointer hover:text-hover-light dark:hover:text-hover-dark"></i>
          </Link>
          <Link
            to="https://www.linkedin.com/company/coder-s-den-94/"
            className=" m-2 p-main-text"
          >
            <i className="bx bxl-linkedin bx-sm text-border-light dark:text-border-dark  cursor-pointer hover:text-hover-light dark:hover:text-hover-dark"></i>
          </Link>
          <Link
            to="https://twitter.com/CodersDen94"
            className=" m-2 p-main-text"
          >
            <i className="bx bxl-twitter bx-sm text-border-light dark:text-border-dark  cursor-pointer hover:text-hover-light dark:hover:text-hover-dark"></i>
          </Link>
          <Link
            to="https://m.youtube.com/channel/UCSaPpb0ORIIlGDT8Tieq0Iw"
            className=" m-2 p-main-text"
          >
            <i className="bx bxl-youtube bx-sm text-border-light dark:text-border-dark  cursor-pointer hover:text-hover-light dark:hover:text-hover-dark"></i>
          </Link>
        </div>
      </nav>
      <div className="w-full h-[1px] bg-light-body" />
      <p className="text-center font-sans font-normal">
        &copy; {new Date().getFullYear()}
        <Link to="/"> CordersDen Blog</Link> All rights reserved.
      </p>
    </div>
  </>
);
export default Footer;
