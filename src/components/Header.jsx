import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../Assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const imgStyle = {
    width: "3rem",
    height: "3rem",
    borderRadius: "50%",
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid className="ps-3">
        <Navbar.Brand href="#">
          <Link to="/">
            <img src={logo} style={imgStyle} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 fs-5"
            style={{ maxHeight: "100px" }}
            navbarScroll>
            <Nav.Link href="#action1">
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link href="#action2">
              <Link to="/contact">Contact</Link>
            </Nav.Link>
            <Nav.Link href="#action2">
              <Link to="/team">Team</Link>
            </Nav.Link>
          </Nav>
          <Button>Donate</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
