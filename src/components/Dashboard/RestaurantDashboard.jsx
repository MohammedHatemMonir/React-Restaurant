import { Card, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { apiClient } from "../../Data/apiclient";
import { useSignal } from "@preact/signals-react";
import { FaRegAngry, FaRegEdit, FaRegMeh, FaRegSmile } from "react-icons/fa";
import ResPieChart from "./ResPieChart";
import ResAreaChart from "./ResAreaChart";
import { useQuery } from "react-query";
import CookingLoader from "./../Loaders/CookingLoader";

export default function RestaurantDashboard() {
  const { ResID } = useParams();
  const allPositiveComments = useSignal([]);
  const allNegativeComments = useSignal([]);
  const allNaturalComments = useSignal([]);
  const allComments = useSignal([]);

  // Fetch here
  // All Restaurant Orders
  const q1 = useQuery({
    queryKey: ["allRestaurantOrders"],
    // cacheTime: 60000,
    // staleTime: 60000,
    queryFn: async () => {
      let url = `/dashboard/allRestaurantOrders/${ResID}`;
      const ret = await apiClient.get(url);
      // console.log("allRestaurantOrders", ret);
      return ret;
    },
  });

  console.log("allRestaurantOrders", q1.data?.data.ResOrders);

  // Get All Positive
  const q2 = useQuery({
    queryKey: ["postiveComments"],
    // cacheTime: 60000,
    // staleTime: 60000,
    queryFn: async () => {
      let url = `/dashboard/postiveComments/${ResID}`;
      const ret = await apiClient.get(url);
      // console.log("allRestaurantOrders", ret);
      return ret;
    },
  });
  console.log("postiveComments", q2.data?.data?.lengthOfcomments);

  // Get All Negative
  const q3 = useQuery({
    queryKey: ["negativeComments"],
    // cacheTime: 60000,
    // staleTime: 60000,
    queryFn: async () => {
      let url = `/dashboard/negativeComments/${ResID}`;
      const ret = await apiClient.get(url);
      // console.log("allRestaurantOrders", ret);
      return ret;
    },
  });
  console.log("negativeComments", q3.data?.data?.lengthOfcomments);

  // Get AlL Neutral
  const q4 = useQuery({
    queryKey: ["neutralComments"],
    // cacheTime: 60000,
    // staleTime: 60000,
    queryFn: async () => {
      let url = `/dashboard/neutralComments/${ResID}`;
      const ret = await apiClient.get(url);
      // console.log("allRestaurantOrders", ret);
      return ret;
    },
  });
  console.log("neutralComments", q4.data?.data?.lengthOfcomments);

  // Get All Comments
  const q5 = useQuery({
    queryKey: ["userComments"],
    // cacheTime: 60000,
    // staleTime: 60000,
    queryFn: async () => {
      let url = `/dashboard/userComments/${ResID}`;
      const ret = await apiClient.get(url);
      // console.log("allRestaurantOrders", ret);
      return ret;
    },
  });
  console.log("userComments", q5.data?.data?.lengthOfcomments);

  // PieChart Data
  const myValue = 100;
  const data = [
    {
      name: "Positive",
      value:
        (q2.data?.data?.lengthOfcomments / q5.data?.data?.lengthOfcomments) *
        myValue,
    },
    {
      name: "Negative",
      value:
        (q3.data?.data?.lengthOfcomments / q5.data?.data?.lengthOfcomments) *
        myValue,
    },
    {
      name: "Neutral",
      value:
        (q4.data?.data?.lengthOfcomments / q5.data?.data?.lengthOfcomments) *
        myValue,
    },
  ];

  if (
    q1.isLoading &&
    q2.isLoading &&
    q3.isLoading &&
    q4.isLoading &&
    q5.isLoading
  )
    return <CookingLoader />;
  else
    return (
      <Container fluid>
        <Row>
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="3" className="text-center">
                    {/* Zoomed in emoji */}
                    <div className="icon-big">
                      <p style={{ fontSize: "2em" }}>
                        <FaRegSmile style={{ color: "green" }} /> {/* 🙂 */}
                      </p>
                    </div>
                  </Col>
                  <Col xs="9">
                    <div className="numbers">
                      <p className="card-category">Positive Comments</p>
                      <Card.Title as="h4">
                        {q2.data?.data?.lengthOfcomments}
                      </Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          {/* Negative Comments */}
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="3" className="text-center">
                    {/* Zoomed in emoji */}
                    <div className="icon-big">
                      <p style={{ fontSize: "2em" }}>
                        <FaRegAngry style={{ color: "red" }} /> {/* 😠 */}
                      </p>
                    </div>
                  </Col>
                  <Col xs="9">
                    <div className="numbers">
                      <p className="card-category">Negative Comments</p>
                      <Card.Title as="h4">
                        {q3.data?.data?.lengthOfcomments}
                      </Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          {/* Natural Comments */}
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="3" className="text-center">
                    {/* Zoomed in emoji */}
                    <div className="icon-big">
                      <p style={{ fontSize: "2em" }}>
                        <FaRegMeh style={{ color: "blue" }} /> {/* 😐 */}
                      </p>
                    </div>
                  </Col>
                  <Col xs="9">
                    <div className="numbers">
                      <p className="card-category">Neutral Comments</p>
                      <Card.Title as="h4">
                        {q4.data?.data?.lengthOfcomments}
                      </Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          {/* Customers */}
          <Col lg="3" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="3" className="text-center">
                    {/* Zoomed in emoji */}
                    <div className="icon-big">
                      <p style={{ fontSize: "2em" }}>
                        <FaRegEdit style={{ color: "#6610f2" }} /> {/* 📝 */}
                      </p>
                    </div>
                  </Col>
                  <Col xs="9">
                    <div className="numbers">
                      <p className="card-category">All Comments</p>
                      <Card.Title as="h4">
                        {q5.data?.data?.lengthOfcomments}
                      </Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="8">
            <Card>
              <Card.Header>
                <Card.Title as="h4">All Orders Statistics</Card.Title>
                {/* <p className="card-category">24 Hours performance</p> */}
              </Card.Header>
              <Card.Body>
                <ResAreaChart ResOrders={q1.data?.data?.ResOrders} />
              </Card.Body>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Comments Statistics</Card.Title>
                {/* <p>Last Campaign Performance</p> */}
              </Card.Header>
              <Card.Body>
                {/* {console.log("myHemasdasdasa", allPositiveComments.value)} */}
                <ResPieChart
                  positive={allPositiveComments.value.data?.lengthOfcomments}
                  negative={allNegativeComments.value.data?.lengthOfcomments}
                  natural={allNaturalComments.value.data?.lengthOfcomments}
                  allComments={allComments.value.data?.lengthOfcomments}
                  data={data}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}
