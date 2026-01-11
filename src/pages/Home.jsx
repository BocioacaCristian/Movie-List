import * as React from "react";
import "../css/Home.css";

import MovieCard from "../components/MovieCard";

// services
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [movies, setMovies] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);

  const loadPopularMovies = async (pageNumber = 1) => {
    if (pageNumber === 1) setLoading(true);

    try {
      const newMovies = await getPopularMovies(pageNumber);
      
      setMovies((prevMovies) => {
        // If page 1, replace. If > 1, append
        return pageNumber === 1 ? newMovies : [...prevMovies, ...newMovies];
      });
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to load movies...");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    loadPopularMovies(1);
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) {
      setPage(1);
      await loadPopularMovies();
      return;
    }

    if (loading) return;

    setLoading(true);
    try {
      const searchResult = await searchMovies(searchQuery);
      setMovies(searchResult);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies ...");
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    loadPopularMovies(nextPage);
  };

  // When a movie is clicked, to redirect to movies details
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading && page === 1 ? (
        <div className="loading">Loading....</div>
      ) : (
        <>
          <div className="movies-grid">
            {movies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
          {/* Only show Load more if not searching */}
          {!searchQuery && (
            <div className="load-more-container">
              <button
                className="load-more-btn"
                onClick={handleLoadMore}
                disabled={loading}
              >
                {loading ? "Loading..." : "Load More"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
