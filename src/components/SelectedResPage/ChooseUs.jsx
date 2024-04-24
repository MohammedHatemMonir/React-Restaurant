import "./ChooseUs.scss";

export default function ChooseUs({ resName }) {
  return (
    <div className="choose-us">
      <div class="feat bg-gray pt-5 pb-5">
        <div class="container">
          <div class="row">
            <div class="section-head col-sm-12">
              <h4>
                <span>More About</span> Us
              </h4>
              <p style={{ fontSize: "20px" }}>
                Choose
                <span
                  style={{
                    color: "#f91942",
                    fontWeight: "bold",
                    marginRight: "5px",
                    marginLeft: "5px",
                  }}
                >
                  {resName}
                </span>
                for an unforgettable dining experience where culinary mastery
                meets exceptional service. Indulge in our diverse menu crafted
                with the freshest ingredients, and savor every moment in an
                atmosphere of warmth and hospitality. Come discover why we're
                the perfect destination for your next culinary adventure
              </p>
            </div>
            {/* <div className="col-lg-4 col-sm-6">
              <div className="item">
                <span className="icon feature_box_col_one">
                  <FaUtensils />
                </span>
                <h6>Delicious Cuisine</h6>
                <p>
                  We craft our dishes using the freshest ingredients to deliver
                  the most delightful culinary experiences.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                <span className="icon feature_box_col_two">
                  <FaHeart />
                </span>
                <h6>Passionate Cooking</h6>
                <p>
                  Our chefs are driven by passion, ensuring each dish is infused
                  with love and creativity.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                <span className="icon feature_box_col_three">
                  <FaRegClock />
                </span>
                <h6>24/7 Service</h6>
                <p>
                  We're here round the clock to serve you, catering to your
                  cravings at any hour of the day.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                <span className="icon feature_box_col_four">
                  <FaMoneyBillWave />
                </span>
                <h6>Great Value</h6>
                <p>
                  Enjoy delicious meals without breaking the bank. Our prices
                  are affordable without compromising on quality.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                <span className="icon feature_box_col_five">
                  <FaComments />
                </span>
                <h6>Customer Feedback</h6>
                <p>
                  We value your feedback and continuously strive to enhance your
                  dining experience based on your suggestions.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item">
                <span className="icon feature_box_col_six">
                  <FaCamera />
                </span>
                <h6>Insta-Worthy Ambiance</h6>
                <p>
                  Our restaurant provides a picturesque setting, perfect for
                  capturing memorable moments with your loved ones.
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
