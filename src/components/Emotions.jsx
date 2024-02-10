import "./Emotions.scss";
import { v4 as uuidv4 } from "uuid";

function Emotions({ id }) {
  // Generate a random ID
  const randomId1 = uuidv4();
  const randomId2 = uuidv4();
  const randomId3 = uuidv4();
  const randomId4 = uuidv4();
  const randomId5 = uuidv4();
  console.log(randomId1);
  console.log(randomId2);
  console.log(randomId3);
  console.log(randomId4);
  console.log(randomId5);
  const angryId = `${randomId1}`;
  const sadId = `${randomId2}`;
  const okId = `${randomId3}`;
  const goodId = `${randomId4}`;
  const happyId = `${randomId5}`;

  return (
    <div className="emotions">
      <div className="feedback">
        <label className="angry" htmlFor={angryId}>
          <input type="radio" defaultValue={1} id={angryId} name="feedback" />
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
          <input type="radio" defaultValue={2} id={sadId} name="feedback" />
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
          <input type="radio" defaultValue={3} id={okId} name="feedback" />
          <div />
        </label>
        <label className="good" htmlFor={goodId}>
          <input
            type="radio"
            defaultValue={4}
            id={goodId}
            name="feedback"
            defaultChecked
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
          <input type="radio" defaultValue={5} id={happyId} name="feedback" />
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
