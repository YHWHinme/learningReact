function MovieCard({movie}) {
    return (
        <div className="MovieCard">
        {/* Poster */}
            <div className="poster">
                <img src={movie.url} alt={movie.title} className="poster_image" />
            </div>
        {/* Text */}
			{/* TODO: Add button part under here */}
        <div className="Text">
           <h2>
            {movie.title}
            </h2> 
        <p>
            {movie.release_date}
        </p>
        </div>
        </div>
    )
}

export default MovieCard
