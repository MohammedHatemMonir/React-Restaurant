import "./ReviewsCard.scss";
import Stars from "./../Stars/Stars";
import moment from "moment";
// import {
//   FaAngry,
//   FaSadCry,
//   FaGrin,
//   FaSurprise,
//   FaHeart,
//   FaRegDizzy,
// } from "react-icons/fa";
import { useSignal } from "@preact/signals-react";

const ReviewsCard = ({ name, stars, emotion, image, comment, date }) => {
  const emoji = useSignal(<></>);
  const borderColor = useSignal("black");

  const originalDate = moment(date);
  const formattedDate = originalDate.format("MMM D, YYYY");

  // const importantStyle = {
  //   color: "green !important",
  // };
  if (Math.round(stars) == 3 && stars != 2.5) {
    stars = Math.round(stars);
    stars += 1;
  } else {
    stars = Math.round(stars);
  }

  switch (emotion) {
    case "admiration":
      emoji.value = <span> 😍 </span>;
      break;
    case "amusement":
      emoji.value = <span> 😆 </span>;
      break;
    case "anger":
      emoji.value = <span> 😠 </span>;
      // <FaAngry style={importantStyle} />;
      break;
    case "annoyance":
      emoji.value = <span> 😒 </span>;
      break;
    case "approval":
      emoji.value = <span> 👍 </span>;
      break;
    case "caring":
      emoji.value = <span> 🤗 </span>;
      break;
    case "confusion":
      emoji.value = <span> 😕 </span>;
      break;
    case "curiosity":
      emoji.value = <span> 🧐 </span>;
      break;
    case "desire":
      emoji.value = <span> 💖 </span>;
      break;
    case "disappointment":
      emoji.value = <span> 😞 </span>;
      break;
    case "disapproval":
      emoji.value = <span> 👎 </span>;
      break;
    case "disgust":
      emoji.value = <span> 😫 </span>;
      break;
    case "embarrassment":
      emoji.value = <span> 😳 </span>;
      break;
    case "excitement":
      emoji.value = <span> 🤩 </span>;
      break;
    case "fear":
      emoji.value = <span> 😨 </span>;
      // <FaRegDizzy style={importantStyle} />;
      break;
    case "gratitude":
      emoji.value = <span> 🥰 </span>;
      break;
    case "grief":
      emoji.value = <span> 😭 </span>;
      break;
    case "joy":
      emoji.value = <span> 😄 </span>;
      // <FaGrin style={importantStyle} />;
      break;
    case "love":
      emoji.value = <span> ❤️ </span>;
      //  <FaHeart style={importantStyle} />;
      break;
    case "nervousness":
      emoji.value = <span> 😬 </span>;
      break;
    case "optimism":
      emoji.value = <span> 😊 </span>;
      break;
    case "pride":
      emoji.value = <span> 😌 </span>;
      break;
    case "realization":
      emoji.value = <span> 🤔 </span>;
      break;
    case "relief":
      emoji.value = <span> 😌 </span>;
      break;
    case "remorse":
      emoji.value = <span> 😔 </span>;
      break;
    case "sadness":
      emoji.value = <span> 😢 </span>;
      // <FaSadCry style={importantStyle} />;
      break;
    case "surprise":
      emoji.value = <span> 😲 </span>;
      // <FaSurprise style={importantStyle} />;
      break;
    default:
      emoji.value = <span> 😐 </span>; // Neutral emoji
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
            <span className="title">{formattedDate}</span>

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
