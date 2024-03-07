import "./HemaTest.scss";

const HemaTest = () => {
  return (
    <div className="my-test-nav">
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1" />
            <span className="line line2" />
            <span className="line line3" />
          </div>
          <ul className="menu-items">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Category</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">Testimonial</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <h1 className="logo">Navbar</h1>
        </div>
      </nav>
    </div>
  );
};

export default HemaTest;
