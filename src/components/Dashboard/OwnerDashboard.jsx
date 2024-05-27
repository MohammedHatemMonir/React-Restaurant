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

export default function OwnerDashboard() {
  const { ResID } = useParams();
  const queryClient = useQueryClient();
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

  console.log("All Restaurant Orders", q1.data?.data?.ResOrders);
  // Get All Positive
  const m1 = useMutation({
    mutationKey: ["allPComments"],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      // console.log("trying to load");
      let url = `/dashboard/postiveComments/${ResID}`;
      // console.log("posting to ", url);
      return await apiClient.get(url, params);
    },
  });

  const onSubmit1 = async function () {
    const result = await m1.mutateAsync();
    allPositiveComments.value = result;
    queryClient.invalidateQueries({ mutationKey: ["allPComments"] });
    queryClient.refetchQueries(["allPComments"]);
  };

  // Get All Negative
  const m2 = useMutation({
    mutationKey: ["allNaComments"],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      // console.log("trying to load");
      let url = `/dashboard/negativeComments/${ResID}`;
      // console.log("posting to ", url);
      return await apiClient.get(url, params);
    },
  });

  const onSubmit2 = async function () {
    const result = await m2.mutateAsync();
    allNegativeComments.value = result;
    queryClient.invalidateQueries({ mutationKey: ["allNaComments"] });
    queryClient.refetchQueries(["allNaComments"]);
  };

  // Get AlL Natural
  const m3 = useMutation({
    mutationKey: ["allNeComments"],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      // console.log("trying to load");
      let url = `/dashboard/neutralComments/${ResID}`;
      // console.log("posting to ", url);
      return await apiClient.get(url, params);
    },
  });

  const onSubmit3 = async function () {
    const result = await m3.mutateAsync();
    allNaturalComments.value = result;
    queryClient.invalidateQueries({ mutationKey: ["allNeComments"] });
    queryClient.refetchQueries(["allNeComments"]);
  };

  // Get AlL Comments
  const m4 = useMutation({
    mutationKey: ["allComments"],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      // console.log("trying to load");
      let url = `/dashboard/userComments/${ResID}`;
      // console.log("posting to ", url);
      return await apiClient.get(url, params);
    },
  });

  const onSubmit4 = async function () {
    const result = await m4.mutateAsync();
    allComments.value = result;
    queryClient.invalidateQueries({ mutationKey: ["allComments"] });
    queryClient.refetchQueries(["allComments"]);
  };

  useEffect(() => {
    onSubmit1();
    onSubmit2();
    onSubmit3();
    onSubmit4();
  }, []);

  // // onSubmit("positiveComments")
  // // onSubmit("negativeComments")
  // // onSubmit("neutralComments")
  // PieChart Data

  const myValue = 100;
  const data = [
    {
      name: "Positive",
      value:
        (allPositiveComments.value.data?.lengthOfcomments /
          allComments.value.data?.lengthOfcomments) *
        myValue,
    },
    {
      name: "Negative",
      value:
        (allNegativeComments.value.data?.lengthOfcomments /
          allComments.value.data?.lengthOfcomments) *
        myValue,
    },
    {
      name: "Neutral",
      value:
        (allNaturalComments.value.data?.lengthOfcomments /
          allComments.value.data?.lengthOfcomments) *
        myValue,
    },
  ];

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
                      {allPositiveComments.value.data?.lengthOfcomments}
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
                      {allNegativeComments.value.data?.lengthOfcomments}
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
                      {allNaturalComments.value.data?.lengthOfcomments}
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
                      {allComments.value.data?.lengthOfcomments}
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
