import { useNavigate } from "react-router-dom";
import "../css/MovieCard.css";

import FavoriteButton from "./FavoriteButton";

function MovieCard({ movie }) {
  const navigate = useNavigate();

  function onCardClick() {
    navigate(`/movie/${movie.id}`);
  }
  return (
    <div className="movie-card" onClick={onCardClick}>
      <div className="movie-poster">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <div className="no-poster"> No Image</div>
        )}

        <div className="movie-overlay">
          <FavoriteButton movie={movie} className="favorite-btn" />
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
