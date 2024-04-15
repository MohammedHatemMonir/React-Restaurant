import { useQuery } from "react-query";
import { apiClient } from "../../Data/apiclient";
import LocationDotIcon from "../../Icons/LocationDotIcon";
import Stars from "../Stars/Stars";
import { Container, Row, Col } from "react-bootstrap";
import RightArrowIcon from "../../Icons/RightArrowIcon";
import CommentBox from "./CommentBox";
import { useParams } from "react-router-dom";
import { Cart, UserData } from "../../Globals";
import AddMealButton from "./new/AddMealButton";
import { useSignal } from "@preact/signals-react";
import MealDetailsModal from "./MealDetailsModal";
import ReviewsCard from "./../Reviews/ReviewsCard";
import DeleteIcon from "./../../Icons/DeleteIcon";
import EditIcon from "./../../Icons/EditIcon";
import DeleteMealModal from "./DeleteMealModal";
import EditMealModal from "./EditMealModal";
import { Link } from "react-router-dom";

export default function SelectResPage() {
  const { resID, resName } = useParams();
  console.log("resID", resID);

  const q = useQuery({
    queryKey: ["rest" + resID],
    cacheTime: 60000,
    // staleTime: 60000,
    queryFn: async () => {
      let url = `/getResturantWithMeals/${resID}`;
      const ret = await apiClient.get(url);
      console.log("Returned Meals", ret);
      return ret;
    },
  });

  console.log("query data", q.data?.data);

  return (
    <div className="select-res-page">
      <div id="page-content restaurant-container" className="page-content">
        <div className="restaurant-cover active-on-menu-tab  menu-tab-activated">
          {/* Banner Img */}
          <img
            loading="lazy"
            src={q.data?.data?.restaurant?.ResBanner}
            alt="cover photo"
          />
        </div>

        <div className="container">
          <Row className="section separator restaurant-details-section active-on-menu-tab  menu-tab-activated">
            <Col sm={12} className="section-header">
              <div className="restaurant-image-container">
                <div className="restaurant-image image-ratio ratio-square">
                  {/* Res Image */}
                  <img
                    loading="lazy"
                    src={q.data?.data?.restaurant?.ResImg}
                    alt={q.data?.data?.restaurant?.ResName}
                    className="v-center"
                  />
                </div>
              </div>

              <div className="resturant-info-container">
                <div className="header-content-container">
                  <div className="content">
                    <div className="resturant-name">
                      <h1 className="title">
                        {q.data?.data?.restaurant?.ResName}
                        <span className="green">
                          {UserData.value.role == "ADMIN" && (
                            <Link to={`/RestaurantDashboard/${resID}`}>
                              Statistics
                            </Link>
                          )}
                        </span>
                      </h1>
                    </div>
                    <div className="subheader">
                      <div className="tags-rate-container">
                        <div className="rate-container">
                          <div className="rest-rate">
                            <div
                              className="vue-star-rating"
                              style={{
                                transform: "scale(0.5)",
                                marginLeft: "-45px",
                                marginBottom: "35px",
                                // marginTop: "-10px",
                              }}
                            >
                              <Stars
                                stars1={q.data?.data?.restaurant?.rating}
                              />
                            </div>
                          </div>
                        </div>
                        <ul
                          className="cuisines-list h-dots-list"
                          style={{ marginTop: "8px" }}
                        >
                          <li
                            className="list-item"
                            style={{
                              marginTop: "-23px",
                            }}
                          >
                            {q.data?.data?.restaurant?.Categoery}
                          </li>
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
                          {q.data?.data?.restaurant?.location}
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
                                    <AddMealButton Resid={resID} />
                                  </div>
                                )}
                                <Container>
                                  {!q.isLoading &&
                                    q.data?.data?.meals?.map((item, index) => {
                                      return (
                                        <TempMealCard
                                          key={index}
                                          id={item._id}
                                          name={item.MealName}
                                          price={item.Price}
                                          desc={item.Description}
                                          rating={item.rating}
                                          mealImg={item.MealImg}
                                          resID={resID}
                                          resName={resName}
                                          MealComments={item.MealComments}
                                        />
                                      );
                                    })}
                                </Container>
                              </Col>
                              {/* style={{ transform: "scale(0.9)" }} */}
                              <Col sm={4} style={{ transform: "scale(1)" }}>
                                <CommentBox resID={resID} />
                                {/* <Reviews /> */}
                                {!q.isLoading &&
                                  q.data?.data?.resComments?.map(
                                    (item, index) => {
                                      return (
                                        <ReviewsCard
                                          key={index + "rescomment" + resID}
                                          name={item.user.name}
                                          stars={item.commentSentmint[2] * 5}
                                          emotion={item.commentSentmint[1]}
                                          comment={item.Comment}
                                          image={
                                            item.user.userImg ||
                                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8PyKYrBKAWWy6YCbQzWQcwIRqH8wYMPluIZiMpV1w0NYSbocTZz0ICWFkLcXhaMyvCwQ&usqp=CAU"
                                          }
                                        />
                                      );
                                    }
                                  )}
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
    </div>
  );
}

