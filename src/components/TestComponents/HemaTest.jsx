import "./HemaTest.scss";
const HemaTest = () => {
  return (
    <div className="my-meal-card">
      <div className="my-meal-card-body">
      <div id="container">
        {/* Start Product details */}
        <div className="product-details">
          {/* Product Name */}
          <h1>Biru Putaran</h1>
          {/* Product rating */}
          <span className="hint-star star">
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-half-o" aria-hidden="true"></i>
            <i className="fa fa-star-o" aria-hidden="true"></i>
          </span>
          {/* The most important information about the product */}
          <p className="information">
            " Especially good for container gardening, the Angelonia will keep
            blooming all summer even if old flowers are removed. Once tall
            enough to cut, bring them inside and you'll notice a light scent
            that some say is reminiscent of apples. "
          </p>
          {/* Control */}
          <div className="control">
            {/* Start Button buying */}
            <button className="btn">
              {/* The Price */}
              <span className="price">49 $</span>
              {/* Shopping cart icon */}
              <span className="shopping-cart">
                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              </span>
              {/* Buy Now / ADD to Cart */}
              <span className="buy">Buy Now</span>
            </button>
            {/* End Button buying */}
          </div>
        </div>
        {/* End Product details */}
        {/* Start product image & Information */}
        <div className="product-image">
          <img
            src="https://sc01.alicdn.com/kf/HTB1Cic9HFXXXXbZXpXXq6xXFXXX3/200006212/HTB1Cic9HFXXXXbZXpXXq6xXFXXX3.jpg"
            alt="Omar Dsoky"
          />
          {/* Product Information */}
          <div className="info">
            <h2>The Description</h2>
            <ul>
              <li>
                <strong>Sun Needs: </strong>Full Sun
              </li>
              <li>
                <strong>Soil Needs: </strong>Damp
              </li>
              <li>
                <strong>Zones: </strong>9 - 11
              </li>
              <li>
                <strong>Height: </strong>2 - 3 feet
              </li>
              <li>
                <strong>Blooms in: </strong>Mid‑Summer - Mid‑Fall
              </li>
              <li>
                <strong>Features: </strong>Tolerates heat
              </li>
            </ul>
          </div>
        </div>
        </div>     {/* End product image */}
      </div>
    </div>
  );
};

export default HemaTest;
