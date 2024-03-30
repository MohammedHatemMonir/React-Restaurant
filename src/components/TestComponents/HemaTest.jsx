import "./HemaTest.scss";

const HemaTest = () => {
  // Importing fonts
  const styles = {
    "@import":
      "url('https://fonts.googleapis.com/css?family=Abel|Aguafina+Script|Artifika|Athiti|Condiment|Dosis|Droid+Serif|Farsan|Gurajada|Josefin+Sans|Lato|Lora|Merriweather|Noto+Serif|Open+Sans+Condensed:300|Playfair+Display|Rasa|Sahitya|Share+Tech|Text+Me+One|Titillium+Web')",
    myMealCard: {
      /* fonts  */
      fontFamily: "'Farsan', cursive",
      // Other styles within my-meal-card class
      backgroundColor: "#dfc2f2",
      backgroundImage: "linear-gradient(135deg, #ce9ffc 10%, #7367f0 100%)",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
      height: "100vh",
      width: "100%",
    },
    myMealCardBody: {
      // Other styles within my-meal-card-body class
      background: "rgba(255, 255, 255, 0.9)",
      textAlign: "center",
      borderRadius: "5px",
      overflow: "hidden",
      margin: "5em auto",
      height: "350px",
      width: "700px",
      boxShadow: "0 15px 30px 1px rgba(128, 128, 128, 0.31)",
    },
    productDetails: {
      // Other styles within product-details class
      position: "relative",
      textAlign: "left",
      overflow: "hidden",
      padding: "30px",
      height: "100%",
      float: "left",
      width: "40%",
    },
    productDetailsH1: {
      // Other styles within product-details h1
      fontFamily: "'Old Standard TT', serif",
      display: "inline-block",
      position: "relative",
      fontSize: "34px",
      color: "#344055",
      margin: "0",
    },
    productDetailsH1Before: {
      position: "absolute",
      content: '""',
      right: "0%",
      top: "0%",
      transform: "translate(25px, -15px)",
      fontFamily: "'Farsan', cursive",
      display: "inline-block",
      background: "#ffa69e",
      borderRadius: "5px",
      fontSize: "14px",
      padding: "5px",
      color: "#fff",
      margin: "0",
      animation: "chan-sh 6s ease infinite",
    },
    hintStar: {
      display: "inline-block",
      marginLeft: "0.5em",
      color: "gold",
      width: "50%",
    },
    productDetailsP: {
      fontFamily: "'Farsan', cursive",
      textAlign: "center",
      fontSize: "20px",
      color: "#7d7d7d",
    },
    control: {
      position: "absolute",
      bottom: "20%",
      left: "22.8%",
    },
    btn: {
      transform: "translateY(0px)",
      transition: "0.3s linear",
      background: "#49c608",
      borderRadius: "5px",
      position: "relative",
      overflow: "hidden",
      cursor: "pointer",
      outline: "none",
      border: "none",
      color: "#eee",
      padding: "0",
      margin: "0",
    },
    btnHover: {
      transform: "translateY(-4px)",
    },
    btnSpan: {
      fontFamily: "'Farsan', cursive",
      transition: "transform 0.3s",
      display: "inline-block",
      padding: "10px 20px",
      fontSize: "1.2em",
      margin: "0",
    },
    shoppingCart: {
      background: "#333",
      border: "0",
      margin: "0",
    },
    price: {
      background: "#333",
      border: "0",
      margin: "0",
      transform: "translateX(-10%)",
      paddingRight: "15px",
    },
    buy: {
      zIndex: "3",
      fontWeight: "bolder",
    },
    productImage: {
      transition: "all 0.3s ease-out",
      display: "inline-block",
      position: "relative",
      overflow: "hidden",
      height: "100%",
      float: "right",
      width: "50%",
    },
    containerImg: {
      width: "100%",
      height: "100%",
    },
    info: {
      background: "rgba(27, 26, 26, 0.9)",
      fontFamily: "'Farsan', cursive",
      transition: "all 0.3s ease-out",
      transform: "translateX(-100%)",
      position: "absolute",
      lineHeight: "1.9",
      textAlign: "left",
      fontSize: "120%",
      cursor: "no-drop",
      color: "#fff",
      height: "100%",
      width: "100%",
      left: "0",
      top: "0",
    },
    infoH2: {
      textAlign: "center",
    },
    infoUlLi: {
      transition: "0.3s ease",
    },
    infoUlLiHover: {
      transform: "translateX(50px) scale(1.3)",
    },
    productImageHoverInfo: {
      transform: "translateX(0)",
    },
    productImageHoverImg: {
      transform: "scale(1.2, 1.2)",
    },
  };
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
        </div>
        {/* End product image */}
      </div>
    </div>
  );
};

export default HemaTest;
