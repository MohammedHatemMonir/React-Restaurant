import React, { useEffect } from "react";
import homeImg from "../../images/home-img.png";
import parallax from "../../images/home-parallax-img.png";
import "./Parallax.scss";

export default function Parallax() {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (window.innerWidth - e.pageX * 2) / 90;
      const y = (window.innerHeight - e.pageY * 2) / 90;
      document.querySelector(
        ".home-parallax-img"
      ).style.transform = `translateX(${y}px) translateY(${x}px)`;
    };

    const handleMouseLeave = () => {
      document.querySelector(".home-parallax-img").style.transform =
        "translateX(0px) translateY(0px)";
    };

    const homeElement = document.querySelector(".home");
    homeElement.addEventListener("mousemove", handleMouseMove);
    homeElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      homeElement.removeEventListener("mousemove", handleMouseMove);
      homeElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="main1" style={{ transform: "scale(0.90)" }}>
      <section className="text-decoration-none home" id="home">
        <div className="text-decoration-none content">
          <span>Welcome To Dine Me</span>
          <h3>different spices for the different tastes 😋</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis unde
            dolores temporibus hic quam debitis tenetur harum nemo.
          </p>
          {/* <Link to="#" className="btn">
            order now
          </Link> */}
        </div>
        <div className="text-decoration-none image">
          <img src={homeImg} alt="" className="text-decoration-none home-img" />
          <img
            src={parallax}
            className="text-decoration-none home-parallax-img"
          />
        </div>
      </section>
    </div>
  );
}
