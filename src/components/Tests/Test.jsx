import React, { useEffect } from "react";
import "./test.scss";

const Test = () => {
  useEffect(() => {
    const parallax = (e) => {
      document.querySelectorAll(".layer").forEach((layer) => {
        const speed = layer.getAttribute("data-speed");

        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener("mousemove", parallax);

    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);

  return (
    <div className="Parallax">
      <section>
        <img
          src="https://raw.githubusercontent.com/Samaelish/Background-Parallax-Effect-on-Mousemove/main/1.png"
          data-speed={-5}
          className="layer"
          alt=""
        />
        <img
          src="https://raw.githubusercontent.com/Samaelish/Background-Parallax-Effect-on-Mousemove/main/2.png"
          data-speed={5}
          className="layer"
          alt=""
        />
        <img
          src="https://raw.githubusercontent.com/Samaelish/Background-Parallax-Effect-on-Mousemove/main/3.png"
          data-speed={2}
          className="layer"
          alt=""
        />
        <img
          src="https://raw.githubusercontent.com/Samaelish/Background-Parallax-Effect-on-Mousemove/main/4.png"
          data-speed={6}
          className="layer"
          alt=""
        />
        <img
          src="https://raw.githubusercontent.com/Samaelish/Background-Parallax-Effect-on-Mousemove/main/5.png"
          data-speed={8}
          className="layer"
          alt=""
        />
        <img
          src="https://raw.githubusercontent.com/Samaelish/Background-Parallax-Effect-on-Mousemove/main/6.png"
          data-speed={-2}
          className="layer"
          alt=""
        />
        <img
          src="https://raw.githubusercontent.com/Samaelish/Background-Parallax-Effect-on-Mousemove/main/7.png"
          data-speed={4}
          className="layer"
          alt=""
        />
        <img
          src="https://raw.githubusercontent.com/Samaelish/Background-Parallax-Effect-on-Mousemove/main/8.png"
          data-speed={-9}
          className="layer"
          alt=""
        />
        <img
          src="https://raw.githubusercontent.com/Samaelish/Background-Parallax-Effect-on-Mousemove/main/9.png"
          data-speed={6}
          className="layer"
          alt=""
        />
        <img
          src="https://raw.githubusercontent.com/Samaelish/Background-Parallax-Effect-on-Mousemove/main/10.png"
          data-speed={-7}
          className="layer"
          alt=""
        />
        <img
          src="https://raw.githubusercontent.com/Samaelish/Background-Parallax-Effect-on-Mousemove/main/11.png"
          data-speed={-5}
          className="layer"
          alt=""
        />
        <img
          src="https://raw.githubusercontent.com/Samaelish/Background-Parallax-Effect-on-Mousemove/main/12.png"
          data-speed={5}
          className="layer"
          alt=""
        />
        <h2 className="layer" data-speed={2}>
          Parallax
        </h2>
      </section>
    </div>
  );
};

export default Test;
