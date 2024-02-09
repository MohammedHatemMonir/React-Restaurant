import React from "react";
import "./Card.scss";
import Stars from "./Stars";
const Card = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      />
      <style
        media="screen"
        dangerouslySetInnerHTML={{
          __html:
            '\n    @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");\nbody {\n\tbackground: #f9f9f9;\n\tfont-family: "roboto", sans-serif;\n}\n\n.main-content {\n\tpadding-top: 100px;\n\tpadding-bottom: 100px;\n}\n\n.shadow {\n\tbox-shadow: 0 2px 10px rgba(0, 0, 0, 0.06) !important;\n}\n\n.food-card {\n\ttransition: 0.1s;\n}\n.food-card:hover {\n\tbox-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);\n}\n.food-card .food-card_img img {\n\twidth: 100%;\n\theight: 200px;\n\tobject-fit: cover;\n}\n.food-card .food-card_img i {\n\tposition: absolute;\n\ttop: 20px;\n\tright: 30px;\n\tcolor: #fff;\n\tfont-size: 25px;\n\ttransition: all 0.1s;\n}\n.food-card .food-card_img i:hover {\n\ttop: 18px;\n\tright: 28px;\n\tfont-size: 29px;\n}\n.food-card .food-card_content {\n\tpadding: 15px;\n}\n.food-card .food-card_content .food-card_title-section {\n\theight: 100px;\n}\n.food-card .food-card_content .food-card_title-section .food-card_title {\n\tmargin-bottom: 8px;\n\tdisplay: -webkit-box;\n\t-webkit-line-clamp: 2;\n\t-webkit-box-orient: vertical;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n}\n.food-card .food-card_content .food-card_title-section .food-card_author {\n\tfont-size: 15px;\n\tdisplay: block;\n}\n.food-card .food-card_content .food-card_bottom-section .food-card_price {\n\tfont-size: 28px;\n\tfont-weight: 500;\n\tcolor: #f47a00;\n}\n.food-card .food-card_content .food-card_bottom-section .food-card_order-count {\n\twidth: 130px;\n}\n.food-card\n\t.food-card_content\n\t.food-card_bottom-section\n\t.food-card_order-count\n\tinput {\n\tbackground: #f5f5f5;\n\tborder-color: #f5f5f5;\n\tbox-shadow: none;\n\ttext-align: center;\n}\n.food-card\n\t.food-card_content\n\t.food-card_bottom-section\n\t.food-card_order-count\n\tbutton {\n\tborder-color: #f5f5f5;\n\tborder-width: 3px;\n\tbox-shadow: none;\n}\n\n.rating-box {\n\tdisplay: flex;\n\talign-items: center;\n}\n\n.rating-stars {\n\twidth: 70px;\n}\n.rating-stars:before {\n\tcontent: "";\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: #eee;\n}\n.rating-stars .filled-star {\n\tposition: absolute;\n\tleft: 0;\n\ttop: 0;\n\twidth: 100%;\n\theight: 100%;\n\tbackground: #f47a00;\n}\n.rating-stars img {\n\theight: 100%;\n\twidth: 100%;\n\tdisplay: block;\n\tposition: relative;\n\tz-index: 1;\n}\n\n@media (min-width: 992px) {\n\t.food-card--vertical {\n\t\tdisplay: flex;\n\t\tposition: relative;\n\t\theight: 235px;\n\t}\n\t.food-card--vertical .food-card_img img {\n\t\twidth: 200px;\n\t\theight: 100%;\n\t\tobject-fit: cover;\n\t}\n}\n\n  ',
        }}
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
                      <a href="#!" className="text-dark">
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
