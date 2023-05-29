import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Header from "./Header";
import { Link } from "react-router-dom";

const List = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/restaurant")
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  function deleteItem(id) {
    fetch("http://localhost:3000/restaurant/" + id, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((response) => {
        console.log(response);
      });
    });
  }
  return (
    <>
      <Header />
      <div className="content">
        <h1>Restaurants List</h1>
        <div className="list-wrapper">
          <Table striped bordered hover variant="primary" size="xl">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Address</th>
                <th>Rating</th>
                <th>Email</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              {items && items.length > 0 ? (
                items.map((item, i) => (
                  <>
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.address}</td>
                      <td>{item.rating}</td>
                      <td>{item.email}</td>
                      <td>
                        <Link to={"/update/" + item.id}>
                          <Button variant="primary" size="sm">
                            Edit
                          </Button>
                        </Link>{" "}
                        <Button
                          variant="danger"
                          size="sm"
                          onClick={() => deleteItem(item.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  </>
                ))
              ) : (
                <h5>Please wait for few seconds...</h5>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
};

export default List;
