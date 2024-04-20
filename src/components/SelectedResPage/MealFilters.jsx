import "./MealFilters.scss";
import img1 from "../../images/cat-1.png";
import img2 from "../../images/cat-2.png";
import img3 from "../../images/cat-3.png";
import img4 from "../../images/cat-4.png";
import img5 from "../../images/cat-5.png";
import img6 from "../../images/cat-6.png";
import { Link } from "react-router-dom";
const MealFilters = () => {
  return (
    <>
      <h1 className="text-center font-weight-bold my-5">Categories</h1>
      <section className="category" style={{ transform: "scale(0.90)" }}>
        <Link to="#" className="box" style={{ textDecoration: "none" }}>
          <img src={img1} alt="category-img" />
          <h3>combo</h3>
        </Link>
        <Link to="#" className="box" style={{ textDecoration: "none" }}>
          <img src={img2} alt="category-img" />
          <h3>pizza</h3>
        </Link>
        <Link to="#" className="box" style={{ textDecoration: "none" }}>
          <img src={img3} alt="category-img" />
          <h3>burger</h3>
        </Link>
        <Link to="#" className="box" style={{ textDecoration: "none" }}>
          <img src={img4} alt="category-img" />
          <h3>chicken</h3>
        </Link>
        <Link to="#" className="box" style={{ textDecoration: "none" }}>
          <img src={img5} alt="category-img" />
          <h3>dinner</h3>
        </Link>
        <Link to="#" className="box" style={{ textDecoration: "none" }}>
          <img src={img6} alt="category-img" />
          <h3>coffee</h3>
        </Link>
      </section>
    </>
  );
};

export default MealFilters;
