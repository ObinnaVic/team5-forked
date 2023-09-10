import React from "react";
import { useParams } from "react-router-dom";
const ArticlePost = ({ articles }) => {
  const { post } = useParams();

  const articleSelected = articles.find((article) => article.id === post);
  //   console.log(articleSelected.map(item));
  const test2 = {
    ...articleSelected,
  };
  console.log(test2.editorHtml);
  if (!articleSelected) {
    return <div>Article not found</div>;
  }

  //   const text = (
  //     <div
  //       className="text-gray-600 font-sans mb-4"
  //       dangerouslySetInnerHTML={{
  //         __html: articles.editorHtml,
  //       }}
  //     />
  //   );

  return (
    <div className="m-10">
      <img
        src={articleSelected.thumbnail}
        alt="Banner"
        className="w-full h-60 object-cover"
      />
      <p className="text-sm text-gray-500 mt-2">
        Author: {articleSelected.author}
      </p>
      <h2 className="text-2xl font-semibold mt-2">{articleSelected.title}</h2>
      <p className="text-sm text-gray-500 mt-2">{articleSelected.category}</p>
      {/* <div
        dangerouslySetInnerHTML={{
          __html: text.props.dangerouslySetInnerHTML.__html,
        }}
      /> */}
      <div dangerouslySetInnerHTML={{ __html: test2.editorHtml }} />
    </div>
  );
};

export default ArticlePost;
