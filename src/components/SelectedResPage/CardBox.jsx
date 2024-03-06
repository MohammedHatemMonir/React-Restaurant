import "./CardBox.scss";

const CardBox = () => {
  return (
    <div className="my-res-card ">
      <div className="recipe-container ">
        <div className="baseline-grid">
          <div className="guide" />
          <div className="guide" />
          <div className="guide" />
          <div className="guide" />
          <div className="guide" />
          <div className="guide" />
          <div className="guide" />
          <div className="guide" />
        </div>
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/181794/C6BM7hh.jpg"
          alt=""
          className="recipe-image"
        />
        <div className="recipe-content">
          <h2 className="heading-2">Healthy Meals</h2>
          <h1 className="heading-1">
            Smoked Salmon
            <br />
            &amp; Bacon
          </h1>
          <p className="paragraph">With Bread and Roasted Berries</p>
          <ul className="recipe-list meta">
            <li className="recipe-item">
              <div className="recipe-value">40</div>
              <div className="recipe-text">Mins</div>
            </li>
            <li className="recipe-item">
              <div className="recipe-value">225</div>
              <div className="recipe-text">Nutrition</div>
            </li>
            <li className="recipe-item">
              <div className="recipe-value">6</div>
              <div className="recipe-text">Ingredients</div>
            </li>
          </ul>
          <div className="recipe-stars">
            <span className="recipe-star" />
            <span className="recipe-star" />
            <span className="recipe-star" />
            <span className="recipe-star" />
            <span className="recipe-star inactive" />
            <span className="recipe-ratings">29</span>
          </div>
          <button className="recipe-button">View Recipe</button>
          <button className="recipe-button transparent">
            Add to Collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardBox;
