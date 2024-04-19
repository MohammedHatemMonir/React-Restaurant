import "./ResPageBox.scss";
import Slider from "./Slider";
import Footer from "./Footer";
import { useQuery } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { Container, Row } from "reactstrap";
import Filters from "./Filters";
import AddRestaurantButton from "./AddRestaurantButton";
import { UserData } from "../../Globals";
import CookingLoader from "./../Loaders/CookingLoader";
import ResCard from "./ResCard";
import Parallax from "./Parallax";
import { Col } from "react-bootstrap";
import CartBody from "../Navbar/CartBody";

export default function ResPage() {
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
  if (q.isLoading) {
    return (
      <>
        <CookingLoader />
      </>
    );
  }

  if (q.data)
    return (
      <section>
        <div style={{ transform: "scale(0.95)" }}>
          <Parallax />
        </div>
        <Slider />
        <div style={{ transform: "scale(0.95)" }}>
          <Filters />
        </div>
        <Container>
          {UserData.value.role == "ADMIN" && <AddRestaurantButton />}
        </Container>
        {/* ResCards */}
        <div style={{ transform: "scale(0.95)" }}>
          <Row>
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
        </div>
      </section>
    );
}
