import { useState } from "react";
import ResPageBox from "./ResPageBox";
import "./ResPageBox.scss";
import "./ResPage.scss";
import Slider from "./Slider";
import Header from "./Header";
import Card from "../Card/Card";
import img1 from "../../utils/meals-img/item-1.jpeg";
import img2 from "../../utils/meals-img/item-2.jpeg";
import img3 from "../../utils/meals-img/item-3.jpeg";
import img4 from "../../utils/meals-img/item-4.jpeg";
import img5 from "../../utils/meals-img/item-5.jpeg";
import img6 from "../../utils/meals-img/item-6.jpeg";
import img7 from "../../utils/meals-img/item-7.jpeg";
import img8 from "../../utils/meals-img/item-8.jpeg";
import img9 from "../../utils/meals-img/item-9.jpeg";
import Footer from "./Footer";
import { useQuery } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { Col, Container } from "reactstrap";
import { Link } from "react-router-dom";

export default function ResPage() {



  const q = useQuery({
    queryKey: ["getAllresturant"],


    queryFn: async () => {
      let url = "/getAllresturant";

      var ret = await apiClient.get(url);

      return ret;
    },
  });

  return (
    <section>
      <Slider />
      <Container style={{ width: "85%" }}>
        <Header />
        <div className="row">
          {!q.isLoading && q.data?.data.map((data,index) => (
            <div className="col-sm-12 col-md-6 col-lg-4" key={data.id}>
              <Link to={`/selectres`} key={index}>
              <Card
                title={data.title}
                price={0}
                img={data.ResImg}
                stars={data.stars}
                mealImg={data.ResImg}
                reviewsNum={data.rating}
                resName={data.resName}
                fav={false}
              />
              </Link>
            </div>
          ))}
        </div>
      </Container>

      <Footer />
    </section>
  );
}


// const resData = [
//   {
//     id: "res1",
//     resName: "Restaurant 1",
//     title: "buttermilk pancakes",

