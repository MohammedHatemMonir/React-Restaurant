import React, { useState } from "react";
import "./Menu.scss";
import menuData from "../../MenuData";
import Card from "../../components/Card/Card";
import { v4 as uuidv4 } from "uuid";
import Handleconnect from "../../components/backend_connection/backend_connection";

function Menu() {
  const [inputValue, setInputValue] = useState("");
  const [output, setOutput] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Handleconnect({text:inputValue},"analyze","POST");
      console.log (response.data.Sentiment)
      setOutput(response.data.Sentiment);
      // Handle successful login (e.g., redirect to dashboard)

    } catch (error) {
      setOutput(error.message); // Display the error message
    }
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  return (
    <div className="menu-page">
      <header className="mt-5 my-menu-header ">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light">Menu</h1>
        </div>
      </header>
      <div className="my-menu-page">
        <div className="menu-container ">
          <div className="menu-input">

            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Add New Comment"
              className="menu-input-field"
            />
            <button onClick={handleSubmit} className="menu-button">
              Submit
            </button>
          </div>
          <div className="menu-output">Output: {output}</div>
          <div className="menu-items">
            {menuData.map((meal) => {
              const cardID = uuidv4(); // To Generate unique ID for each review
              return (
                <div key={meal.id} className="menu-item">
                  <Card
                    kay={meal.id}
                    title={meal.title}
                    id={cardID}
                    price={meal.price}
                    img={meal.img}
                    stars={meal.stars}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
