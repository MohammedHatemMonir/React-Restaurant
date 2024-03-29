import "./ResPageBox.scss";
import "./ResPage.scss";
import Slider from "./Slider";
import Footer from "./Footer";
import { useQuery } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { Container } from "reactstrap";
import { TbTruckDelivery } from "react-icons/tb";
import { IoMdCard } from "react-icons/io";
import { Link } from "react-router-dom";
import Filters from "./Filters";
import AddRestaurantButton from "./AddRestaurantButton";
import { UserData } from "../../Globals";
import Stars from "./../Stars/Stars";

import CookingLoader from "./../Loaders/CookingLoader";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import EditIcon from "./../../Icons/EditIcon";
import DeleteIcon from "./../../Icons/DeleteIcon";

export default function ResPage() {
  const q = useQuery({
    queryKey: ["getAllresturant"],
    cacheTime: 3 * 60000, //3 minutes
    queryFn: async () => {
      let url = "/getAllresturant";

      var ret = await apiClient.get(url);
      console.log("restaurants", ret.data);

      return ret;
    },
  });
  if (q.isLoading) {
    return (
      <>
        <CookingLoader />
      </>
    );
  }

  if (q.data)
    return (
      <>
        <style
          type="text/css"
          dangerouslySetInnerHTML={{
            __html:
              ".vue-star-rating-star[data-v-34cbeed1]{display:inline-block}.vue-star-rating-pointer[data-v-34cbeed1]{cursor:pointer}.vue-star-rating[data-v-34cbeed1]{display:flex;align-items:center}.vue-star-rating-inline[data-v-34cbeed1]{display:inline-flex}.vue-star-rating-rating-text[data-v-34cbeed1]{margin-top:7px;margin-left:7px}.vue-star-rating-rtl[data-v-34cbeed1]{direction:rtl}.vue-star-rating-rtl .vue-star-rating-rating-text[data-v-34cbeed1]{margin-right:10px;direction:rtl}",
          }}
        />
        <section className="">
          <Slider />
          <Container style={{ width: "85%" }}>
            {/* Old navbar with search */}
            {/* <div className="bg-danger">
          <Header />
        </div> */}
          </Container>
          {/* NavBar & Loader*/}
          {/* <MainCards /> */}
          <div className="mt-5">
            <div id="app" className="">
              <div id="page-content" className="page-content">
                <div className="container d-flex">
                  {UserData.value.role == "ADMIN" && (
                    <div>
                      <AddRestaurantButton />
                    </div>
                  )}
                  <Filters />
                  {/* select-res-page */}
                  <div className="row">
                    <div className="col-header col-xs-16">
                      <h2 className="col-title inline-block">
                        Restaurants
                        <p style={{ display: "inline", fontSize: "17px" }}>
                          ( 1074 )
                        </p>
                      </h2>
                    </div>
                    <div
                      id="rest-list-col"
                      className="delivery-rest-list col-sm-13 col-xs-16"
                    >
                      <div className="col-body select-res-page">
                        <div className="row">
                          {!q.isLoading &&
                            Array.isArray(q.data?.data) &&
                            q.data?.data?.map((data, index) => {
                              return (
                                <ResCard
                                  key={index}
                                  id={data._id}
                                  name={data.ResName}
                                  ResImg={data.ResImg}
                                  MealImg={data.MealImg}
                                  start1={data.rating}
                                />
                              );
                            })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </>
    );
}

function ResCard({ id, name, start1, ResImg, MealImg }) {
  return (
    <>
      <Link
        to={`/restaurant/${id}/${name}`}
        className="restaurant-card restaurant-delivery-card col-md-5 col-sm-8 col-xs-16"
      >
        <div className="card-inner">
          <img
            src={
              MealImg ||
              `https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/92edf264-8a29-4efb-997a-ca2fdf9b3a92.jpg`
            }
            alt={name}
            style={{ width: "100%" }}
          />
          <div className="card-content clickable-item">
            <Link className="clickable-anchor" />
            <div>
              <div className="pull-right flip">
                <div
                  data-v-34cbeed1=""
                  className="vue-star-rating vue-star-rating-inline"
                >
                  <div className="vue-star-rating position-relative">
                    <div
                      style={{
                        transform: "scale(0.45)",
                        position: "absolute",
                        marginLeft: "-145px",
                        marginTop: "-21px",
                      }}
                    >
                      <Stars stars1={start1} />
                    </div>
                  </div>
                </div>
                <span className="reviews-count">(1593)</span>
              </div>
            </div>
            <div className="rest-logo image-ratio ratio-square radius">
              <div className="ratio-content image-loading image-loaded">
                <img
                  alt={name}
                  className="b-lazy"
                  src={
                    ResImg ||
                    `https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/15ecd61e-51fe-44be-9e09-46d6d6cd1f9e.jpg`
                  }
                />
              </div>
            </div>
            <div className="main-data">
              <h3 className="card-title">{name}</h3>
              <ul className="cuisines-list h-dots-list truncate p-0 ">
                <li className="list-item">American</li>
              </ul>
              <span title="staticContent.filters.onlinePayment">
                <span
                  className="icon online-payment-icon"
                  style={{ transform: "scale(1.3)" }}
                >
                  <IoMdCard />
                </span>
              </span>
            </div>
          </div>
          {UserData.value.role == "ADMIN" && (
            <div>
              <Row
                className="justify-content-between mx-5"
                style={{ transform: "scale(1.3)" }}
              >
                <Col sm={6} className="text-start">
                  <Link to="/profile">
                    <DeleteIcon className="delete-icon" />
                  </Link>
                </Col>
                <Col sm={6} className="text-end">
                  <Link to="/profile">
                    <EditIcon className="edit-icon" />
                  </Link>
                </Col>
              </Row>
            </div>
          )}
        </div>
      </Link>
    </>
  );
}
