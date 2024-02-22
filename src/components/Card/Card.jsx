import { useSignal } from "@preact/signals-react";
import { v4 as uuidv4 } from "uuid";
import "./Card.scss";
import Stars1 from "../Stars/Stars";
const Card = ({ title, img, id, stars, mealImg ,reviewsNum}) => {
  // To Generate Random ID
  const randomId = uuidv4();
  return (
    <div className="my-card-styels ">
      <section className="main-content">
        <div className="container edit-container">
          <div className="row">
            <div className="col">
              <div className="food-card bg-white rounded-lg overflow-hidden mb-4 shadow">
                <div className="food-card_img position-relative">
                  <img src={mealImg} alt={`${title}-Image`} />
                  <a href="/" className="card-heart ">
                    <i className="far fa-heart " />
                  </a>
                </div>
                <div className="food-card_content">
                  <div className="food-card_title-section overflow-hidden">
                    <h4 className="food-card_title">
                      <img
                        src={img}
                        alt={`${title}-Image`}
                        className="w-25 h-25 border-0"
                      />
                    </h4>
                    <div>
                      <div className="myZoom w-25 h-25">
                        <Stars1 id={randomId + id} stars1={stars} />
                      </div>
                      <p className="myFont">{`${reviewsNum}`}</p>
                      <p className="text-dark my-res-title">{title}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
