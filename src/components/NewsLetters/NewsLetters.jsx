import React from "react";
import images from "../../UI/constants/images";
const NewsLetters = () => (
  <>
    <form id="subscribe" className="text-dark-header flex flex-col gap-16">
      {/* <div className="flex justifyy-center items-center"></div> */}
      <h2 className="font-serif capitalize  max-w-md ">
        Subscribe to our newletters
      </h2>
      <div className="relative flex items-center justify-between">
        <input
          type="text"
          className="bg-cards-light w-full p-3 text-light-text
          rounded-sm mr-3 outline-none
          focus-within:bg-opacity-0 focus-within:text-dark-text
          focus-within:border
          focus-within:border-border-dark"
          placeholder="Enter Your Email"
        />
        <button
          className="p-1.5 absolute right-5 bg-light-footer dark:bg-dark-body rounded-sm text-center"
          aria-label="subscribe emails"
          type="submit"
        >
          <i className="bx bx-message bx-sm"></i>
        </button>
      </div>
      <img
        className="hidden lg:block w-52 absolute right-1 max-h-40"
        src={images.subscribe}
        alt="subscribe-arrow"
      />
    </form>
  </>
);

export default NewsLetters;
