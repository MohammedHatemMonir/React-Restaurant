import React from "react";
import "./Login.css";
import { Form, Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { apiClient } from "../../Data/apiclient";
import { UserData } from "../../Globals";


const Login = () => {

  const m = useMutation({
    mutationKey: [],
    // cacheTime: 600000,
    // onSuccess: onSuccess,
    // onError: onError,
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
    console.log("Data to send",data);
    const result = await m.mutateAsync(data);

    console.log("result",result.data);

      if(!result.data.success){
        alert("Invalid Email or Password");
      }else{
        UserData.value = {name:result.data.name, email:result.data.email, role:result.data.role, id:result.data.id, loggedIn:true}
        if(result.data.role==="ADMIN"){
          navigate("/tutorials");
        }else{
          navigate("/");
        }
      }
    };

  return (
    <>

<div className="d-flex justify-content-center align-items-center" style={{ height: '75vh' }}>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Login Form</Card.Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="username">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="text" name="username" {...register("email", 
                                                                    {required: "Email is required", 
                                                                    pattern: 
                                                                      {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                                                        message: "Invalid email address"}}
            )}/>
            <span style={{color:"red"}}>
              {errors["email"] && errors["email"].message}
            </span>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" name="password" {...register("password", 
                                                                        {required: "Password is required",
                                                                        minLength: {
                                                                          value: 5,
                                                                          message: "Password must have at least 5 characters"
                                                                        }})} />
            <span style={{color:"red"}}>
              {errors["password"] && errors["password"].message}
            </span>
          </Form.Group>
          <Link to="/SignUp" style={{ textDecoration: "none" }}> SignUp</Link>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </Card.Body>
    </Card>
  </div>
    {/* <div className="login-container">
      <h2>Login Form</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form1">
          <label htmlFor="Email">Email</label>
          <input
            type="text"
            className="form-control"
            id="Email"
            placeholder="Enter Email"
            value={email.value}
            onChange={(e) => (email.value = e.target.value)}
            required
          />
          {errors.value.email && (
            <p style={{ color: "red", fontWeight: "bold", fontSize: "14px" }}>
              {errors.value.email}
            </p>
          )}
        </div>
        <div className="form1">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            value={password.value}
            onChange={(e) => (password.value = e.target.value)}
            required
          />
          {errors.value.password && (
            <p style={{ color: "red", fontWeight: "bold", fontSize: "14px" }}>
              {errors.value.password}
            </p>
          )}
        </div>
        <button type="submit" className="button">
          Login
        </button>
        <Link to="/ForgotPass" style={{ textDecoration: "none" }}>
          Forgot Password ?
        </Link>
      </form>
    </div> */}
    </>
  );
};

export default Login;
