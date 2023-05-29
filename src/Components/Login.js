import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import Header from "./Header";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();

  let info = { userName, password };

  function handleLogin() {
    console.log(info);
    fetch(`http://localhost:3000/login?q=${userName}`).then((data) => {
      data.json().then((resp) => {
        console.log("resp", resp);
        if (resp.length > 0) {
          localStorage.setItem("login", JSON.stringify(resp));
          navigate("/list");
        } else {
          alert("Incorrect userName and Password");
        }
      });
    });
  }
  return (
    <>
      <Header />
      <div className="content">
        <h1>Login Page</h1>
        <div className="form-wrapper">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Control
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                placeholder="Enter UserName"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter Password"
              />
            </Form.Group>
            <Button variant="success" onClick={handleLogin}>
              Login
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
