import React from "react";
import { Link } from "react-router-dom";
import images from "../../../UI/constants/images";
import { useGlobalContext } from "../../context";
const Admin = ({ close }) => {
  const {
    getUser,
    name,
    email,
    setEmail,
    setName,
    setIsLogin,
    adminModal,
    setAdminModal,
  } = useGlobalContext();

  const logOut = () => {
    localStorage.removeItem("user");
    getUser();
    setEmail("");
    setName("");
    setIsLogin(false);
  };

  const displayModal = () => {
    setAdminModal(!adminModal);
    close(false);
  };
  return (
    <>
      <div className="relative">
        <div className="p-0 h-28 bg-light-footer rounded-t-xl relative" />
        <div className="absolute left-0 top-8 rounded-r-full bg-dark-body dark:bg-light-body p-1 flex items-center text-hover-dark gap-1 cursor-pointer group">
          <p className="hidden group-hover:block transition duration-300 ease-in-out">
            Admin
          </p>
          <i className="bx bxs-user-check bx-sm"></i>
        </div>

        <img
          className="rounded-full w-16 absolute left-0 right-0 m-auto top-20 ring-4 ring-light-body"
          src={images.avatar2}
          alt=""
        />
        <div className="flex flex-col justify-center items-center mt-12 font-medium font-sans dark:text-dark-text">
          <p className="text-sm">{email}</p>
          <h6 className="mt-2 font-serif text-3xl">{name}</h6>
          <Link
            to="/admin/jamesisrael/new-post"
            className="capitalize text-xs text-hover-dark mt-2 cursor-pointer flex items-center gap-1 dark:text-light-body dark:hover:text-border-light "
          >
            <i className="bx bxs-edit bx-sm"></i> Write Code
          </Link>
        </div>
        <div className="mt-5 flex-col flex justify-center items-center mx-auto px-2 dark:text-dark-text">
          <div
            className="flex  items-end justify-between w-full py-2 cursor-pointer
          border-b border-b-border-light"
          >
            <i className="bx bxs-user-detail bx-sm text-hover-dark"></i>
            <Link
              to="/jamesisrael"
              className="flex-1 self-center pl-1 text-sm dark:hover:text-border-light"
            >
              Profile
            </Link>
            <i className="bx bx-chevron-right bx-sm"></i>
          </div>
          <div
            className="flex  items-end justify-between w-full py-2 cursor-pointer
          border-b border-b-border-light"
          >
            <i className="bx bxs-bell-ring bx-sm text-hover-dark"></i>
            <p className="flex-1 self-center pl-1 text-sm  dark:hover:text-border-light">
              Notification
            </p>
            <i className="bx bx-chevron-right bx-sm"></i>
          </div>
          <div className="flex  items-end justify-between w-full py-2 cursor-pointer">
            <i className="bx bxs-cog bx-sm text-hover-dark"></i>
            <p className="flex-1 self-center pl-1 text-sm  dark:hover:text-border-light">
              Settings
            </p>
            <i className="bx bx-chevron-right bx-sm"></i>
          </div>
          {/* Others */}
          <div className="flex mt-4  items-end justify-between w-full py-2 cursor-pointer border-t border-t-border-light">
            <i className="bx bxs-key bx-sm text-hover-dark"></i>
            <p
              className="flex-1 self-center pl-1 text-sm  dark:hover:text-border-light"
              onClick={displayModal}
            >
              Grant Admin Verification
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

export default Admin;
