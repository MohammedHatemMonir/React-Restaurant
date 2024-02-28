import { Link } from "react-router-dom";
import LocationDotIcon from "./../../Icons/LocationDotIcon";
import Stars from "./../Stars/Stars";
import "./ResHeader.scss";
const ResHeader = () => {
  return (
    <section className="res-header">
      <div className="container flex justify-start flex-wrap gap-3">
        <div className="text-center">
          <img
            src="http://image.shutterstock.com/z/stock-vector-food-restaurant-logo-icon-264413183.jpg"
            alt="res-image"
            className="res-img"
          />
          <p>Opens in 5 hours</p>
        </div>
        <div className="mt-3">
          <h2 className="text-xl font-bold">Munch & Shake</h2>
          <div className="flex items-center">
            <p>American</p>
            <div className="res-stars scale-[0.55] -m-10 -mt-[4.5rem]">
              <Stars stars1={4} />
            </div>
            <p className="p-0">4.5</p>
            <Link to="/" className="nav-link">
              ( 3082 )
            </Link>
          </div>
          <div className="flex items-center">
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
