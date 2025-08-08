// Importing system functionality
// IMporting css styling
import "../css/MovieCard.css";

function MovieCard({ movie }) {
  function SetFavourite() {
    alert("Favourite movie set!");
  }
  return (
    <div className="MovieCard">
      {/* Poster */}
      <div className="poster">
        <img src={movie.url} alt={movie.title} className="poster_image" />
      </div>
      {/* Text */}
      <button className="movie-button" onClick={SetFavourite}>
        󰋑
      </button>
      <div className="Text">
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
}

export default MovieCard;
