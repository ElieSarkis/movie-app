import { Link } from "react-router-dom";
import './navbar.css';

function Navbar() {
    return (
      <div className="nav-container">
        <nav>
        <Link className="nav-item" to="/">Home</Link>
        <Link className="nav-item" to="/favorites">Favorites</Link>
        <Link className="nav-item" to="watchlater">Watch Later</Link>
        </nav>
      </div>
    );
  }
  
  export default Navbar;
  