//     image:
//       "http://image.shutterstock.com/z/stock-vector-food-restaurant-logo-icon-264413183.jpg",
//     minCharge: "5.00 LE",
//     rating: "3",
//     titlMC: "foodCirclesMenuCat",
//     url_menucat:
//       "https://gist.github.com/omar94hamza/95723a43bb97f21567c99948c31dc7aa/raw/d09556d7f9591c9ac36d499a48c82d0012589a03/foodcirclesmenucat.json",
//     type: ["Chicken", "Meat"],
//     stars: 4,
//     fav: true,
//     mealImg: img1,
//     reviewsNum: 443,
//   },
//   {
//     id: "res2",
//     title: "diner double",
//     resName: "Restaurant 2",
//     image:
//       "http://image.shutterstock.com/z/stock-vector-food-restaurant-logo-icon-264413183.jpg",
//     minCharge: "10.00 LE",
//     rating: "4",
//     titlMC: "kfc",
//     url_menucat:
//       "https://gist.github.com/omar94hamza/5915e318a11a40f7a70e440804431e45/raw/9dfee086fc5f6734c7306c17e5fa97e3683df2d8/kfc.json",
//     type: ["Fast Food", "Chicken", "Sandwiches"],
//     stars: 3,
//     mealImg: img2,
//     reviewsNum: 1024,
//   },
//   {
//     id: "res3",
//     title: "godzilla milkshake",
//     resName: "Restaurant 3",
//     image:
//       "http://image.shutterstock.com/z/stock-vector-food-restaurant-logo-icon-264413183.jpg",
//     minCharge: "6.00 LE",
//     rating: "3",
//     titlMC: "dinwaredinesout",
//     url_menucat:
//       "https://gist.github.com/omar94hamza/00f1be36672b4b12cc3125cc5fb4dc90/raw/c6e6c32835d60ab030258b9c051e73a42aea58b6/dinwaredinesout.json",
//     type: ["Burgers", "Fast Food"],
//     stars: 5,
//     mealImg: img3,
//     reviewsNum: 326,
//   },
//   {
//     id: "res4",
//     title: "country delight",
//     resName: "Restaurant 4",
//     image:
//       "http://image.shutterstock.com/z/stock-vector-food-restaurant-logo-icon-264413183.jpg",
//     minCharge: "Free",
//     rating: "5",
//     titlMC: "windmills",
//     url_menucat:
//       "https://gist.github.com/omar94hamza/e01f92414a77f555fcd45255a961a9ba/raw/17ddf8c4e84e5d854084d06e5d8bfeec9bffa79d/windmills.json",
//     type: ["Grilled", "Oriental", "Sandwiches"],
//     stars: 2,
//     mealImg: img4,
//     reviewsNum: 547,
//   },
//   {
//     id: "res5",
//     title: "egg attack",
//     resName: "Restaurant 5",
//     image:
//       "http://image.shutterstock.com/z/stock-vector-food-restaurant-logo-icon-264413183.jpg",
//     minCharge: "7.00 LE",
//     rating: "2",
//     fav: true,
//     titlMC: "burgerking",
//     url_menucat:
//       "https://gist.github.com/omar94hamza/c1e7a0220547235c515e3b073bb4e7ff/raw/e122811cf463a8f47d90a5aa7407cc3998dbb21b/burgerking.json",
//     type: ["Burgers", "Fast Food"],
//     stars: 5,
//     mealImg: img5,
//     reviewsNum: 107,
//   },
//   {
//     id: "res6",
//     title: "oreo dream",
//     resName: "Restaurant 6",
//     image:
//       "http://image.shutterstock.com/z/stock-vector-food-restaurant-logo-icon-264413183.jpg",
//     minCharge: "16.00 LE",
//     rating: "4",
//     titlMC: "restaurant",
//     url_menucat:
//       "https://gist.github.com/omar94hamza/9725b018f68150d3e50d9c33ec8a3e93/raw/728fddef7356572f9bb8e7608909b542983d8fd3/restaurant.json",
//     type: ["Pizza"],
//     stars: 1,
//     mealImg: img6,
//     reviewsNum: 367,
//   },
//   {
//     id: "res7",
//     title: "bacon overflow",
//     resName: "Restaurant 7",
//     image:
//       "http://image.shutterstock.com/z/stock-vector-food-restaurant-logo-icon-264413183.jpg",
//     minCharge: "9 LE",
//     rating: "4",
//     titlMC: "restaurant",
//     url_menucat:
//       "https://gist.github.com/omar94hamza/9725b018f68150d3e50d9c33ec8a3e93/raw/728fddef7356572f9bb8e7608909b542983d8fd3/restaurant.json",
//     type: ["Pizza"],
//     stars: 1,
//     mealImg: img7,
//     reviewsNum: 1258,
//   },
//   {
//     id: "res8",
//     title: "american classic",
//     resName: "Restaurant 8",
//     image:
//       "http://image.shutterstock.com/z/stock-vector-food-restaurant-logo-icon-264413183.jpg",
//     minCharge: "22.00 LE",
//     rating: "4",
//     titlMC: "restaurant",
//     url_menucat:
//       "https://gist.github.com/omar94hamza/9725b018f68150d3e50d9c33ec8a3e93/raw/728fddef7356572f9bb8e7608909b542983d8fd3/restaurant.json",
//     type: ["Pizza"],
//     stars: 4,
//     mealImg: img8,
//     reviewsNum: 435,
//   },
//   {
//     id: "res9",
//     title: "quarantine buddy",
//     resName: "Restaurant 9",
//     image:
//       "http://image.shutterstock.com/z/stock-vector-food-restaurant-logo-icon-264413183.jpg",
//     minCharge: "38.00 LE",
//     rating: "4",
//     titlMC: "restaurant",
//     url_menucat:
//       "https://gist.github.com/omar94hamza/9725b018f68150d3e50d9c33ec8a3e93/raw/728fddef7356572f9bb8e7608909b542983d8fd3/restaurant.json",
//     type: ["Pizza"],
//     stars: 3,
//     fav: true,
//     mealImg: img9,
//     reviewsNum: 241,
//   },
// ];