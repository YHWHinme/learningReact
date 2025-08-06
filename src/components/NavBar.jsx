import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      {/* Nav Bar Highest */}
      <div className="navbar-brand">
        <Link to="/">Movie App</Link>
      </div>
      {/* Nav bar pages */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/favourites">Favourites</Link>
      </div>
    </nav>
  );
}

export default NavBar;
