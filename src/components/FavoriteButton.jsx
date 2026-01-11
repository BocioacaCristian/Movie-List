import "../css/FavoriteButton.css";
import { useMovieContext } from "../context/MovieContext";

function FavoriteButton({ movie, className = "" }) {
  const { isFavorite, addToFavorites, removeFavorites } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function handleFavoriteClick(e) {
    e.preventDefault();
    e.stopPropagation();

    if (favorite) {
      removeFavorites(movie.id);
    } else {
      addToFavorites(movie);
    }
  }

  return (
    <button
      className={`fav-btn ${favorite ? "active" : ""} ${className}`}
      onClick={handleFavoriteClick}
      aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
    >
      ♡
    </button>
  );
}

export default FavoriteButton;
