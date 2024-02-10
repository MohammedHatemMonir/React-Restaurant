import React from "react";
import "./Menu.scss";
import menuData from "../Menu";
import Card from "./../components/Card";

function Menu() {
  return (
    <div className="menu-page">
      <header className="mt-5">
        <div className="container h-100 d-flex align-items-center justify-content-center">
          <h1 className="text-light">Menu</h1>
        </div>
        <div className="row">
          {menuData.map((meal) => (
            <div className=" mx-auto col-sm-12 col-md-6 col-lg-4">
              <Card
                key={meal.id}
                title={meal.title}
                price={meal.price}
                img={meal.img}
              />
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default Menu;
