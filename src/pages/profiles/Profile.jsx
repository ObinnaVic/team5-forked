import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../components/context";
import Article from "../../components/articlesPage/Articles";
import { articles } from "../../UI/constants/data";
import SingleComment from "../../components/SingleComment/SingleComment";
import images from "../../UI/constants/images";
import Comments from "../../components/Comments/Comments";
import { doc, updateDoc } from "firebase/firestore";

const Profile = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [inputComment, setInputComment] = useState("");
  const [A, setA] = useState(null);
  const {
    displayedPost,
    setDisplayedPost,
    name,
    email,
    setScroll,
    isAdmin,
    articlesData,
    updatedId,
    commentsAvailability,
  } = useGlobalContext();

    console.log(articlesData);
  // Function To Handle Search To Filter Posts
  const handleSearchValue = (e) => {
    let value = e.target.value;
    setInputSearch(value);
    console.log(inputSearch);
  };
  const handleCommentValue = (e) => {
    let value = e.target.value;
    setInputComment(value);
  };

  const sendComment = (event) => {
    if (event.key === "Enter") sendCommentHandler();
  };

  const inputField = useMemo(
    () => (
      <input
        type="search"
        name="filter-post"
        id="filterPost"
        className="bg-light-body dark:bg-dark-body placeholder:text-light-text dark:placeholder:text-dark-text border p-2 
              rounded-3xl flex-1 pl-8"
        placeholder="Filter Posts"
        value={inputSearch}
        onChange={(e) => handleSearchValue(e)}
      />
    ),
    [inputSearch]
  );

  const commentInputField = useMemo(
    () => (
      <textarea
        className="w-full rounded-3xl border dark:border-none outline-none text-light-text p-5 pr-16 overflow-y-hidden text-start"
        type="text"
        name="comment"
        id="comment"
        placeholder="Write Comment..."
        value={inputComment}
        onChange={(e) => handleCommentValue(e)}
        onKeyDown={(e) => sendComment(e)}
      ></textarea>
    ),
    [inputComment]
  );
  // Submit Button To Add Comment To List

  const sendCommentHandler = async () => {
    if (inputComment.trim() === "") return null;
    const newComment = {
      username: name,
      email: email,
      img: images.avatar4,
      message: inputComment,
    };

    setA(newComment)
    console.log(newComment);

    const arr = [];
    arr.push(newComment);
    
    setDisplayedPost(arr);


    // setAddAdmin("");
    const updateRole = { comments: comments.push(newComment) };
    const userDoc = doc(db, "Posts", updatedId);
    await updateDoc(userDoc, updateRole);


    // updateComments.push(newComment);
    setScroll(true);
    setInputComment("");
  };

  const filteredArticle = articlesData.filter((article) =>
    article.title.toLowerCase().includes(inputSearch.trim().toLowerCase())
  );
  const filteredPosts = filteredArticle.map((article, id) => {
    return (
      <Article
        key={id}
        headLine={article.title}
        // datePosted={article.datePosted.toLocaleDateString()}
        thumbnail={article.thumbnail}
        post={article}
        inputComment={inputComment}
      />
    );
  });

  const posts = articlesData.map((post, id) => {
    return (
      <Article
        key={id}
        headLine={post.title}
        // datePosted={post.datePosted.toLocaleDateString()}
        thumbnail={post.thumbnail}
        post={post}
      />
    );
  });
  return (
    <div className="px-5 lg:px-16 w-full flex justify-between bg-light-body dark:bg-dark-body p-4">
      <div className="w-full flex flex-col items-start justify-between md:w-1/2">
        <header className="text-light-header dark:text-dark-header font-sans flex w-full justify-between p-2">
          <h1 className="text-3xl">Hello, {name}</h1>
          {isAdmin && (
            <Link
              to="/admin/jamesisrael/new-post"
              className="capitalize text-xs text-hover-dark mt-2 cursor-pointer flex items-center gap-1 hover:text-dark-footer dark:text-light-body dark:hover:text-border-light border p-2 rounded-3xl"
            >
              <i className="bx bxs-edit bx-sm"></i> Write Code
            </Link>
          )}
        </header>
        <nav className="text-light-text dark:text-dark-text border-b border-b-border-light mb-4 dark:border-b-border-dark mx-auto w-full">
          <ul className="p-1 font-sans font-semibold gap-4 flex  items-start my-3">
            <li className="hover:text-hover-dark cursor-pointer">
              Active Post
            </li>
            {/* Search Bar Here  */}
            {inputField}
          </ul>
        </nav>

        {/* Posts */}
        <div className="w-full flex flex-col justify-start gap-5 items-center h-[25rem] overflow-hidden overflow-y-scroll p-10 pb-10">
          {inputSearch ? (
            filteredArticle.length === 0 ? (
              <p className="text-light-header dark:text-dark-header">
                {inputSearch} Not Found
              </p>
            ) : (
              filteredPosts
            )
          ) : (
            posts
          )}
        </div>
      </div>
      <aside className="hidden md:flex flex-col w-2/5 dark:bg-[#111111] bg-cards-light rounded-md h-[35rem] p-4  text-light-text dark:text-dark-text relative">
        {commentsAvailability && (
          <p className="p-2 text-base text-center font-bold text-border-light m-auto">
            Click On A Post To Read and Respond To Comments
          </p>
        )}
        {displayedPost.length >= 1 && (
          <div className=" border p-1.5 rounded-md mb-3">
            <h5 className="pb-4 font-sans">{displayedPost.headLine}</h5>
          </div>
        )}
        {displayedPost.length >= 1 && (
          <Comments messages={inputComment}>
            {
              displayedPost.map((item) => {
                return (
                  <SingleComment
                    name={item.username}
                    img={item.img}
                    message={item.message}
                  />
                );
              })
            }
          </Comments>
        )}
        <div className="absolute bottom-4 p-0 w-[85%] font-sans">
          {commentInputField}
          <button
            className="absolute m-auto top-0 bottom-0 right-2 px-1 rounded-tr-full rounded-br-full  text-hover-dark outline-none hover:scale-90 transition-transform duration-200 ease-in"
            onClick={sendCommentHandler}
          >
            <i className="bx bxs-send bx-sm"></i>
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Profile;
