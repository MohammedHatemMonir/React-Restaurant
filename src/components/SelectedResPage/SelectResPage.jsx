import { useQuery } from "react-query";
import { apiClient } from "../../Data/apiclient";
import LocationDotIcon from "../../Icons/LocationDotIcon";
import Stars from "../Stars/Stars";
import { Container, Row, Col } from "react-bootstrap";
import RightArrowIcon from "../../Icons/RightArrowIcon";
import CommentBox from "./CommentBox";
import { useParams } from "react-router-dom";
import { UserData } from "../../Globals";
import AddMealButton from "./new/AddMealButton";
import ReviewsCard from "./../Reviews/ReviewsCard";
import { Link } from "react-router-dom";
import MealCard from "./MealCard";
import ChooseUs from "./ChooseUs";

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
      console.log("Returned Mealsssss", ret);
      return ret;
    },
  });

  console.log("query data", q.data?.data);

  return (
    <>
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
            <div style={{ transform: "scale(0.90)" }}>
              <ChooseUs resName={q.data?.data?.restaurant?.ResName} />
            </div>
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
                                <Col sm={6}>
                                  {/* Add button for admin only*/}
                                  {UserData.value.role == "ADMIN" && (
                                    <div>
                                      <AddMealButton Resid={resID} />
                                    </div>
                                  )}
                                  <Container>
                                    {!q.isLoading &&
                                      q.data?.data?.meals?.map(
                                        (item, index) => {
                                          return (
                                            <MealCard
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
                                        }
                                      )}
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
    </>
  );
}
