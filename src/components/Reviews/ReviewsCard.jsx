import "./ReviewsCard.scss";
import Stars from "./../Stars/Stars";

const ReviewsCard = ({name, stars, emotion, image, comment }) => {
  return (
    <div className="reviews-card py-3">
      <div className="testimonials" id="testimonials">
        <div className="container">
          <div className="box" style={{ backgroundColor: "#ebebeb" }}>
            <img
              src={image}
              alt="img"
            />
            <h3>{name}</h3>
            <span className="title">{emotion}</span>
            <div
              style={{
                transform: "scale(0.5)",
                margin: "-10px 370px 45px 0px",
              }}
            >
              <Stars stars1={stars} />
            </div>
            <p>

                {comment}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
