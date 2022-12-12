import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";

const Pagination = ({ moviesPerPage, totalMovies, paginate }) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pages.push(i);
  }
  return (
    <Navbar bg="dark">
      <Container fluid>
        <ul style={{ margin: "auto" }}>
          {pages.map((number) => {
            return (
              <Navbar.Brand
                className="me-2"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button
                  onClick={() => paginate(number)}
                  style={{
                    backgroundColor: "black",
                    border: "solid 1px orange",
                    margin: "auto",
                  }}
                >
                  {number}
                </Button>
              </Navbar.Brand>
            );
          })}
        </ul>
      </Container>
    </Navbar>
  );
};
export default Pagination;
