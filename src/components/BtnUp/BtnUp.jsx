
import React, { useEffect } from "react";
import "./BtnUp.scss";
import { FaArrowUp } from "react-icons/fa6";
import { useSignal } from "@preact/signals-react";

const BtnUp = () => {
  const isVisible = useSignal(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      isVisible.value = true;
    } else {
      isVisible.value = false;
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
          className={`scroll-up-button ${
            isVisible.value ? "visible" : "hidden"
          }`}
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
