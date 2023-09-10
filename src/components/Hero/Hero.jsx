import React from "react";

const HeroSlide = ({ category, author, date, header, content, image }) => {
  return (
    <div className="relative w-full min-w-full flex flex-col lg:flex-row p-8 md:p-16 justify-between items-center gap-4 bg-light-body dark:bg-dark-body -z-50">
      <div className="mx-2 w-full">
        <h1 className="relative inline-block font-bold lg:font-extrabold mb-10 text-light-header dark:text-dark-header">
          {category}
          {/* <span class="absolute inset-0 bg-hover-dark opacity-75 -z-10 top-12 bottom-3 w-full"></span> */}
        </h1>
        <small className="block -mt-5 dark:text-dark-text py-4">
          {author} - <span>{date}</span>
        </small>
        <h2 className="text-light-header dark:text-dark-header font-semibold">
          {header}
        </h2>
        <div>
          <p className="p-main-text pt-4 flex items-center justify-center">
            {content}
            <a href="#post" className="p-2 bg-hover-dark text-dark-text">
              <i className="bx bx-right-arrow-alt"></i>
            </a>
          </p>
        </div>
      </div>
      <div className="w-full">
        <img className="rounded-xl w-full" src={image} alt={category} />
      </div>
    </div>
  );
};

export default HeroSlide;
