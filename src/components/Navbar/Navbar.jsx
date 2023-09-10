import React, { useState, useEffect } from "react";
import images from "../../UI/constants/images";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { NavLink, Link, useLocation } from "react-router-dom";
import Auth from "../Auth/Auth";
import Admin from "../dashboard/admin/Admin";
import User from "../dashboard/user/User";
import { useGlobalContext } from "../context";
import AddAdmin from "../AddAdmin/AddAdmin";

const Navbar = () => {
  // Dynamic Class To Add Animation To DropDown...
  const [toggleButton, setToggleButton] = useState(false);
  const [toogleUser, setToggleuser] = useState(false);
  const [toogleCategory, setToogleCategory] = useState(false);
  // const location = useLocation();
  const { isLoginIn, isAdmin } = useGlobalContext();

  const smallScreenNavClass = [
    "fixed left-0 w-full bg-light-body dark:bg-dark-body z-10 flex justify-center items-center  flex-col transition-all",
  ];
  let navSlideAnimation = toggleButton ? "slide-down" : "slide-up";
  smallScreenNavClass.push(navSlideAnimation);

  //Hide And Display Login Sign Up Form
  let formClass = [
    `absolute right-4 top-0 block  min-h-[10rem] bg-light-body dark:bg-dark-body w-64 d-t z-10 shadow-sm pb-1 rounded-xl dark:shadow-cards-light shadow-dark-body
  `,
  ];
  if (toogleUser) {
    formClass.push("dropdown-visible");
  } else {
    formClass.push("invisible");
  }

  // Hide And Display Category Drowdown
  let categoryClass = [
    `md:block absolute d-t bg-light-body dark:bg-dark-body min-h-[400px] pb-6 w-60 rounded-e-md shadow-sm dark:shadow-cards-light shadow-dark-body`,
  ];
  if (toogleCategory) {
    categoryClass.push("dropdown-visible");
  } else {
    categoryClass.push("dropdown-hidden");
  }

  //  Close Any DropDown If a Route Changes
  // useEffect(() => {
  //   setToggleuser(false);
  // }, [location]);

  let profileImg = <i className="bx bxs-user"></i>;
  if (isLoginIn) {
    profileImg = (
      <img
        className="rounded-full w-10 cursor-pointer"
        src={images.avatar1}
        alt=""
      />
    );
  }
  // JSX Codes Here
  return (
    <>
      <Backdrop show={toogleUser} clicked={() => setToggleuser(!toogleUser)} />
      <Backdrop
        show={toogleCategory}
        clicked={() => setToogleCategory(!toogleCategory)}
      />
      <nav className="w-full top-0 flex justify-between items-center bg-light-body dark:bg-dark-body py-4 p-8 md:pr-4 z-[999999]">
        {/* Small Screen Navigation Start Here */}
        <div className="flex cursor-pointer">
          <i
            className="bx bx-menu-alt-left bx-sm dark:text-dark-header md:hidden"
            onClick={() => {
              setToggleButton(!toggleButton);
            }}
          ></i>

          {/* Programming is Fun ==> Toggle Button Set To True */}
          <div className={smallScreenNavClass.join(" ")}>
            <i
              className="cursor-pointer absolute top-5 left-8 text-border-light rounded-full p-3 dark:text-border-dark hover:bg-[#ebf2ff]"
              onClick={() => setToggleButton(!toggleButton)}
            >
              &#10006;
            </i>
            <ul className="list-none">
              <li className="p-main-text m-10 cursor-pointer text-light-header dark:text-dark-header text-2xl text-center font-serif transition-all hover:text-hover-light dark:hover:text-hover-dark hover:transition-all">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="p-main-text m-10 cursor-pointer text-light-header  dark:text-dark-header text-2xl text-center font-serif transition-all hover:text-hover-light dark:hover:text-hover-dark hover:transition-all">
                <NavLink>Category</NavLink>
              </li>
              <li className="p-main-text m-10 cursor-pointer text-light-header dark:text-dark-header text-2xl text-center font-serif transition-all hover:text-hover-light dark:hover:text-hover-dark hover:transition-all">
                <NavLink to="/about">About</NavLink>
              </li>
              <li className="p-main-text m-10 cursor-pointer text-light-header dark:text-dark-header text-2xl text-center font-serif transition-all hover:text-hover-light dark:hover:text-hover-dark hover:transition-all">
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfahFvHiyZ-og2lY-GyJzTlNq5EW-ajR5mm7PFL4zM4XBolug/viewform">
                  Join Community
                </Link>
              </li>
            </ul>
            <div className="absolute w-full bottom-0 p-4 flex justify-evenly items-center">
              <Link
                to="https://www.linkedin.com/company/coder-s-den-94/"
                className=" m-2 p-main-text"
              >
                <i className="bx bxl-linkedin-square bx-sm text-light-header dark:text-border-dark  cursor-pointer hover:text-hover-light dark:hover:text-hover-dark"></i>
              </Link>
              <Link
                to="https://twitter.com/CodersDen94"
                className=" m-2 p-main-text"
              >
                <i className="bx bxl-twitter bx-sm text-light-header dark:text-border-dark  cursor-pointer hover:text-hover-light dark:hover:text-hover-dark"></i>
              </Link>
              <Link
                to="https://m.youtube.com/channel/UCSaPpb0ORIIlGDT8Tieq0Iw"
                className=" m-2 p-main-text"
              >
                <i className="bx bxl-youtube bx-sm text-light-header dark:text-border-dark  cursor-pointer hover:text-hover-light dark:hover:text-hover-dark"></i>
              </Link>
            </div>
          </div>
        </div>

        {/* DeskTop Screen Sizes */}
        <ul className="mr-4 hidden min-w-[500px] md:min-w-[300px] list-none md:flex flex-1 justify-center items-center">
          <li className="p-main-text mx-4 cursor-pointer hover:text-hover-light dark:hover:text-hover-dark">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="p-main-text mx-4 cursor-pointer hover:text-hover-light dark:hover:text-hover-dark">
            <Link
              to="/"
              className="flex items-center justify-center"
              onClick={() => setToogleCategory(!toogleCategory)}
            >
              Category
              <i className="bx bx-chevron-down bx-sm"></i>
            </Link>
          </li>

          {/* Category DropDown Gives Me Tomuch Stress Make I Go Sleep Small  */}
          <div className={categoryClass.join(" ")}>
            <ul className="flex flex-col justify-around items-center p-main-text text-left">
              <li
                className=" p-2 w-full 
          flex justify-start items-center text-hover-dark font-extrabold hover:bg-dark-text hover:transition-all cursor-pointer"
              >
                <i className="bx bxl-dev-to bx-md"></i>
                <a href="#dev">FrontEnd JS</a>
                <i className="bx bx-right-arrow-alt bx-md bx-fade-right-hover"></i>
              </li>
              <li
                className=" p-2 w-full 
          flex justify-start items-center text-[#ff3c00] font-extrabold hover:bg-dark-text hover:transition-all cursor-pointer"
              >
                <i className="bx bxs-lock-open-alt bx-md"></i>
                <a href="#dev">Hacks</a>
                <i className="bx bx-right-arrow-alt bx-md bx-fade-right-hover"></i>
              </li>
              <li
                className=" p-2 w-full 
          flex justify-start items-center text-[#1d7e1d] font-extrabold hover:bg-dark-text hover:transition-all cursor-pointer"
              >
                <i className="bx bxl-nodejs bx-md"></i>
                <a href="#dev">BackEnd JS</a>
                <i className="bx bx-right-arrow-alt bx-md bx-fade-right-hover"></i>
              </li>
              <li
                className=" p-2 w-full 
          flex justify-start items-center text-hover-light font-extrabold hover:bg-dark-text hover:transition-all cursor-pointer"
              >
                <i className="bx bxs-lock-alt bx-md"></i>
                <a href="#dev">Security</a>
                <i className="bx bx-right-arrow-alt bx-md bx-fade-right-hover"></i>
              </li>
              <li
                className=" p-2 w-full 
          flex justify-start items-center text-[#6f00ff] font-extrabold hover:bg-dark-text hover:transition-all cursor-pointer"
              >
                <i className="bx bxl-sketch bx-md"></i>
                <a href="#dev">Design</a>
                <i className="bx bx-right-arrow-alt bx-md bx-fade-right-hover"></i>
              </li>
              <li
                className=" p-2 w-full 
          flex justify-start items-center text-hover-dark font-extrabold hover:bg-dark-text hover:transition-all cursor-pointer"
              >
                <i className="bx bx-code-block bx-md"></i>
                <a href="#dev">DSA</a>
                <i className="bx bx-right-arrow-alt bx-md bx-fade-right-hover"></i>
              </li>
              <li
                className=" p-2 w-full 
          flex justify-start items-center text-[rgb(255,60,0)]  font-extrabold hover:bg-dark-text hover:transition-all cursor-pointer"
              >
                <i className="bx bxs-cog bx-md"></i>
                <a href="#dev">Optimization</a>
                <i className="bx bx-right-arrow-alt bx-md bx-fade-right-hover"></i>
              </li>
              <li
                className=" p-2 w-full 
          flex justify-start items-center text-hover-light font-extrabold hover:bg-dark-text hover:transition-all cursor-pointer"
              >
                <i className="bx bx-brain bx-md"></i>
                <a href="#dev">Debugging</a>
                <i className="bx bx-right-arrow-alt bx-md bx-fade-right-hover"></i>
              </li>
              <li
                className=" p-2 w-full 
          flex justify-start items-center text-hover-dark font-extrabold hover:bg-dark-text hover:transition-all cursor-pointer"
              >
                <i className="bx bx-happy bx-md"></i>
                <a href="#dev"> View More!</a>
                <i className="bx bx-right-arrow-alt bx-md bx-fade-right-hover"></i>
              </li>
            </ul>
          </div>

          <li className="p-main-text mx-4 cursor-pointer hover:text-hover-light dark:hover:text-hover-dark">
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
        <header className="flex justify-end md:flex-1 md:justify-normal  text-hover-dark">
          <i className="bx bx-code-alt self-end sm:bx-md text-3xl md:text-5xl lg:text-6xl "></i>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-serif">
            CodersDen
          </h1>
        </header>

        {/* ANOTHER USER iCON FOR MOBILE SCREEN */}
        <span
          className="md:hidden p-main-text cursor-pointer hover:text-hover-light dark:hover:text-hover-dark  p-3 dark:text-border-dark"
          onClick={() => setToggleuser(!toogleUser)}
        >
          <Link to={isLoginIn ? null : "/createaccount"}>{profileImg}</Link>
        </span>
        {/* 😂😂😂😂😂 */}
        <div className="hidden md:flex items-center justify-end">
          <a
            to="https://docs.google.com/forms/d/e/1FAIpQLSfahFvHiyZ-og2lY-GyJzTlNq5EW-ajR5mm7PFL4zM4XBolug/viewform"
            target="_blank"
            className="hidden mx-4 no-underline cursor-pointer transition-all: hover:text-hover-light dark:hover:text-hover-dark p-main-text lg:block"
          >
            Join Community
          </a>
          <div className="hidden w-[1px] h-6 bg-border-light dark:bg-border-dark mx-2 lg:block" />
          <div className="flex items-center justify-center">
            <Link
              to="https://www.linkedin.com/company/coder-s-den-94/"
              className=" m-2 p-main-text"
            >
              <i className="bx bxl-linkedin-square bx-sm text-light-header dark:text-border-dark  cursor-pointer hover:text-hover-light dark:hover:text-hover-dark"></i>
            </Link>
            <Link
              to="https://twitter.com/CodersDen94"
              className=" m-2 p-main-text"
            >
              <i className="bx bxl-twitter bx-sm text-light-header dark:text-border-dark  cursor-pointer hover:text-hover-light dark:hover:text-hover-dark"></i>
            </Link>
            <Link
              to="https://m.youtube.com/channel/UCSaPpb0ORIIlGDT8Tieq0Iw"
              className=" m-2 p-main-text"
            >
              <i className="bx bxl-youtube bx-sm text-light-header dark:text-border-dark  cursor-pointer hover:text-hover-light dark:hover:text-hover-dark"></i>
            </Link>
          </div>
          <div className=" w-[1px] h-6 bg-border-light dark:bg-border-dark mx-2 lg:block" />
          <span
            // href="#login"
            className="m-2 p-main-text"
            onClick={() => setToggleuser(!toogleUser)}
          >
            {profileImg}
          </span>
        </div>
        <div className={formClass.join(" ")}>
          {isLoginIn ? (
            isAdmin ? (
              <Admin close={setToggleuser} />
            ) : (
              <User />
            )
          ) : (
            <Auth />
          )}
        </div>
      </nav>
      <AddAdmin />
    </>
  );
};

export default Navbar;
