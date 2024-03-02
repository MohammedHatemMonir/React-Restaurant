import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Nav-Header ">
      <header>
        <div className="logo">DineMe</div>
        <ul className="menu">
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>
          <Link to="/" className="nav-link">
            <li>Blog</li>
          </Link>
          <Link to="/" className="nav-link">
            <li>Info</li>
          </Link>
        </ul>
        <div className="my-search">
          <div className="container">
            <form className="search-form" id="search-form">
              <input type="text" className="searchbox" />
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
