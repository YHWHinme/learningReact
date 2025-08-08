// Setting Base vars
const API_KEY = "efb72b79ca6256c7fcb9fe4b2dd7da2b";
const BASE_URL = "https://api.themoviedb.org/3";

// Popular movies
const getPopularMovies = async () => {
	const response =  await fetch (`${BASE_URL}/movie/popular?api_keys=${API_KEY}`) ;
	const data = await response.json()
	return data.results
};

// Searching movies
const searchMovies = async () => {
	const response =  await fetch (`${BASE_URL}/movie/popular?api_keys=${API_KEY}&query=${encodeURIComponent(
		query
	)}`);
	const data = await response.json()
	return data.results
};
