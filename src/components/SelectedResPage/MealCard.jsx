import React, { useState } from "react";
import "./MealCard.scss";
import AddIcon from "./../../Icons/AddIcon";
import img1 from "../../utils/meals-img/item-1.jpeg";
import img2 from "../../utils/meals-img/item-2.jpeg";
import img3 from "../../utils/meals-img/item-3.jpeg";
import img4 from "../../utils/meals-img/item-4.jpeg";
import img5 from "../../utils/meals-img/item-5.jpeg";
import img6 from "../../utils/meals-img/item-6.jpeg";
import img7 from "../../utils/meals-img/item-7.jpeg";
import img8 from "../../utils/meals-img/item-8.jpeg";
import img9 from "../../utils/meals-img/item-9.jpeg";
import Stars from "../Stars/Stars";
import { useSignal } from "@preact/signals-react";
import PopupBox from "./PopupBox";

const mealsData = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: img1,
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    stars: 4,
    type: "Offers",
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: img2,
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    stars: 2,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: img3,
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    stars: 3,
    type: "Top Dishes",
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: img4,
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    stars: 5,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: img5,
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    stars: 1,
    type: "Value Meals",
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: img6,
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    stars: 2,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: img7,
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    stars: 4,
    type: "Munchies",
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: img8,
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    stars: 2,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: img9,
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    stars: 5,
    type: "Beef & Dogs",
  },
];

const MealCard = () => {
  const count = useSignal(1);

  const isOpend = useSignal(false);

  return (
    <div>
      {mealsData.map((data) => (
        <div>
          <h2 className="font-bold bg-transparent text-3xl"> {data.type}</h2>
          <div
            className="bg-[white] shadow-lg rounded-lg overflow-hidden my-3 hover:cursor-pointer hover:bg-[#ccc]"
            key={data.id}
          >
            <img
              src={data.img}
              alt="meal-img"
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{data.title}</h3>
              <p className="text-gray-600 mb-4">{data.desc}</p>
              <div className="flex justify-between items-center">
                <div>
                  <del className="text-gray-500">$20</del>
                  <p className="text-red-600 text-lg font-semibold">
                    ${data.price}
                  </p>
                </div>
                <div className="flex items-center">
                  <button
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-2"
                    onClick={() => {
                      if (count.value > 1) {
                        count.value--;
                      }
                    }}
                  >
                    -
                  </button>
                  <p className="mr-2">{count.value}</p>
                  <button
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-2"
                    onClick={() => {
                      count.value++;
                    }}
                  >
                    +
                  </button>
                  <div className="-mt-[55px]">
                    <Stars stars1={data.stars} />
                  </div>
                  {isOpend.value && (
                    <PopupBox
                      onClose={() => (isOpend.value = false)}
                    />
                  )}
                </div>
                <input type="button" className="btn" value="Buy"  onClick={() => (isOpend.value = true)}/>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MealCard;
