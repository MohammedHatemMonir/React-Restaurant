import "./Header.scss";

const Header = () => {
  return (
    <div className="Nav-Header ">
      <header>
        <div className="logo">DineMe</div>
        <ul className="menu">
          <li>Home</li>
          <li>Blog</li>
          <li>Info</li>
        </ul>
        <div className="my-search">
          <div class="container">
            <form class="search-form" id="search-form">
              <input type="text" class="searchbox" />
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
