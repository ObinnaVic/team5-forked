import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import images from "../../UI/constants/images";
import HeaderAndFilter from "./mainHeader";

const Main = () => {
  const { articlesData } = useGlobalContext();
  // const [article, setArticle] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Latest Articles");

  // useEffect(() => {
  //     setArticle(articlesData);
  // }, []);

  const showSeeAllLink = articlesData.length > 3 * 2;
  const articlesToDisplay = showSeeAllLink
    ? articlesData.slice(0, 3 * 2)
    : articlesData;

  const filteredArticles = articlesToDisplay.filter((article) => {
    return (
      selectedCategory === "Latest Articles" ||
      article.category === selectedCategory
    );
  });

  const categories = [
    "Latest Articles",
    "Javascript",
    "Design",
    "Algorithms",
    "UI/UX",
    "Security",
  ];

  return (
    <div className="w-full mx-10">
      <HeaderAndFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={(category) => setSelectedCategory(category)}
      />
      <div className="m-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredArticles.length === 0 ? (
          <div className="text-center text-gray-500">
            No articles found for "{selectedCategory}".
          </div>
        ) : (
          filteredArticles.map((article, index) => {
            const text = (
              <div
                className="text-gray-600 font-sans mb-4"
                dangerouslySetInnerHTML={{
                  __html: article.editorHtml,
                }}
              />
            );
            // const JsonText = JSON.stringify(text);
            console.log(text);
            return (
              <div
                key={index}
                className=" relative max-w-[370px] bg-light-body rounded-lg p-4 overflow-hidden group hover:bg-cards-light transition duration-300"
              >
                <img
                  src={article.thumbnail}
                  alt="Banner"
                  className="w-full h-60 object-cover mx-auto rounded"
                />
                <div className="p-4 flex flex-col item-center justify-center gap-4">
                  <div className="flex items-center mb-2">
                    <img
                      className="rounded-full w-6 ring-4 ring-light-body mr-2"
                      src={images.avatar2}
                      alt=""
                    />
                    <p className="text-sm text-gray-500 font-sans">
                      {" "}
                      {article.author}
                    </p>
                  </div>
                  <h2 className="text-xl font-semibold font-serif leading-tight">
                    {article.title}
                  </h2>
                  <p className="text-sm text-gray-500 mb-2 font-sans">
                    {article.category}
                  </p>
                  {/* {truncateText(text, 100)} */}
                  <div
                    dangerouslySetInnerHTML={{
                      __html: text.props.dangerouslySetInnerHTML.__html.slice(
                        0,
                        100
                      ),
                    }}
                  />
                  <div>
                    <Link
                      to={`/ArticlePost/${article.id}`}
                      className="p-2 bg-hover-dark text-dark-text absolute bottom-5"
                    >
                      <i className="bx bx-right-arrow-alt"></i>
                    </Link>
                  </div>
                  {/* <p className="text-gray-600 font-sans mb-4 pb-2">
                    {truncateText(articles.content, 100)}
                  </p> */}
                </div>
              </div>
            );
          })
        )}
      </div>
      <div className="w-20 ml-auto text-orange-500 hover:underline mt-4">
        {showSeeAllLink && (
          <Link
            to="/subArticles"
            className="text-orange-500 hover:underline text-right"
          >
            See All
          </Link>
        )}
      </div>
    </div>
  );
};

export default Main;
