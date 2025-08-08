import MovieCard from "../components/MovieCard";
import { useState } from "react";
// Importing css styling
import "../css/Home.css";
// Import backend
import {searchMovies, getPopularMovies} from "../services/api.js"

// Component
function Home() {
  // Setting use state
  const [searchQuery, setSearchQuery] = useState("");
	// Storing movies in state
  const [movies, setMovies] = useState([]);
	// Error handling
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

	useEffect(() => {
	  const loadPopularMovies = async () => {
			try {
				const popularMovies = await getPopularMovies()
				setMovies(popularMovies)
			}
		} 
		catch(err) {
			setError("Failed to load movies...")
			console.log(err)
		}
		finally {
			// Setting loading to false
			setLoading(false)
		}
		
		loadPopularMovies()

	}, [])

  // Setting HandleSearch
  const HandleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };

  return (
    <div className="home">
      {/* Search section */}
      <form className="search-form">
        <input
          className="search-input"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </form>
      {/* Search Button */}
      <button type="submit" className="search-button" onClick={HandleSearch}>
        Search
      </button>
      {/* Array of movies */}
      <div className="movie-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && (
              <MovieCard movie={movie} key={movie.id} />
            ),
        )}
      </div>
    </div>
  );
}

export default Home;
