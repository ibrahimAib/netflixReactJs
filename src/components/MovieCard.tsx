import { useMovieContext } from "../contexts/MovieContext";
import "../css/MovieCard.css";

function MovieCard({ movie }) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);

  function onLikeClick(e) {
    e.preventDefault();
    if (!favorite) addToFavorites(movie);
    else removeFromFavorites(movie.id);
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          alt=""
        />
        <div className="movie-overlay">
          <button
            onClick={onLikeClick}
            className={`favorite-btn ${favorite ? "active" : ""}`}
          >
            ♥
          </button>
        </div>
      </div>

      <div className="movie-info">
        <a
          rel="stylesheet"
          href={`https://www.google.com/search?q=${movie.title} مترجم`}
          target="_blank" 
        >
          <h3>{movie.title}</h3>
        </a>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}
export default MovieCard;
