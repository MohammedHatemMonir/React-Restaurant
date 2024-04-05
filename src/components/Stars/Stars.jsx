import "./Stars.scss";
const Stars = ({ stars1 }) => {
  stars1 = Math.round(stars1);
  return (
    <div className="my-stars-rating">
      {/* The defaultChecked in radio buttons is reversed */}
      <div className="rating">
        <input type="checkbox" checked={stars1 === 5} />
        <label />
        <input type="checkbox" checked={stars1 === 4} />
        <label />
        <input type="checkbox" checked={stars1 === 3} />
        <label />
        <input type="checkbox" checked={stars1 === 2} />
        <label />
        <input type="checkbox" checked={stars1 === 0 || stars1 === 1} />
        <label />
      </div>
    </div>
  );
};

export default Stars;
