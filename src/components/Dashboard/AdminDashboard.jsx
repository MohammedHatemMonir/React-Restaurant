import { Card, Container, Row, Col } from "react-bootstrap";
import { useSignal } from "@preact/signals-react";
import { FaRegAngry, FaRegEdit, FaRegMeh, FaRegSmile } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";
import ResPieChart from "./ResPieChart";
import { useQuery } from "react-query";
import { apiClient } from "../../Data/apiclient";
import AdminAreaChart from "./AdminAreaChart";
import CookingLoader from "./../Loaders/CookingLoader";

export default function AdminDashboard() {
  const allComments = useSignal(0);

  // Fetch here
  // Get all orders
  const q1 = useQuery({
    queryKey: ["getAllOrders"],
    // cacheTime: 3 * 60000, //3 minutes
    // enabled: true,
    queryFn: async () => {
      let url = "/dashboardAdmin/getLastTenDaysOrders";
      var ret = await apiClient.get(url);
      //   console.log("admin dash", ret.data);
      return ret;
    },
  });
  // console.log("getAllOrders", q1.data?.data?.data?.restaurantOrders);

  // Get All Positive
  const q2 = useQuery({
    queryKey: ["postiveComments"],
    // cacheTime: 60000,
    // staleTime: 60000,
    queryFn: async () => {
      let url = `/dashboardAdmin/getPositiveComments`;
      const ret = await apiClient.get(url);
      // console.log("allRestaurantOrders", ret);
      return ret;
    },
  });
  // console.log("postiveComments", q2.data?.data?.lengthOfcomments);

  // Get All Negative
  const q3 = useQuery({
    queryKey: ["negativeComments"],
    // cacheTime: 60000,
    // staleTime: 60000,
    queryFn: async () => {
      let url = `/dashboardAdmin/getNegativeComments`;
      const ret = await apiClient.get(url);
      // console.log("allRestaurantOrders", ret);
      return ret;
    },
  });
  // console.log("negativeComments", q3.data?.data?.lengthOfcomments);

  // Get AlL Neutral
  const q4 = useQuery({
    queryKey: ["neutralComments"],
    // cacheTime: 60000,
    // staleTime: 60000,
    queryFn: async () => {
      let url = `/dashboardAdmin/getNeutralComments`;
      const ret = await apiClient.get(url);
      // console.log("allRestaurantOrders", ret);
      return ret;
    },
  });
  // console.log("neutralComments", q4.data?.data?.lengthOfcomments);

  // Get All Comments
  const q5 = useQuery({
    queryKey: ["getAllOwner"],
    // cacheTime: 60000,
    // staleTime: 60000,
    queryFn: async () => {
      let url = `/dashboardAdmin/getAllOwner`;
      const ret = await apiClient.get(url);
      // console.log("allRestaurantOrders", ret);
      return ret;
    },
  });
  // console.log("getAllOwner", q5.data?.data?.lengthOfowners);

  allComments.value =
    q2.data?.data?.lengthOfcomments +
    q3.data?.data?.lengthOfcomments +
    q4.data?.data?.lengthOfcomments;
  // PieChart Data
  const myValue = 100;
  const data = [
    {
      name: "Positive",
      value: (q2.data?.data?.lengthOfcomments / allComments.value) * myValue,
    },
    {
      name: "Negative",
      value: (q3.data?.data?.lengthOfcomments / allComments.value) * myValue,
    },
    {
      name: "Neutral",
      value: (q4.data?.data?.lengthOfcomments / allComments.value) * myValue,
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
          {/* Owner */}
          <Col lg="4" sm="6">
            <Card className="card-stats">
              <Card.Body>
                <Row>
                  <Col xs="3" className="text-center">
                    {/* Zoomed in emoji */}
                    <div className="icon-big">
                      <p style={{ fontSize: "2em" }}>
                        <FcBusinessman style={{ color: "green" }} /> {/* 🙂 */}
                      </p>
                    </div>
                  </Col>
                  <Col xs="9">
                    <div className="numbers">
                      <p className="card-category">Owners Numbers</p>
                      <Card.Title as="h4">
                        {q5.data?.data?.lengthOfowners}
                      </Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          {/* Positive Comments */}
          <Col lg="4" sm="6">
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
          <Col lg="4" sm="6">
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
          <Col lg="4" sm="6">
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
          <Col lg="4" sm="6">
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
                      <Card.Title as="h4">{allComments.value}</Card.Title>
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
                <Card.Title as="h4">Last 10 Days Orders Statistics</Card.Title>
                {/* <p className="card-category">24 Hours performance</p> */}
              </Card.Header>
              <Card.Body>
                {/* <ResAreaChart ResOrders={q1.data?.data?.restaurantOrders} /> */}
                {!q1.isLoading && (
                  <AdminAreaChart rawData1={q1.data?.data?.data} />
                )}
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
                  positive={q2.data?.data?.lengthOfcomments}
                  negative={q3.data?.data?.lengthOfcomments}
                  natural={q4.data?.data?.lengthOfcomments}
                  allComments={allComments.value}
                  data={data}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
}
