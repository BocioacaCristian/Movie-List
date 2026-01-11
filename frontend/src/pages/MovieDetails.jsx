import * as React from "react";
import "../css/MovieDetails.css"
import { useParams } from "react-router-dom";
import FavoriteButton from "../components/FavoriteButton";
import { getMovieDetails } from "../services/api";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function loadMovieDetails() {
      try {
        setLoading(true);
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (err) {
        console.log(err);
        setError("No movie details found ...");
      } finally {
        setLoading(false);
      }
    }

    if (id) {
      loadMovieDetails();
    }
  }, [id]);

  if (loading) return <div className="loading-state">Loading details....</div>;
  if (error) return <div className="error-state">{error}</div>;
  if (!movie) return null;

  return (
    <div className="movie-details-container">
      <div className="movie-details-card">
        <div className="details-poster">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          ) : (
            <div className="no-poster-details">No Image available ...</div>
          )}
        </div>

        <div className="details-content">
          <div className="details-header">
            <div>
              <h1 className="movie-title">{movie.title}</h1>
              <div className="movie-meta">
                {movie.vote_average && (
                  <span className="rating-badge">
                    {movie.vote_average.toFixed(1)}
                  </span>
                )}
                {movie.release_date && (
                  <span>{movie.release_date.split("-")[0]}</span>
                )}

                {movie.runTime > 0 && <span>{movie.runtime} min</span>}
              </div>
            </div>

            <FavoriteButton movie={movie} className="large" />
          </div>

          <div className="info-grid">
            <div className="info-item">
              <h4>Genres</h4>
              <p>
                {movie.genres?.map((g) => g.name).join(", ") || "N/A"}
                </p>
            </div>
            <div className="info-item">
              <h4>Status</h4>
              <p>{movie.status}</p>
            </div>
            <div className="info-item">
              <h4>Original Language</h4>
              <p>{movie.original_language?.toUpperCase()}</p>
            </div>
          </div>

          <div className="overview-section">
            <h3>Overview</h3>
            <p className="overview-text">{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
