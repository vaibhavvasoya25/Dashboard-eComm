import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [rating, setRating] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();

  let item = { name, address, rating, email };

  function handleAddResto() {
    fetch("http://localhost:3000/restaurant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((response) => {
        console.log(response);
        navigate("/list");
      });
    });
  }

  return (
    <>
      <Header />
      <div className="content">
        <h1>Add a new Restaurant</h1>
        <div className="form-wrapper">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Control
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Enter Address"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicRating">
              <Form.Control
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                type="text"
                placeholder="Enter Rating"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Enter Email"
              />
            </Form.Group>

            <Button variant="success" onClick={handleAddResto}>
              Add Resto
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Create;
