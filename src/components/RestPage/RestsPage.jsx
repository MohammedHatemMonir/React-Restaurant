import { useState } from "react";
import "./RestsPage.scss";
import { Link } from "react-router-dom";

const RestsPage = () => {


  return (
    <div className="rests-card">
      <h1 class="my-title">Restaurants Page</h1>
      <article className="card">
        <div className="card__info">
          <h3 className="card__title">Coffee Break</h3>
          <div
            className="card__rating"
            aria-label="Rating of five out of five stars"
            role="img"
          >
            <svg
              className="star-svg"
              width={15}
              height={15}
              viewBox="0 0 15 15"
              preserveAspectRatio=""
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.7 12.055l-3.92 2.138c-.359.195-.777-.12-.709-.534L3.82 9.13.648 5.926c-.29-.294-.13-.804.27-.864l4.384-.66 1.96-4.12a.48.48 0 01.876 0l1.96 4.12 4.383.66c.401.06.561.57.27.864l-3.17 3.205.748 4.528c.069.414-.35.729-.708.534L7.7 12.055z"
                fill="#F5A623"
                fillRule="evenodd"
              />
            </svg>
            <svg
              className="star-svg"
              width={15}
              height={15}
              viewBox="0 0 15 15"
              preserveAspectRatio=""
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.7 12.055l-3.92 2.138c-.359.195-.777-.12-.709-.534L3.82 9.13.648 5.926c-.29-.294-.13-.804.27-.864l4.384-.66 1.96-4.12a.48.48 0 01.876 0l1.96 4.12 4.383.66c.401.06.561.57.27.864l-3.17 3.205.748 4.528c.069.414-.35.729-.708.534L7.7 12.055z"
                fill="#F5A623"
                fillRule="evenodd"
              />
            </svg>
            <svg
              className="star-svg"
              width={15}
              height={15}
              viewBox="0 0 15 15"
              preserveAspectRatio=""
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.7 12.055l-3.92 2.138c-.359.195-.777-.12-.709-.534L3.82 9.13.648 5.926c-.29-.294-.13-.804.27-.864l4.384-.66 1.96-4.12a.48.48 0 01.876 0l1.96 4.12 4.383.66c.401.06.561.57.27.864l-3.17 3.205.748 4.528c.069.414-.35.729-.708.534L7.7 12.055z"
                fill="#F5A623"
                fillRule="evenodd"
              />
            </svg>
            <svg
              className="star-svg"
              width={15}
              height={15}
              viewBox="0 0 15 15"
              preserveAspectRatio=""
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.7 12.055l-3.92 2.138c-.359.195-.777-.12-.709-.534L3.82 9.13.648 5.926c-.29-.294-.13-.804.27-.864l4.384-.66 1.96-4.12a.48.48 0 01.876 0l1.96 4.12 4.383.66c.401.06.561.57.27.864l-3.17 3.205.748 4.528c.069.414-.35.729-.708.534L7.7 12.055z"
                fill="#F5A623"
                fillRule="evenodd"
              />
            </svg>
            <svg
              className="star-svg"
              width={15}
              height={15}
              viewBox="0 0 15 15"
              preserveAspectRatio=""
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.7 12.055l-3.92 2.138c-.359.195-.777-.12-.709-.534L3.82 9.13.648 5.926c-.29-.294-.13-.804.27-.864l4.384-.66 1.96-4.12a.48.48 0 01.876 0l1.96 4.12 4.383.66c.401.06.561.57.27.864l-3.17 3.205.748 4.528c.069.414-.35.729-.708.534L7.7 12.055z"
                fill="#F5A623"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <p />
          <div className="card__address">123 Main Street</div>
          <div className="card__address card__address--city">
            <span>Pittsburgh,</span> <abbr title="Pennsylvania">PA</abbr>
          </div>
          <p />
        </div>
        <img
          className="card__img"
          alt="Image of food at Meat Hut"
          src=""
        />
        <Link to="/" className="button">
          2 Reviews
        </Link>
      </article>
    </div>
  );
};

export default RestsPage;
