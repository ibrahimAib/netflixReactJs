import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";
import "../css/Favorites.css";
function Favorites() {
  const { favorites, isFavorite } = useMovieContext();
  if (favorites.length != 0) {
    return (
      <div>
        <h1>Favorites:</h1>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        </div>
    );
  }
  return (
      <div>
        <h1>No Favorites Movies Yet.</h1>
        <p>Start adding movies to your favorites adn thay will appear hear!!</p>
      </div>
  );
}

export default Favorites;
