import React from "react";
import { NavLink } from "react-router-dom";

const Auth = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-around
       text-center p-4"
      >
        <NavLink
          to="/signin"
          className="p-2 m-2 w-full bg-hover-dark text-cards-light hover:outline-1 cursor-pointer rounded-md hover:bg-[#5b5be2]"
        >
          Login
        </NavLink>
        <NavLink
          to="/createaccount"
          className="p-2 m-2 w-full bg-hover-dark text-cards-light hover:outline-1 cursor-pointer rounded-md hover:bg-[#5b5be2]"
        >
          Sign up
        </NavLink>
      </div>
    </>
  );
};

export default Auth;
