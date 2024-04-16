import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
// import ChartistGraph from "react-chartist";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { useSignal } from "@preact/signals-react";
import { useEffect } from "react";
import { FaCircle } from "react-icons/fa6";
import { FaRegAngry, FaRegEdit, FaRegMeh, FaRegSmile } from "react-icons/fa";
// StackedAreaChart Data
const data1 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function RestaurantDashboard() {
  const { ResID } = useParams();

  const RADIAN = Math.PI / 180;
  // Fetch here
  const queryClient = useQueryClient();
  const allPositiveComments = useSignal([]);
  const allNegativeComments = useSignal([]);
  const allNaturalComments = useSignal([]);
  const allComments = useSignal([]);
  // Get AlL Positive
  const m1 = useMutation({
    mutationKey: ["allPComments"],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      console.log("trying to load");
      let url = `/dashboard/postiveComments/${ResID}`;
      console.log("posting to ", url);
      return await apiClient.get(url, params);
    },
  });

  const onSubmit1 = async function () {
    const result = await m1.mutateAsync();
    allPositiveComments.value = result;
    queryClient.invalidateQueries({ queryKey: ["allPComments"] });
    queryClient.refetchQueries(["allPComments"]);
  };

  // Get AlL Negative
  const m2 = useMutation({
    mutationKey: ["allNaComments"],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      console.log("trying to load");
      let url = `/dashboard/negativeComments/${ResID}`;
      console.log("posting to ", url);
      return await apiClient.get(url, params);
    },
  });

  const onSubmit2 = async function () {
    const result = await m2.mutateAsync();
    allNegativeComments.value = result;
    queryClient.invalidateQueries({ queryKey: ["allNaComments"] });
    queryClient.refetchQueries(["allNaComments"]);
  };

  // Get AlL Natural
  const m3 = useMutation({
    mutationKey: ["allNeComments"],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      console.log("trying to load");
      let url = `/dashboard/neutralComments/${ResID}`;
      console.log("posting to ", url);
      return await apiClient.get(url, params);
    },
  });

  const onSubmit3 = async function () {
    const result = await m3.mutateAsync();
    allNaturalComments.value = result;
    queryClient.invalidateQueries({ queryKey: ["allNeComments"] });
    queryClient.refetchQueries(["allNeComments"]);
  };

  // Get AlL Comments
  const m4 = useMutation({
    mutationKey: ["allComments"],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
    mutationFn: async (params) => {
      console.log("trying to load");
      let url = `/dashboard/userComments/${ResID}`;
      console.log("posting to ", url);
      return await apiClient.get(url, params);
    },
  });

  const onSubmit4 = async function () {
    const result = await m4.mutateAsync();
    allComments.value = result;
    queryClient.invalidateQueries({ queryKey: ["allComments"] });
    queryClient.refetchQueries(["allComments"]);
  };
  useEffect(() => {
    onSubmit1();
    onSubmit2();
    onSubmit3();
    onSubmit4();
  }, []);

  // PieChart Data
  // const mustafa = [];
  // console.log("mustafa", mustafa);
  const data2 = [
    {
      name: "Positive",
      value:
        (allPositiveComments.value.data?.lengthOfcomments /
          allComments.value.data?.lengthOfcomments) *
        100,
    },
    {
      name: "Negative",
      value:
        (allNegativeComments.value.data?.lengthOfcomments /
          allComments.value.data?.lengthOfcomments) *
        100,
    },
    {
      name: "Neutral",
      value:
        (allNaturalComments.value.data?.lengthOfcomments /
          allComments.value.data?.lengthOfcomments) *
        100,
    },
    // { name: "Group D", value: (200 / 400) * 100 },
  ];
  // , "#FF8042"
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  // onSubmit("positiveComments")
  // onSubmit("negativeComments")
  // onSubmit("neutralComments")

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <>
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
                <Card.Title as="h4">Users Behavior</Card.Title>
                <p className="card-category">24 Hours performance</p>
              </Card.Header>
              <Card.Body>
                <div className="ct-chart" id="chartHours">
                  <ResponsiveContainer width="100%" height={400}>
                    {/* Code Here 1 */}
                    <AreaChart
                      data={data1}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="uv"
                        stackId="1"
                        stroke="#8884d8"
                        fill="#8884d8"
                      />
                      <Area
                        type="monotone"
                        dataKey="pv"
                        stackId="1"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                      />
                      <Area
                        type="monotone"
                        dataKey="amt"
                        stackId="1"
                        stroke="#ffc658"
                        fill="#ffc658"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </Card.Body>
              <Card.Footer>
                <div className="legend">
                  <FaCircle className="text-info" />
                  Open <FaCircle className="text-danger" />
                  Click <FaCircle className="text-warning" />
                  Click Second Time
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col md="4">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Comments Statistics</Card.Title>
                <p className="card-category">Last Campaign Performance</p>
              </Card.Header>
              <Card.Body>
                <div
                  className="ct-chart ct-perfect-fourth"
                  id="chartPreferences"
                >
                  {/* Code Here 2 */}
                  <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                      <Pie
                        data={data2}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {data2.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="legend">
                  <FaCircle className="text-info" />
                  Positive <FaCircle className="text-danger" />
                  Negative <FaCircle className="text-warning" />
                  Neutral
                </div>

                {/* <hr></hr>
                <div className="stats">
                  <i className="far fa-clock"></i>
                  Campaign sent 2 days ago
                </div> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
