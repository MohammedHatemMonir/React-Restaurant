// ScrollUpButton.js
import React, { useState, useEffect } from "react";
import "./BtnUp.scss";
import ArrowForwardIcon from "./../../Icons/ArrowForwardIcon";
import { FaArrowUp } from "react-icons/fa6";

const BtnUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="scroll-up-button">
      <div className="arrow-up">
        <div
          className={`scroll-up-button ${isVisible ? "visible" : "hidden"}`}
          onClick={scrollToTop}
        >
          <button>
            <FaArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BtnUp;
