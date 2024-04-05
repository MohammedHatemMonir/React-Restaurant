import "./Stars.scss";
const Stars = ({ stars1 }) => {
  stars1 = Math.round(stars1);
  return (
    <div className="my-stars-rating">
      {/* The defaultChecked in radio buttons is reversed */}
      <div className="rating">
        <input type="checkbox" checked={stars1 === 5} readOnly />
        <label />
        <input type="checkbox" checked={stars1 === 4} readOnly/>
        <label />
        <input type="checkbox" checked={stars1 === 3} readOnly/>
        <label />
        <input type="checkbox" checked={stars1 === 2} readOnly/>
        <label />
        <input type="checkbox" checked={stars1 === 0 || stars1 === 1} readOnly/>
        <label />
      </div>
    </div>
  );
};

export default Stars;
