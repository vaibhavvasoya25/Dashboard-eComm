import React, { useState } from "react";
import { Form, Table } from "react-bootstrap";
import Header from "./Header";

const Search = () => {
  const [searchItems, setSearchItems] = useState(null);
  const [noItems, setNoItems] = useState(false);

  function searchData(key) {
    fetch(`http://localhost:3000/restaurant?q=${key}`).then((data) => {
      data.json().then((resp) => {
        if (resp.length > 0) {
          setSearchItems(resp);
          setNoItems(false);
        } else {
          setNoItems(true);
          setSearchItems(null);
        }
      });
    });
  }
  return (
    <>
      <Header />
      <div className="content">
        <h1>Search the Restaurant </h1>
        <div className="form-wrapper">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control
                onChange={(e) => searchData(e.target.value)}
                type="search"
                placeholder="Search here.."
              />
            </Form.Group>
          </Form>
        </div>
        <div>
          <div className="list-wrapper">
            <Table striped bordered hover variant="primary" size="xl">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Rating</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {searchItems && searchItems.length > 0
                  ? searchItems.map((searchItem) => (
                      <>
                        <tr>
                          <td>{searchItem.id}</td>
                          <td>{searchItem.name}</td>
                          <td>{searchItem.address}</td>
                          <td>{searchItem.rating}</td>
                          <td>{searchItem.email}</td>
                        </tr>
                      </>
                    ))
                  : null}
              </tbody>
            </Table>
            {noItems ? <h3>No Data Found</h3> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
