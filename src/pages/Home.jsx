import MovieCard from "../components/MovieCard"
import { useState } from 'react';

function Home() {
	// Setting use state
	const [searchQuery, setSearchQuery] = useState()
	// Setting HandleSearch
  const HandleSearch = (e) => {
		alert(searchQuery)
		setSearchQuery("---")
		e.preventDefaultBehaviour()
  }

  const movies = [
      {id: 1, title: "John Wick", release_date: "2024"},
      {id: 2, title: "Hello Kitty", release_date: "2025"},
      {id: 3, title: "Joshua the Giant", release_date: "2026"},
    ]

  return (
  	<div className="home">
			{/* Search section */}
				<form className="search-form"  >
					<input type="text" 
					onSubmit={HandleSearch}
					placeholder="Search for movies... " 
					className="search-input"
					value = {searchQuery}
					onChange{(e) => {
						e.target.value(setSearchQuery)
					}}
				/>
				</form>
			{/* Search Button */}
			<button type="submit" className="search-button">Search</button>
			{/* Array of movies */}
      	<div className="movie-grid">
          	{movies.map(movie => (
							movie.title.toLowerCase().startsWith(searchQuery).toLowerCase() && <MovieCard movie={movie} key={movie.id} />
  	    	))} 
      	</div>
  	</div>
  )
}

export default Home
