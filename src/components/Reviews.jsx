import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardText,
  CardFooter,
  CardTitle,
} from "react-bootstrap";
import "./Reviews.scss";
import Emotions from "./Emotions";
import reviewsData from "../Reviews";
import { v4 as uuidv4 } from "uuid";
// console.log(reviewsData);

export function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Set the reviews state with the imported data
    setReviews(reviewsData);
  }, []);
  // To Generate a random ID
  const randomId1 = uuidv4();
  const randomId2 = uuidv4();
  const randomId3 = uuidv4();
  const randomId4 = uuidv4();
  const randomId5 = uuidv4();
  return (
    <div className="reviews-section container">
      <h2 className="text-center mb-5 text-uppercase fw-bold fs-1">Reviews</h2>
      <div className="row g-4">
        {reviews.map((review) => (
          <div key={review.id} className="col-lg-6">
            <Card className="h-100 shadow">
              <CardBody>
                <div className="p-4">
                  <CardText>{review.comment}</CardText>
                </div>
              </CardBody>
              <CardFooter className="d-flex align-items-center">
                <img
                  src={review.img}
                  className="img-fluid rounded-circle mx-3 shadow"
                  alt=""
                />
                <CardTitle className="text-success">{review.name}</CardTitle>
                <div className="mx-auto">
                  <Emotions
                    id1={randomId1}
                    id2={randomId2}
                    id3={randomId3}
                    id4={randomId4}
                    id5={randomId5}
                  />
                </div>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
