import "./Emotions.scss";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useRef } from "react";
function Emotions({ emotion, emotionID }) {
  const inputRefs = useRef(Array(5).fill(null));  // Initialize as an array of length 5 with null values

  useEffect(() => {
    switch (emotion) {
      case 1:
        inputRefs.current[1].disabled = false;
        inputRefs.current[1].disabled = true;
        inputRefs.current[2].disabled = true;
        inputRefs.current[3].disabled = true;
        inputRefs.current[4].disabled = true;
        break;
      case 2:
        inputRefs.current[0].disabled = true;
        inputRefs.current[1].disabled = false;
        inputRefs.current[2].disabled = true;
        inputRefs.current[3].disabled = true;
        inputRefs.current[4].disabled = true;
        break;
      case 3:
        inputRefs.current[0].disabled = true;
        inputRefs.current[1].disabled = true;
        inputRefs.current[2].disabled = false;
        inputRefs.current[3].disabled = true;
        inputRefs.current[4].disabled = true;
        break;
      case 4:
        inputRefs.current[0].disabled = true;
        inputRefs.current[1].disabled = true;
        inputRefs.current[2].disabled = true;
        inputRefs.current[3].disabled = false;
        inputRefs.current[4].disabled = true;
        break;
      case 5:
        inputRefs.current[0].disabled = true;
        inputRefs.current[1].disabled = true;
        inputRefs.current[2].disabled = true;
        inputRefs.current[3].disabled = true;
        inputRefs.current[4].disabled = false;
        break;
      default:
        console.log("Error in Emotions Switch");
    }
  }, [emotion]);

  const angryId = emotionID;
  const sadId = emotionID;
  const okId = emotionID;
  const goodId = emotionID;
  const happyId = emotionID;
  const randomName = uuidv4();

  // console.log(happyId);
  // console.log(angryId);
  // console.log(sadId);
  // console.log(okId);
  // console.log(goodId);
  return (
    <div className="emotions">
      <div className="feedback">
        <label className="angry" htmlFor={angryId}>
          <input
            type="radio"
            defaultValue={1}
            id={angryId}
            name={randomName}
            ref={(el) => (inputRefs.current[0] = el)}
            defaultChecked={emotion === 1}
          />
          <div>
            <svg className="eye left">
              <use xlinkHref="#eye"></use>
            </svg>
            <svg className="eye right">
              <use xlinkHref="#eye"></use>
            </svg>
            <svg className="mouth">
              <use xlinkHref="#mouth"></use>
            </svg>
          </div>
        </label>
        <label className="sad" htmlFor={sadId}>
          <input
            type="radio"
            defaultValue={2}
            id={sadId}
            name={randomName}
            ref={(el) => (inputRefs.current[1] = el)}
            defaultChecked={emotion === 2}
          />
          <div>
            <svg className="eye left">
              <use xlinkHref="#eye"></use>
            </svg>
            <svg className="eye right">
              <use xlinkHref="#eye"></use>
            </svg>
            <svg className="mouth">
              <use xlinkHref="#mouth"></use>
            </svg>
          </div>
        </label>
        <label className="ok" htmlFor={okId}>
          <input
            type="radio"
            defaultValue={3}
            id={okId}
            name={randomName}
            ref={(el) => (inputRefs.current[2] = el)}
            defaultChecked={emotion === 3}
          />
          <div />
        </label>
        <label className="good" htmlFor={goodId}>
          <input
            type="radio"
            defaultValue={4}
            id={goodId}
            name={randomName}
            ref={(el) => (inputRefs.current[3] = el)}
            defaultChecked={emotion === 4}
          />
          <div>
            <svg className="eye left">
              <use xlinkHref="#eye"></use>
            </svg>
            <svg className="eye right">
              <use xlinkHref="#eye"></use>
            </svg>
            <svg className="mouth">
              <use xlinkHref="#mouth"></use>
            </svg>
          </div>
        </label>
        <label className="happy" htmlFor={happyId}>
          <input
            type="radio"
            defaultValue={5}
            id={happyId}
            name={randomName}
            ref={(el) => (inputRefs.current[4] = el)}
            defaultChecked={emotion === 5}
          />
          <div>
            <svg className="eye left">
              <use xlinkHref="#eye"></use>
            </svg>
            <svg className="eye right">
              <use xlinkHref="#eye"></use>
            </svg>
          </div>
        </label>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 4" id="eye">
          <path d="M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1" />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18 7"
          id="mouth"
        >
          <path d="M1,5.5 C3.66666667,2.5 6.33333333,1 9,1 C11.6666667,1 14.3333333,2.5 17,5.5" />
        </symbol>
      </svg>
    </div>
  );
}

export default Emotions;
