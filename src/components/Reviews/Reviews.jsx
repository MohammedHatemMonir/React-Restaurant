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
        {reviews.map((review) => {
          const emotionID = uuidv4(); // To Generate unique key for each review
          return (
            <div key={review.id} className="">
              <Card className="h-100 shadow">
                <CardBody>
                  <div className="p-4">
                    <CardText>{review.comment}</CardText>
                  </div>
                </CardBody>
                <CardFooter className="d-flex justify-content-between align-items-center card-footer">
                  <div className="d-flex align-items-center">
                    <img
                      src={review.img}
                      className="img-fluid rounded-circle mx-3 shadow"
                      alt={`${review.id}-Image`}
                    />
                    <CardTitle className="text-success ">
                      {review.name}
                    </CardTitle>
                  </div>

                  <div className="Emotions-Zoom">
                    <Emotions key={emotionID} emotion={review.emotion} />
                  </div>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
