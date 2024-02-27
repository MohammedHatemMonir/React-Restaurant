import "./MealCard.scss";
import AddIcon from "./../../Icons/AddIcon";

const MealCard = () => {
  return (
    <div className="my-meal-card">
      <h2>Offers</h2>
      <div className="d-flex justify-content-between px-2">
        <div className="1 d-flex ">
          <div className="1.1">
            <h3>Meal Name</h3>
            <h5>Desc</h5>
            <div className="1.1.1 d-flex gap-2">
              <del>20</del>
              <p>15.99</p>
            </div>
          </div>
        </div>
        <div className="2">
          <div className="2.1">
            <img
              src="http://image.shutterstock.com/z/stock-vector-food-restaurant-logo-icon-264413183.jpg"
              alt="meal-img"
            />
          </div>
          <div className="2.1 d-flex my-3">
            <AddIcon />
            <p>66</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard;
