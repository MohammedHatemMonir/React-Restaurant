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

const mealsData = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: img1,
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    stars: 4,
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
  },
];

const MealCard = () => {
    return (
      <div className="my-meal-card">
        <h2>Offers</h2>
        {mealsData.map((data) => (
          <div className="meal-card" key={data.id}> {/* Updated class name */}
            <div className="d-flex justify-content-between">
              <div className="1 d-flex">
                <div className="1.1">
                  <h3>{data.title}</h3>
                  <h5>{data.desc}</h5>
                  <div className="1.1.1 d-flex gap-2">
                    <del>20</del>
                    <p>{data.price}</p>
                  </div>
                </div>
              </div>
              <div className="2">
                <div className="2.1">
                  <img src={data.img} alt="meal-img" />
                </div>
                <div className="2.1 d-flex my-3">
                  <AddIcon />
                  <p>66</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  

export default MealCard;
