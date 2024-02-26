import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardText,
  CardFooter,
  CardTitle,
} from "react-bootstrap";
import "./Reviews.scss";
import Emotions from "../Emotions/Emotions";
import reviewsData from "../../ReviewsData";
import { v4 as uuidv4 } from "uuid";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Set reviewsData after the component mounts
    setReviews(reviewsData);
  }, []); // Empty dependency array ensures this effect runs only once after mount

  return (
    <div className="reviews-section container">
      <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reviews</h2>
      <div className="row g-4">
        {reviews.map((review) => (
          <div key={review.id}>
            <title>Verified Customer section</title>
            <div className="verified_customer_section">
              <div className="image_review">
                <div className="customer_image">
                  <img src={review.img} alt="customer image" />
                </div>
                <div className="customer_name_review_status">
                  <div className="customer_name">{review.name}</div>
                  <div className="customer_review">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                  </div>
                  <div className="customer_status">
                    {/* Veridied Icon here */}
                    <div className="customer_status_content">
                      Verified Customer
                    </div>
                  </div>
                </div>
              </div>
              <div className="customer_comment">{review.comment}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
