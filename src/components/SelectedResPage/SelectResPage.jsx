import React from "react";
import { useQuery } from "react-query";
import { apiClient } from "../../Data/apiclient";
import LocationDotIcon from "../../Icons/LocationDotIcon";
import Reviews from "../Reviews/Reviews";
import Stars from "../Stars/Stars";
import { Container, Row, Col } from "react-bootstrap";
import RightArrowIcon from "../../Icons/RightArrowIcon";
import CommentBox from "./CommentBox";
import { useParams } from "react-router-dom";
import CardBox from "./CardBox";
import { UserData } from "../../Globals";
import AddMealButton from './new/AddMealButton';

export default function SelectResPage() {
  const { resID, resName } = useParams();
  console.log("resID", resID);


  const q = useQuery({
    queryKey: ["getAllresturant"],

    // cacheTime: 60000,
    // staleTime: 60000,
    queryFn: async () => {
      let url = `/getAllresturantWithMeals/${resID}`;

      const ret = await apiClient.get(url);
      console.log("Returned Meals", ret);
      return ret;
    },
  });

  console.log("query data", q.data?.data);

  return (
    <>
      <div id="page-content restaurant-container" className="page-content">
        <div className="restaurant-cover active-on-menu-tab  menu-tab-activated">
          <img
            src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/e7a942a5-9893-4587-8ece-07b967e44745.jpg"
            alt="cover photo"
          />
        </div>

        <div className="container">
          <Row className="section separator restaurant-details-section active-on-menu-tab  menu-tab-activated">
            <Col sm={12} className="section-header">
              <div className="restaurant-image-container">
                <div className="restaurant-image image-ratio ratio-square">
                  <img
                    src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/9a48939b-f7b2-4232-b2e0-c3e2ea588103.jpg"
                    alt="Munch &amp; Shake"
                    className="v-center"
                  />
                </div>
              </div>

              <div className="resturant-info-container">
                <div className="header-content-container">
                  <div className="content">
                    <div className="resturant-name">
                      <h1 className="title">
                        Munch &amp; Shake
                        <span className="green">Order online</span>
                      </h1>
                    </div>
                    <div className="subheader">
                      <div className="tags-rate-container">
                        <div className="rate-container">
                          <div className="rest-rate">
                            <div
                              data-v-34cbeed1=""
                              className="vue-star-rating"
                              style={{
                                transform: "scale(0.5)",
                                marginLeft: "-40px",
                                marginBottom: "35px",
                              }}
                            >
                              <Stars stars1={4} />
                            </div>
                          </div>
                        </div>
                        <ul
                          className="cuisines-list h-dots-list"
                          style={{ padding: "0px" }}
                        >
                          <li className="list-item">American</li>
                        </ul>
                      </div>
                      <div
                        className="info-item"
                        style={{ margin: "-10px -5px" }}
                      >
                        <span className="info-icon">
                          <svg viewBox="0 0 15 20">
                            <LocationDotIcon />
                          </svg>
                        </span>
                        <p className="info-value">
                          Tivolli Dome, Omar Ibn Khattab St ( Delivery Only )
                          <a
                            href="/cairo/delivery/heliopolis"
                            className="address-link mx-2"
                          >
                            Almaza, Heliopolis
                          </a>
                          <a
                            href="/cairo/munch-shake-my54k/heliopolis-yv4k3/branches"
                            aria-controls="reviews-tab"
                            role="tab"
                            className="side-margin more-btn"
                          >
                            +3 more
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            {/* <div className="col-sm-4 restaurant-actions"> <span><a className="circular-btn"> <PhoneIcon /> </a></span></div> */}
          </Row>
          <Row>
            <Col sm={8}>
              {/* <div className="section delivery-info-section"></div> */}
            </Col>
            <Col sm={8} className="tabs-header">
              <div className="nav nav-tabs">
                <ul id="restaurant-tabs-nav" role="tablist">
                  <li
                    role="presentation"
                    className="tab-btn menu-tab-btn active false"
                  >
                    <h2>
                      <a
                        aria-controls="reviews-tab"
                        role="tab"
                        style={{ cursor: "pointer" }}
                      >
                        Menu
                      </a>
                    </h2>
                  </li>
                  <li role="presentation" className="tab-btn false">
                    <h2>
                      <a
                        aria-controls="info-tab"
                        role="tab"
                        style={{ cursor: "pointer" }}
                      >
                        About
                      </a>
                    </h2>
                  </li>
                  <li role="presentation" className="tab-btn false">
                    <h2>
                      <a
                        aria-controls="reviews-tab"
                        role="tab"
                        style={{ cursor: "pointer" }}
                      >
                        Branches
                      </a>
                    </h2>
                  </li>
                  <li role="presentation" className="tab-btn false">
                    <h2>
                      <a
                        aria-controls="reviews-tab"
                        role="tab"
                        style={{ cursor: "pointer" }}
                      >
                        Reviews
                      </a>
                    </h2>
                  </li>
                </ul>
              </div>

              {/* <div className="info-items-group">
                <span className="info-item positive">
                  <span className="icon info-icon">
                    <Day2DayIcon />
                  </span>
                </span>

                <div className="info-item text-center d-flex">
                  <div className="icon info-icon">
                    <ClockIcon />
                  </div>
                  <p className=""> 12:00 PM 02:00 AM</p>
                </div>
              </div> */}
            </Col>
          </Row>

          <Row>
            <Col sm={12} className="main-content ">
              <div className="section tabs-section restaurant-tabs-section ">
                <div className="tabs-body">
                  <div className="tab-content no-padding">
                    <div
                      role="tabpanel"
                      id="menu-tab"
                      className="tab-pane restaurant-menu-tab active"
                    >
                      <div>
                        <div>
                          {/* <div className="row"> */}
                          <div className="tab-content no-padding">
                            <Row className="d-flex">
                              <Col sm={2} className="p-0 border-right">
                                <ul className="menu-cats p-0">
                                  <li className="cat ">
                                    <a
                                      className="scroll-to-div"
                                      style={{
                                        cursor: "pointer",
                                        textDecoration: "none",
                                      }}
                                    >
                                      Offers
                                      <span className="arrow-right">
                                        <RightArrowIcon />
                                      </span>
                                    </a>
                                  </li>
                                  <li className="cat">
                                    <a
                                      className="scroll-to-div"
                                      style={{
                                        cursor: "pointer",
                                        textDecoration: "none",
                                      }}
                                    >
                                      Top Dishes
                                    </a>
                                    <span className="arrow-right">
                                      <RightArrowIcon />
                                    </span>
                                  </li>
                                  <li className="cat">
                                    <a
                                      className="scroll-to-div"
                                      style={{
                                        cursor: "pointer",
                                        textDecoration: "none",
                                      }}
                                    >
                                      Value Meals
                                    </a>
                                    <span className="arrow-right">
                                      <RightArrowIcon />
                                    </span>
                                  </li>
                                  <li className="cat">
                                    <a
                                      className="scroll-to-div"
                                      style={{
                                        cursor: "pointer",
                                        textDecoration: "none",
                                      }}
                                    >
                                      Munchies
                                    </a>
                                    <span className="arrow-right">
                                      <RightArrowIcon />
                                    </span>
                                  </li>
                                  <li className="cat">
                                    <a
                                      className="scroll-to-div"
                                      style={{
                                        cursor: "pointer",
                                        textDecoration: "none",
                                      }}
                                    >
                                      Beef &amp; Dogs
                                    </a>
                                    <span className="arrow-right">
                                      <RightArrowIcon />
                                    </span>
                                  </li>
                                  <li className="cat">
                                    <a
                                      className="scroll-to-div"
                                      style={{
                                        cursor: "pointer",
                                        textDecoration: "none",
                                      }}
                                    >
                                      Chicken Sandwiches
                                    </a>
                                    <span
                                      className="arrow-right"
                                      style={{
                                        cursor: "pointer",
                                        textDecoration: "none",
                                      }}
                                    >
                                      <RightArrowIcon />
                                    </span>
                                  </li>
                                  <li className="cat">
                                    <a
                                      className="scroll-to-div"
                                      style={{
                                        cursor: "pointer",
                                        textDecoration: "none",
                                      }}
                                    >
                                      Vegan Sandwiches
                                    </a>
                                    <span
                                      className="arrow-right"
                                      style={{
                                        cursor: "pointer",
                                        textDecoration: "none",
                                      }}
                                    >
                                      <RightArrowIcon />
                                    </span>
                                  </li>
                                </ul>
                              </Col>

                              <Col sm={6}>
                                {/* Add button for admin only*/}
                                {UserData.value.role == "ADMIN" && (
                                  <div>
                                    <AddMealButton />
                                  </div>
                                )}
                                <Container>
                                  {!q.isLoading &&
                                    q.data?.data?.meals.map((item, index) => {
                                      return (
                                        <TempMealCard
                                          id={item.id}
                                          name={item.ResName}
                                          key={index}
                                        />
                                      );
                                    })}
                                </Container>
                              </Col>
                              {/* style={{ transform: "scale(0.9)" }} */}
                              <Col sm={4} style={{ transform: "scale(1)" }}>
                                <CommentBox resID={resID} />
                                <Reviews />
                              </Col>
                            </Row>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

function TempMealCard({ id, name, description, price, imageUrl, stars }) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        boxShadow:
          "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
        borderRadius: "0.5rem",
        overflow: "hidden",
        margin: "0.75rem 0",
        cursor: "pointer",
        transition: "background-color 0.3s",
      }}
      className="meal-card"
    >
      <img
        src="https://media.istockphoto.com/id/1295633127/photo/grilled-chicken-meat-and-fresh-vegetable-salad-of-tomato-avocado-lettuce-and-spinach-healthy.jpg?s=612x612&w=0&k=20&c=Qa3tiqUCO4VpVMQDXLXG47znCmHr_ZIdoynViJ8kW0E="
        alt={name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          border: "none",
        }}
        className="meal-card__image"
      />
      <div style={{ padding: "1rem" }} className="meal-card__content">
        <h3
          style={{
            fontSize: "1.125rem",
            fontWeight: "600",
            marginBottom: "0.5rem",
          }}
          className="meal-card__title"
        >
          {name}
        </h3>
        <p
          style={{
            color: "#4b5563",
            marginBottom: "1rem",
          }}
          className="meal-card__description"
        >
          {description}
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="meal-card__footer"
        >
          <div>
            <p
              style={{
                color: "#dc2626",
                fontSize: "1.125rem",
                fontWeight: "600",
                margin: "0",
              }}
              className="meal-card__price"
            >
              1200${price}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "-60px",
            }}
            className="meal-card__rating"
          >
            <Stars stars1={5} />
          </div>
          <button
            style={{
              backgroundColor: "#4f46e5",
              color: "#fff",
              border: "none",
              padding: "0.5rem 1rem",
              borderRadius: "0.25rem",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
            className="btn meal-card__button"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
