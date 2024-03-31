import { Form, Button, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { UserData } from "../../Globals";

const Login = () => {
  const m = useMutation({
    mutationKey: [],
    mutationFn: async (params) => {
      console.log("trying to load");
      let url = "/api/users/signin";
      console.log("posting to ", url);
      return await apiClient.post(url, params);
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async function (data) {
    console.log("Data to send", data);
    const result = await m.mutateAsync(data);

    console.log("login", result.data);

    if (!result.data.success) {
      alert("Invalid Email or Password");
    } else {
      UserData.value = {
        name: result.data.name,
        email: result.data.email,
        role: result.data.role,
        id: result.data.id,
        loggedIn: result.data.loggedIn,
      };
      if (result.data.role === "ADMIN") {
        navigate("/tutorials");
      } else {
        navigate("/");
      }
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title className="text-center">Login Form</Card.Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="username">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="text"
                name="username"
                placeholder="Enter Your Email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors["email"] && (
                <span style={{ color: "red" }}>{errors["email"].message}</span>
              )}
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter Your Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 7,
                    message: "Password must have at least 7 characters",
                  },
                })}
              />
              {errors["password"] && (
                <span style={{ color: "red" }}>
                  {errors["password"].message}
                </span>
              )}
            </Form.Group>
            <div style={{ marginTop: "10px" }}>
              <Link
                to="/signup"
                style={{ textDecoration: "none", marginRight: "10px" }}
              >
                SignUp
              </Link>
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
