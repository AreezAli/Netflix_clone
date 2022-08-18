// const request = {
//   fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
//   fetchNetflixOriginal: `https://api.themoviedb.org/3/discover/tv?api=${API_KEY}&with_networks=213`,
//   fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//   fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api=${API_KEY}&with_genres=28`,
//   fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api=${API_KEY}&with_genres=235`,
//   fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api=${API_KEY}&with_genres=27`,
//   fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api=${API_KEY}&with_genres=10749`,
//   fetcDocumentries: `https://api.themoviedb.org/3/discover/movie?api=${API_KEY}&with_genres=99`,
// };

// export default request;

const API_KEY = process.env.REACT_APP_API_KEY;
const request = {
  fetchMovie: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&`,
  fetchNetflixOriginal: `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=action&page=1`,
  fetchComedyMovies: `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=comedy&page=1`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=horror&page=1`,
  fetchRomanceMovies: `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=romantic&page=1`,
  fetcDocumentries: `https://api.themoviedb.org/3/discover/movie?api=${API_KEY}&with_genres=99`,
};
export default request;
