import React from "react";
import { Link } from "react-router-dom";
import images from "../../../UI/constants/images";
import { useGlobalContext } from "../../context";
const User = () => {
  const { getUser, name, email, setEmail, setName, setIsLogin } =
    useGlobalContext();

  const logOut = () => {
    localStorage.removeItem("user");
    getUser();
    setEmail("");
    setName("");
    setIsLogin(false);
  };
  return (
    <>
      <div className="relative">
        <div className="p-0 h-28 bg-light-footer rounded-t-xl" />
        <img
          className="rounded-full w-16 absolute left-0 right-0 m-auto top-20 ring-4 ring-light-body"
          src={images.avatar}
          alt=""
        />
        <div className="flex flex-col justify-center items-center mt-12 font-medium font-sans dark:text-dark-text">
          <p className="text-sm">{email}</p>
          <h6 className="mt-2 font-serif text-3xl">{name}</h6>
        </div>
        <div className="mt-5 flex-col flex justify-center items-center mx-auto px-2 dark:text-dark-text">
          <div
            className="flex  items-end justify-between w-full py-2 cursor-pointer
          border-b border-b-border-light"
          >
            <i className="bx bxs-user-detail bx-sm text-hover-dark"></i>
            <Link
              to={"/jamesisrael"}
              className="flex-1 self-center pl-1 text-sm dark:hover:text-border-light"
            >
              Profile
            </Link>
            <i className="bx bx-chevron-right bx-sm"></i>
          </div>
          <div className="flex  items-end justify-between w-full py-2 cursor-pointer">
            <i className="bx bxs-cog bx-sm text-hover-dark"></i>
            <p className="flex-1 self-center pl-1 text-sm  dark:hover:text-border-light">
              Settings
            </p>
            <i className="bx bx-chevron-right bx-sm"></i>
          </div>
          <div className="flex  items-end justify-between w-full py-2 cursor-pointer border-t border-t-border-light">
            <i className="bx bxs-help-circle bx-sm text-hover-dark"></i>
            <p className="flex-1 self-center pl-1 text-sm  dark:hover:text-border-light">
              Feedback
            </p>
            <i className="bx bx-chevron-right bx-sm"></i>
          </div>
          {/* Logout */}
          <div
            className="flex pt-4 justify-between w-full py-2 
            self-end cursor-pointer
          border-t border-t-border-light mt-5"
          >
            <i className="bx bx-log-out bx-sm text-hover-dark"></i>
            <Link
              to="/signin"
              className="flex-1 self-center pl-1
            text-sm dark:hover:text-border-light"
              onClick={logOut}
            >
              Login Out
            </Link>
            <i className="bx bx-chevron-right bx-sm"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
