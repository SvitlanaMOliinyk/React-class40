import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link className="link" to="/">
        Products
      </Link>
      <Link className="link" to="/favoritepath">
        Favorites
      </Link>
    </nav>
  );
};

export default Navbar;
