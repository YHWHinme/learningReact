import MovieCard from "../components/MovieCard"
import { useState } from 'react';

function Home() {
	const [searchQuery, setSearchQuery] = useState()
  const HandleSearch = () => {
        alert()
  }

  const movies = [
      {id: 1, title: "John Wick", release_date: "2024"},
      {id: 2, title: "Hello Kitty", release_date: "2025"},
      {id: 3, title: "Joshua the Giant", release_date: "2026"},
    ]


  return (
      <div className="home">
          <div className="movie-grid">
              {movies.map(movie => (
                  <MovieCard movie={movie} key={movie.id} />
              ))} 
          </div>
      </div>
  )
}

export default Home