function TempMealCard({
  id,
  name,
  desc,
  price,
  mealImg,
  rating,
  resID,
  resName,
  MealComments,
}) {
  function AddToCart() {
    if (Cart.value.ResId != resID) {
      console.log("ID NOT EQUAL");
      Cart.value.ResId = resID;
      Cart.value.ResName = resName;
      Cart.value.meals = [];
    }
    let tempCart = Cart.value;

    if (
      !tempCart.meals.some((meal) =>
        meal.id == id ? (meal.quantity += 1) : false
      )
    ) {
      console.log("meal not found");
      tempCart.meals.push({
        id: id,
        name: name,
        mealImg: mealImg,
        rating: rating,
        desc: desc,
        price: price,
        quantity: 1,
      });
    }
    Cart.value = {};
    Cart.value = tempCart;
    console.log("Cart", Cart.value, "temp cart", tempCart);
  }
  const displayModal = useSignal(false);
  function handleClose() {
    displayModal.value = false;
  }

  // Hema Here
  const showDelModal = useSignal(false);
  const showEditModal = useSignal(false);

  // Handle open and close popup modals
  function onOpenDel(e) {
    // e.stopPropagation();
    e.preventDefault();
    showDelModal.value = true;
  }
  function onOpenEdit(e) {
    // e.stopPropagation();
    e.preventDefault();
    showEditModal.value = true;
  }

  function onCloseDel() {
    showDelModal.value = false;
  }
  function onCloseEdit() {
    showEditModal.value = false;
  }

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
      {/* Meal Img */}
      <img
        onClick={() => (displayModal.value = true)}
        src={mealImg}
        alt={mealImg}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          border: "none",
        }}
        className="meal-card__image"
      />
      <div style={{ padding: "1rem" }} className="meal-card__content">
        {/* Modal Here */}
        <MealDetailsModal
          id={id}
          openModal={displayModal.value}
          closeModal={handleClose}
          mealName={name}
          mealDesc={desc}
          mealImg={mealImg}
          mealPrice={price}
          MealComments={MealComments}
        />
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
          {desc}
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
              <div className="font-weight-bold">
                <span className="text-danger"> {price}</span>
                <span className="text-dark"> EGP</span>
              </div>
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
            <Stars stars1={rating} />
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
            onClick={AddToCart}
            className="btn meal-card__button"
          >
            Buy
          </button>
        </div>
        {UserData.value.role == "ADMIN" && (
          <div className="position-relative">
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                transform: "scale(1.5)",
                margin: "15px 17% 10px 17%",
              }}
            >
              <div onClick={onOpenDel} className="">
                <DeleteIcon className="delete-icon" />
              </div>
              <div onClick={onOpenEdit} className="">
                <EditIcon className="edit-icon" />
              </div>
            </div>
          </div>
        )}
      </div>
      {UserData.value.role == "ADMIN" && showDelModal.value == true && (
        <DeleteMealModal
          mealId={id}
          mealName={name}
          openModal={() => (showDelModal.value = true)}
          closeModal={onCloseDel}
        />
      )}
      {UserData.value.role == "ADMIN" && showEditModal.value == true && (
        <EditMealModal
          mealId={id}
          mealName={name}
          openModal={() => (showEditModal.value = true)}
          closeModal={onCloseEdit}
        />
      )}
    </div>
  );
}
