import React, { useState } from "react";
import ArticleForm from "./articleForm";
import { useGlobalContext } from "../context";


const CreateArticle = () => {
  const {addPost} = useGlobalContext();
  const handleSubmit = (articleData) => {
    //handle submit buttion action right here!
    addPost(articleData)
  };

  return (
    <div className="w-full bg-light-body dark:text-dark-text pt-24 dark:bg-dark-body">
      <ArticleForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateArticle;
