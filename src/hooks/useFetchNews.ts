import { useState, useEffect, useCallback } from "react";
import { fetchNews } from "../api/newApi";
import { Article } from "../types/newsTypes";

const useFetchNews = (
  initialQuery: string = "latest",
  initialPage: number = 1
) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState<string>(initialQuery);
  const [page, setPage] = useState<number>(initialPage);
  const [noResults, setNoResults] = useState<boolean>(false);

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    setError(null);
    setNoResults(false);
    try {
      const newsData = await fetchNews(query, page);
      if (newsData === null) {
        setNoResults(true);
      } else {
        setArticles((prevArticles) =>
          page === 1 ? newsData : [...prevArticles, ...newsData]
        );
      }
    } catch (err) {
      setError("Error fetching articles");
    } finally {
      setLoading(false);
    }
  }, [query, page]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1); 
  };

   const handlePageChange = (
     event: React.ChangeEvent<unknown>,
     newPage: number
   ) => {
     setPage(newPage);
   };

  return {
    articles,
    loading,
    error,
    noResults,
    handleSearch,
    handlePageChange,
    page,
  };
};

export default useFetchNews;
