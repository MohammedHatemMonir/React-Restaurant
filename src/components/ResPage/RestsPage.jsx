import { useState } from "react";
import ResPageBox from "./../ResPage/ResPageBox";
import "./ResPageBox.scss";
import "./ResPage.scss";
import Slider from "./Slider";
import Header from "./Header";

import Card from "./../Card/Card";

export default function ResPage() {
  const [resData, setResData] = useState([
    {
      id: "res1",
      title: "Restaurant 1",
      image:
        "http://image.shutterstock.com/z/stock-vector-food-restaurant-logo-icon-264413183.jpg",
      minCharge: "5.00 LE",
      rating: "3",
      titlMC: "foodCirclesMenuCat",
      url_menucat:
        "https://gist.github.com/omar94hamza/95723a43bb97f21567c99948c31dc7aa/raw/d09556d7f9591c9ac36d499a48c82d0012589a03/foodcirclesmenucat.json",
      type: ["Chicken", "Meat"],
      stars: 4,
    },
    {
      id: "res2",
      title: "Restaurant 2",
      image:
        "http://image.shutterstock.com/z/stock-vector-food-restaurant-logo-icon-264413183.jpg",
      minCharge: "10.00 LE",
      rating: "4",
      titlMC: "kfc",
      url_menucat:
        "https://gist.github.com/omar94hamza/5915e318a11a40f7a70e440804431e45/raw/9dfee086fc5f6734c7306c17e5fa97e3683df2d8/kfc.json",
      type: ["Fast Food", "Chicken", "Sandwiches"],
      stars: 3,
    },
    {
      id: "res3",
      title: "Restaurant 3",
      image:
        "http://image.shutterstock.com/z/stock-vector-food-restaurant-logo-icon-264413183.jpg",
      minCharge: "6.00 LE",
      rating: "3",
      titlMC: "dinwaredinesout",
      url_menucat:
        "https://gist.github.com/omar94hamza/00f1be36672b4b12cc3125cc5fb4dc90/raw/c6e6c32835d60ab030258b9c051e73a42aea58b6/dinwaredinesout.json",
      type: ["Burgers", "Fast Food"],
      stars: 5,
    },
    {
      id: "res4",
      title: "Restaurant 4",
      image:
        "http://image.shutterstock.com/z/stock-vector-food-restaurant-logo-icon-264413183.jpg",
      minCharge: "Free",
      rating: "5",
      titlMC: "windmills",
      url_menucat:
        "https://gist.github.com/omar94hamza/e01f92414a77f555fcd45255a961a9ba/raw/17ddf8c4e84e5d854084d06e5d8bfeec9bffa79d/windmills.json",
      type: ["Grilled", "Oriental", "Sandwiches"],
      stars: 2,
    },
    {
      id: "res5",
      title: "Restaurant 5",
      image:
        "http://image.shutterstock.com/z/stock-vector-food-restaurant-logo-icon-264413183.jpg",
      minCharge: "7.00 LE",
      rating: "2",
      titlMC: "burgerking",
      url_menucat:
        "https://gist.github.com/omar94hamza/c1e7a0220547235c515e3b073bb4e7ff/raw/e122811cf463a8f47d90a5aa7407cc3998dbb21b/burgerking.json",
      type: ["Burgers", "Fast Food"],
      stars: 5,
    },
    {
      id: "res6",
      title: "Restaurant 6",
      image:
        "http://image.shutterstock.com/z/stock-vector-food-restaurant-logo-icon-264413183.jpg",
      minCharge: "16.00 LE",
      rating: "4",
      titlMC: "restaurant",
      url_menucat:
        "https://gist.github.com/omar94hamza/9725b018f68150d3e50d9c33ec8a3e93/raw/728fddef7356572f9bb8e7608909b542983d8fd3/restaurant.json",
      type: ["Pizza"],
      stars: 1,
    },
  ]);

  return (
    <section>
      <Header />
      <Slider />
      <div className="row">
        {resData.map((data) => (
          <div className="col-sm-12 col-md-3 col-lg-4" key={data.id}>
            <Card
              title={data.title}
              price={data.minCharge}
              img={data.image}
              stars={data.stars}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
