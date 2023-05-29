import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const params = useParams();
  const [idUpdate, setIdUpdate] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [rating, setRating] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();
  // console.log(params.id);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/restaurant/${params.id}`)
      .then((res) => {
        setIdUpdate(res.data.id);
        setName(res.data.name);
        setAddress(res.data.address);
        setRating(res.data.rating);
        setEmail(res.data.email);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id]);

  let item = { name, address, rating, email };

  function handleUpdateResto() {
    fetch("http://localhost:3000/restaurant/" + idUpdate, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    }).then((result) => {
      result.json().then((response) => {
        console.log(response);
        navigate("/list");
        // alert("Restautant has been updated");
      });
    });
  }

  return (
    <>
      <Header />
      <div className="content">
        <h1>Restaurant Update</h1>
        <div className="form-wrapper">
          <div class="form-floating mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              class="form-control"
              id="floatingInput"
              placeholder="Name"
            />
            <label for="floatingInput">Resto Name</label>
          </div>

          <div class="form-floating mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              class="form-control"
              id="floatingAddress"
              placeholder="Address"
            />
            <label for="floatingAddress">Address</label>
          </div>

          <div class="form-floating mb-3">
            <input
              type="text"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              class="form-control"
              id="floatingRating"
              placeholder="Rating"
            />
            <label for="floatingRating">Rating</label>
          </div>

          <div class="form-floating mb-3">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              class="form-control"
              id="floatingEmail"
              placeholder="Email"
            />
            <label for="floatingEmail">Email</label>
          </div>

          <Button variant="success" size="lg" onClick={handleUpdateResto}>
            Update
          </Button>
        </div>
      </div>
    </>
  );
};

export default Update;
