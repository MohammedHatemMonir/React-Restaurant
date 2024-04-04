import "./ReviewsCard.scss";
import Stars from "./../Stars/Stars";
// import {
//   FaAngry,
//   FaSadCry,
//   FaGrin,
//   FaSurprise,
//   FaHeart,
//   FaRegDizzy,
// } from "react-icons/fa";
import { useSignal } from "@preact/signals-react";

const ReviewsCard = ({ name, stars, emotion, image, comment }) => {
  const emoji = useSignal(<></>);
  const importantStyle = {
    color: "green !important",
  };
  switch (emotion) {
    case "anger":
      emoji.value = <span> 😠 </span>;
      // <FaAngry style={importantStyle} />;
      break;
    case "sadness":
      emoji.value = <span> 😢 </span>;
      // <FaSadCry style={importantStyle} />;
      break;
    case "joy":
      emoji.value = <span> 😄 </span>;
      // <FaGrin style={importantStyle} />;
      break;
    case "surprise":
      emoji.value = <span> 😲 </span>;
      // <FaSurprise style={importantStyle} />;
      break;
    case "love":
      emoji.value = <span> ❤️ </span>;
      //  <FaHeart style={importantStyle} />;
      break;
    case "fear":
      emoji.value = <span> 😨 </span>;
      // <FaRegDizzy style={importantStyle} />;
      break;
    default:
      emoji.value = null;
  }
  
  return (
    <div className="reviews-card py-3">
      <div className="testimonials" id="testimonials">
        <div className="container">
          <div className="box" style={{ backgroundColor: "#ebebeb" }}>
            <img src={image} alt="img" />
            <h3>{name}</h3>
            <span className="title">
              {emotion} <span> {emoji.value}</span>
            </span>
            <div
              style={{
                transform: "scale(0.5)",
                margin: "-10px 370px 45px 0px",
              }}
            >
              <Stars stars1={stars} />
            </div>
            <p>{comment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
