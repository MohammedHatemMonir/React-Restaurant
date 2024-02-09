import "./Emotions.scss";

function Emotions() {
  return (
    <div className="emotions">
      <div className="feedback">
        <label className="angry">
          <input type="radio" defaultValue={1} name="feedback" />
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
        <label className="sad">
          <input type="radio" defaultValue={2} name="feedback" />
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
        <label className="ok">
          <input type="radio" defaultValue={3} name="feedback" />
          <div />
        </label>
        <label className="good">
          <input
            type="radio"
            defaultValue={4}
            name="feedback"
            defaultChecked="true"
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
        <label className="happy">
          <input type="radio" defaultValue={5} name="feedback" />
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
