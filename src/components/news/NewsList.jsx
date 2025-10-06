import React, { useState, useEffect } from "react";
import { getTopHeadlines } from "../../services/NewsApi2";
import ArticleCard from "./ArticleCard";
import LoadingSpinner from "../common/LoadingSpinner";
import ErrorDisplay from "../common/ErrorDisplay";

const NewsList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchnews = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getTopHeadlines(null, "us", 1, 90);
        setArticles(data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchnews();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorDisplay message={error} />;
  }

  if (!articles || articles.length === 0) {
    return <div className="text-center p-5">No news articles available.</div>;
  }

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {articles.map((article, index) => (
          <ArticleCard key={article.url || index} article={article} />
        ))}
      </div>
    </>
  );
};

export default NewsList;
