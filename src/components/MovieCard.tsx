import '../css/MovieCard.css'

function MovieCard({ movie }) {
  const handleLike = () => {
    console.log('liked')
  };
  return (
    <div className='movie-card'>
      <div className='movie-poster'>
        <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt="" />
        <div className='movie-overlay'>
            <button onClick={handleLike} className='favorite-btn'>♥</button>
        </div>
      </div>

      <div className='movie-info'>
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}
export default MovieCard;
