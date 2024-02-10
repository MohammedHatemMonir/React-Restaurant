import React from "react";
import "./Card.scss";
import Stars from "./Stars";
const Card = () => {
  return (
    <div className="my-card-styels">
      <link
        rel="stylesheet"
        type="text/css"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
   
      <section className="main-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="food-card bg-white rounded-lg overflow-hidden mb-4 shadow">
                <div className="food-card_img position-relative">
                  <img
                    src="https://1.bp.blogspot.com/-wT1Lh2H0qRk/YTK96tlUveI/AAAAAAAACc8/FvX16uByWqg0l-6JhsvXvzk41ogXBarEgCNcBGAsYHQ/s0/food2.jpg.jpg"
                    alt=""
                  />
                  <a href="#!">
                    <i className="far fa-heart" />
                  </a>
                </div>
                <div className="food-card_content">
                  <div className="food-card_title-section overflow-hidden">
                    <h4 className="food-card_title">
                      <a href="#!" className="text-dark myFont">
                        Double Cheese Potato Burger
                      </a>
                    </h4>
                  </div>
                  <div className="food-card_bottom-section">
                    <div className="d-flex justify-content-between">
                      <div className="myZoom">
                        <Stars />
                      </div>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <div className="food-card_price">
                        <span>5.99$</span>
                      </div>
                      <div className="food-card_order-count">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <button
                              className="btn btn-outline-secondary minus-btn"
                              type="button"
                              id="button-addon1"
                            >
                              <i className="fa fa-minus" />
                            </button>
                          </div>
                          <input
                            type="text"
                            className="form-control input-manulator"
                            placeholder=""
                            aria-label="Example text with button addon"
                            aria-describedby="button-addon1"
                            defaultValue={0}
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-outline-secondary add-btn"
                              type="button"
                              id="button-addon1"
                            >
                              <i className="fa fa-plus" />
                            </button>
                          </div>
                        </div>
                      </div>
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
