function MovieCard({movie}) {
    return (
        <div className="MovieCard">
        {/* Poster */}
            <div className="poster">
                <img src={movie.url} alt={movie.title} className="poster_image" />
            </div>
        {/* Text */}
        <div>
           <h1>
            {movie.title}
            </h1> 
        <p>
            {movie.release_date}
        </p>
        </div>
        </div>
    )
}

export default MovieCard