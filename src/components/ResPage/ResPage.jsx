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
import "./ResFilters.scss";
import { Col } from "react-bootstrap";
import { useSignal } from "@preact/signals-react";

export default function ResPage() {
  const categoryName = useSignal([]);
  const filterType = useSignal([]);

  const getCategoryName = (e) => {
    if (categoryName.value.includes(e.target.name)) {
      categoryName.value = categoryName.value.filter(
        (item) => item !== e.target.name
      );
    } else {
      categoryName.value = [...categoryName.value, e.target.name];
    }
    // categoryName.value = e.target.name;
    console.log("categoryName", categoryName.value);
  };

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
    return <CookingLoader />;
  }

  if (q.data)
    return (
      <section>
        <div>
          <Parallax />
        </div>
        {/* <Slider /> */}
        <Container>
          {UserData.value.role == "ADMIN" && <AddRestaurantButton />}
        </Container>
        {/* ResCards */}
        <div>
          <Container>
            <Row>
              <Col sm={12} md={2} className="mt-5">
                <div className="my-filters">
                  <section>
                    {/* Categories */}
                    <h2 className="sidebar-title">Categories</h2>
                    {!getCategoryiesQuery.isLoading &&
                      getCategoryiesQuery.data?.data?.categories.map(
                        (category, index) => (
                          <div key={`${index}+${category._id}`}>
                            <label className="sidebar-label-container">
                              <input
                                onChange={getCategoryName}
                                onClick={() => {
                                  setFilter({ filterString: category._id });
                                }}
                                type="checkbox"
                                value={category._id}
                                name={category.category}
                              />
                              <span className="checkmark"></span>
                              {category.category}
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
                    q.data.data.map(
                      (data, index) =>
                        (categoryName.value?.length === 0 ||
                          categoryName.value?.includes(
                            data.categoryId.category
                          )) && (
                          <Col
                            key={index}
                            sm={12}
                            md={6}
                            lg={4}
                            className="p-0 m-0"
                          >
                            <ResCard
                              id={data._id}
                              name={data.ResName}
                              ResImg={data.ResImg}
                              MealImg={data.MealImg}
                              stars1={data.rating}
                              category={data.categoryId.category}
                              location={data.location}
                              ownerId={data.ownerId}
                            />
                          </Col>
                        )
                    )}
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer />
      </section>
    );
}
