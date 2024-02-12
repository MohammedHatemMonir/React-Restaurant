import "./Stars.scss";
import { v4 as uuidv4 } from "uuid";
const Stars = () => {
  const randomName = uuidv4(); // To Generate Random Name
  const r1 = uuidv4();
  const r2 = uuidv4();
  const r3 = uuidv4();
  const r4 = uuidv4();
  const r5 = uuidv4();
  return (
    <div className="my-stars-rating">
      {/* The defaultChecked in radio buttons is reversed */}
      <div className="rating">
        <input type="radio" name={randomName} id={r1} />
        <label htmlFor={r1} />
        <input type="radio" name={randomName} id={r2} defaultChecked={true} />
        <label htmlFor={r2} />
        <input type="radio" name={randomName} id={r3} />
        <label htmlFor={r3} />
        <input type="radio" name={randomName} id={r4} />
        <label htmlFor={r4} />
        <input type="radio" name={randomName} id={r5} />
        <label htmlFor={r5} />
      </div>
    </div>
  );
};

export default Stars;
