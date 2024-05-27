import { Card, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { useSignal } from "@preact/signals-react";
import { useEffect } from "react";
import { FaRegAngry, FaRegEdit, FaRegMeh, FaRegSmile } from "react-icons/fa";
import ResPieChart from "./ResPieChart";
import ResAreaChart from "./ResAreaChart";
import { useQuery } from "react-query";
import { apiClient } from "../../Data/apiclient";

export default function AdminDashboard() {
  const q = useQuery({
    queryKey: ["getAllresturant"],
    // cacheTime: 3 * 60000, //3 minutes
    // enabled: true,
    queryFn: async () => {
      let url = "/getAllresturant";
      var ret = await apiClient.get(url);
    //   console.log("admin dash", ret.data);

      return ret;
    },
  });
  console.log("admin dash", q.data?.data);
  return (
    <Container fluid>
      <Row>
        <Col lg="3" sm="6">
          <Card className="card-stats">
            <Card.Body>
              {/* <button onClick={onSubmit("positiveComments")}>
                  test positive
                </button> */}
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
                      {/* {allPositiveComments.value.data?.lengthOfcomments} */}
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
                      {/* {allNegativeComments.value.data?.lengthOfcomments} */}
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
                      {/* {allNaturalComments.value.data?.lengthOfcomments} */}
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
                      {/* {allComments.value.data?.lengthOfcomments} */}
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
              {/* <ResAreaChart
                ResID={ResID}
                ResOrders={q1.data?.data?.ResOrders}
              /> */}
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
              {/* <ResPieChart
                // positive={allPositiveComments.value.data?.lengthOfcomments}
                // negative={allNegativeComments.value.data?.lengthOfcomments}
                // natural={allNaturalComments.value.data?.lengthOfcomments}
                // allComments={allComments.value.data?.lengthOfcomments}
                // data={data}
              /> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
