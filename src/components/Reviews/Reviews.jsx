import { useState, useEffect } from "react";
import "./Reviews.scss";
import reviewsData from "../../ReviewsData";
import { v4 as uuidv4 } from "uuid";
import Emotions from "../Emotions/Emotions";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Set reviewsData after the component mounts
    setReviews(reviewsData);
  }, []); // Empty dependency array ensures this effect runs only once after mount

  return (
    <div className="reviews-section container">
      <h3 className="text-center mb-3 text-uppercase font-bold">Reviews</h3>
      <div className="row g-4">
        {reviews.map((review) => {
          const emotionID = uuidv4(); // To Generate unique key for each review
          return (
            <div key={review.id} className="my-3">
              <title>Verified Customer section</title>
              <div className="verified_customer_section">
                <div className="image_review">
                  <div className="customer_image">
                    <img src={review.img} alt="customer image" />
                  </div>
                  <div className="customer_name_review_status ">
                    <div className="customer_name">{review.name}</div>
                    <div style={{transform:"scale(0.6)",marginLeft:"-150px"}}>
                      <Emotions key={emotionID} emotion={review.emotion} />
                    </div>

                    <div className="customer_status">
                      {/* Verified Icon here */}
                      {/* <div className="customer_status_content font-weight-bold">
                        Verified Customer
                      </div> */}
                      <hr />
                    </div>
                  </div>
                </div>
                <div className="customer_comment">{review.comment}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
