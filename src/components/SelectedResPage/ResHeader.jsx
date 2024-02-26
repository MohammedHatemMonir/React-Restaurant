import "./ResHeader.scss";
import Stars from "./../Stars/Stars";
import { Link } from "react-router-dom";
import LocationDotIcon from "./../../Icons/LocationDotIcon";

const ResHeader = () => {
  return (
    <section className="res-header">
      <div className="container d-flex justify-content-start flex-wrap gap-3">
        <div className="1 text-center">
          <img
            src="http://image.shutterstock.com/z/stock-vector-food-restaurant-logo-icon-264413183.jpg"
            alt="res-image"
            className="res-img"
          />
          <p>Opens in 5 hours</p>
        </div>
        <div className="2 mt-3">
          <h2>Munch & Shake</h2>
          <div className="2.1 d-flex">
            <p>American</p>
            <div className="res-stars">
              <Stars stars1={4}/>
            </div>
            <p className="pr-1">4.5</p>
            <Link className="nav-link">( 3082 )</Link>
          </div>
          <div className="2.2 d-flex">
            <div className="pr-2">
              <LocationDotIcon />
            </div>
            <p>Tivolli Dome, Omar Ibn Khattab St ( Delivery Only )</p>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default ResHeader;
