const API_Key = "16749c97239c9277dfcf8c8936ceac22";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const responce = await fetch(`${BASE_URL}/movie/popular?api_key=${API_Key}`);
  const data = await responce.json();
  return data.results;
};
export const serarchMovies = async (query) => {
  const responce = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_Key}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await responce.json();
  return data.results;
};
