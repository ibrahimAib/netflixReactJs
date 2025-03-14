import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Home.css";
import { serarchMovies, getPopularMovies } from "../serveses/api.js";
import Search from "../components/Search.js";
function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handelSearch  = async  (e) => {
    e.preventDefault();
    try{
      setLoading(true)
      const searchResult = await serarchMovies(searchQuery)
      setMovies(searchResult)
      setError(null)
    }catch(err){
      setError("Fail to load movies..");
      console.log(err)
    }finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(err);
        setError("Fail to load movies..");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, [movies]);
  return (
    <div className="home ">
      <Search
        handelSearch={handelSearch}
        searchQuery={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      
        {error && <h1>{error}</h1>}
        {loading ? (
          <h1>Loading..</h1>
        ) : (
          <div className="movies-grid">
            {movies.map(
              (movie) =>
                movie.title.toLocaleLowerCase().startsWith(searchQuery) && (
                  <MovieCard key={movie.id} movie={movie} />
                )
            )}
          </div>
        )}
    </div>
  );
}

export default Home;
