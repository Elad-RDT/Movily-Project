import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";

class Header extends Component {
  state = {
    geners: ["All", "Action", "Drama", "Comedy"],
    pagesOption: [2, 3, 5, 7, 10],
  };
  render() {
    return (
      <Navbar bg="warning" expand="lg">
        <Container fluid>
          <Navbar.Brand onClick={() => this.props.pick("All")}>
            Moviely
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Navbar.Brand className="me-2">
                <Link
                  to="add"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Add Movie
                </Link>
              </Navbar.Brand>
              <NavDropdown
                title="Gener"
                id="navbarScrollingDropdown"
                bg="light"
              >
                {this.state.geners.map((val, index) => {
                  return (
                    <NavDropdown.Item onClick={() => this.props.pick(val)}>
                      {val + "  (" + this.props.movieCount(val) + ")"}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            </Nav>
            <Nav>
              <InputGroup>
                <InputGroup.Text
                  id="moviesPerPage"
                  className="bg-dark"
                  style={{ color: "white" }}
                >
                  Movies Per Page
                </InputGroup.Text>
                <Form.Control
                  placeholder="Enter a number"
                  aria-label="Number"
                  aria-describedby="basic-addon1"
                  onKeyDown={(ev) => this.props.changeNumOfMovies(ev)}
                />
              </InputGroup>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
