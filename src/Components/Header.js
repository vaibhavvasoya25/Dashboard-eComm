import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" id="symbol">
            Resto
          </Navbar.Brand>
          <Nav id="nav_wrap" className="me-auto">
            <Nav.Link href="/">
              <Link className="nav" to="/">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link href="/list">
              {" "}
              <Link className="nav" to="/list">
                List
              </Link>
            </Nav.Link>
            <Nav.Link href="/create">
              {" "}
              <Link className="nav" to="/create">
                Create
              </Link>
            </Nav.Link>
            <Nav.Link href="/detail">
              {" "}
              <Link className="nav" to="/detail">
                Details
              </Link>
            </Nav.Link>
            <Nav.Link href="/search">
              {" "}
              <Link className="nav" to="/search">
                Search
              </Link>
            </Nav.Link>
            <Nav.Link href="/update">
              {" "}
              <Link className="nav" to="/update">
                Update
              </Link>
            </Nav.Link>

            {localStorage.getItem("login") ? (
              <Nav.Link href="/logout">
                {" "}
                <Link className="nav" to="/logout">
                  Logout
                </Link>
              </Nav.Link>
            ) : (
              <Nav.Link href="/login">
                {" "}
                <Link className="nav" to="/login">
                  Login
                </Link>
              </Nav.Link>
            )}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
