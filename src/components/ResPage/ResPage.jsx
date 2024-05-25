import "./ResPageBox.scss";
// import Slider from "./Slider";
import Footer from "../Footer/Footer";
import { useQuery } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { Container, Row } from "reactstrap";
import AddRestaurantButton from "./AddRestaurantButton";
import { UserData } from "../../Globals";
import CookingLoader from "./../Loaders/CookingLoader";
import ResCard from "./ResCard";
import Parallax from "./Parallax";
import ResFilters from "./ResFilters";
import { Col } from "react-bootstrap";
import { useSignal } from "@preact/signals-react";

export default function ResPage() {
  const filterType = useSignal([]);

  const q = useQuery({
    queryKey: ["getAllresturant"],
    cacheTime: 3 * 60000, //3 minutes
    enabled: true,
    queryFn: async () => {
      let url = "/getAllresturant";

      var ret = await apiClient.get(url);
      console.log("restaurants", ret.data);

      return ret;
    },
  });

  const getCategoryiesQuery = useQuery({
    queryKey: ["getAllCategory"],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    queryFn: async () => {
      let url = `/getAllCategory`;
      const result = await apiClient.get(url);
      // console.log("hemaaaa", result);
      return result;
    },
  });

  function setFilter({ filterString }) {
    // var tempList = filterType.value;
    if (filterType.value.includes(filterString)) {
      filterType.value = filterType.value.filter(
        (item) => item !== filterString
      );
    } else {
      filterType.value = [...filterType.value, filterString];
    }
    console.log("filterType", filterType.value);
  }

  if (q.isLoading) {
    return (
      <>
        <CookingLoader />
        {/* Loading... */}
      </>
    );
  }

  if (q.data)
    return (
      <section>
        <div style={{ transform: "scale(0.95)" }}>
          <Parallax />
        </div>
        {/* <Slider /> */}

        <Container>
          {UserData.value.role == "owner" || UserData.value.role == "ADMIN" && <AddRestaurantButton />}
        </Container>
        {/* ResCards */}
        <div
        // id="rest-list-col"
        // col-sm-13 col-xs-16
        // className="delivery-rest-list "
        >
          <Container>
            <Row>
              <Col sm={12} md={2} className="mt-5">
                <div className="my-filters">
                  <section>
                    {/* Categories */}
                    <h2 className="sidebar-title">Categories</h2>
                    {!getCategoryiesQuery.isLoading &&
                      getCategoryiesQuery.data?.data?.Category.map(
                        (category, index) => (
                          <div key={`${index}+${category._id}`}>
                            <label className="sidebar-label-container">
                              <input
                                onClick={() => {
                                  setFilter({ filterString: category._id });
                                }}
                                type="checkbox"
                                value={category._id}
                                name={category.Categoery}
                              />
                              <span className="checkmark"></span>
                              {category.Categoery}
                            </label>
                          </div>
                        )
                      )}
                  </section>
                </div>
                {/* <ResFilters /> */}
              </Col>
              {/* ResCards */}
              <Col sm={12} md={10}>
                <Row>
                  {!q.isLoading &&
                    Array.isArray(q.data?.data) &&
                    q.data.data.map((data, index) => (
                      <Col key={index} sm={12} md={4} className="p-0 m-0">
                        <ResCard
                          id={data._id}
                          name={data.ResName}
                          ResImg={data.ResImg}
                          MealImg={data.MealImg}
                          stars1={data.rating}
                        />
                      </Col>
                    ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </div>

        {/* <div style={{ transform: "scale(0.90)" }}>
          <Row className="m-0 p-0">
            {!q.isLoading &&
              Array.isArray(q.data?.data) &&
              q.data.data.map((data, index) => (
                <Col sm={12} md={4} key={index} className="m-0 p-0">
                  <ResCard
                    id={data._id}
                    name={data.ResName}
                    ResImg={data.ResImg}
                    MealImg={data.MealImg}
                    stars1={data.rating}
                  />
                </Col>
              ))}
          </Row>
        </div> */}
        <Footer />
      </section>
    );
}
