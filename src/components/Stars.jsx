import React from "react";
import "./Stars.scss";

const Stars = () => {
  return (
    <div className="starsRating">
        {/* The defaultChecked in radio buttons is reversed */}
      <div className="rating">
        <input type="radio" name="rating" id="r1" />
        <label htmlFor="r1" />
        <input type="radio" name="rating" id="r2" defaultChecked={true} />
        <label htmlFor="r2" />
        <input type="radio" name="rating" id="r3" />
        <label htmlFor="r3" />
        <input type="radio" name="rating" id="r4" />
        <label htmlFor="r4" />
        <input type="radio" name="rating" id="r5" />
        <label htmlFor="r5" />
      </div>
    </div>
  );
};

export default Stars;
