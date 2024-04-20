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
  const borderColor = useSignal("black");
  const importantStyle = {
    color: "green !important",
  };
  stars = Math.round(stars);

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
  if (stars >= 0 && stars <= 2) {
    borderColor.value = "#FF6347"; // Red for negative reactions
  } else if (stars == 3) {
    borderColor.value = "#696969"; // Grey for neutral reactions
  } else {
    borderColor.value = "#32CD32"; // Green for positive reactions
  }

  return (
    <div className="reviews-card py-3">
      <div className="testimonials w-100" id="testimonials">
        <div className="container">
          <div
            className="box"
            style={{
              backgroundColor: "#ebebeb",
              border: `4px solid ${borderColor.value}`,
            }}
          >
            <img src={image} alt="img" />
            <h3 className="d-inline">{name}</h3>
            <span className="mx-1" style={{ fontSize: "25px" }}>
              {emoji.value}
            </span>
            <span className="title"></span>
            <div
              style={{
                transform: "scale(0.5)",
                margin: "-10px 370px 45px 0px",
              }}
            >
              <Stars stars1={stars} />
            </div>
            <div>
              <p>{comment} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
