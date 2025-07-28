import React from "react";

const ArticleCard = ({ article }) => {
  const imageUrl =
    article.urlToImage || "https:://placehold.co/150x150?text=No+Image";

  return (
    <div className="border border-gray-200 rounded-lg shadow-md p-4 max-w-xs flex-none">
      <img
        src={imageUrl}
        alt={article.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
      <p className="text-sm text-gray-600 mb-3">
        {article.source.name} -{" "}
        {new Date(article.publishedAt).toLocaleDateString()}
      </p>
      <p className="text-gray-700 text-base mb-4">
        {article.description
          ? article.description.substring(0, 100) + "..."
          : "No description available."}
      </p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-blue-600 hover:underline"
      >
        Read More
      </a>
    </div>
  );
};

export default ArticleCard;
