import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import Image from "react-bootstrap/Image";
import "./Navbar.css";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="navbar-styles" fixed="top" collapseOnSelect>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="my-2 my-lg-0 navbar-content"
            style={{ maxHeight: "7rem" }}
            navbarScroll
          >
            <Container className="navbar-container">
              <Nav.Link
                as={NavLink}
                to="/"
                className="navbar-links"
                eventKey="1"
              >
                Work
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/about"
                className="navbar-links"
                eventKey="2"
              >
                About
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                to="/resume"
                className="navbar-links"
                eventKey="3"
              >
                Resume
              </Nav.Link>
            </Container>

            <Container className="navbar-container navbar-right">
              <Nav.Link
                href="https://www.linkedin.com"
                className="navbar-right-links"
                target="_blank"
              >
                <Image
                  src="https://img.icons8.com/fluency/40/linkedin-circled.png"
                  width="40"
                  height="40"
                  alt="linkedin-circled"
                />
                LinkedIn
              </Nav.Link>
              <Nav.Link
                href="https://github.com/Subir-090"
                className="navbar-right-links"
                target="_blank"
              >
                <Image
                  src="https://img.icons8.com/sf-regular-filled/40/FFFFFF/github.png"
                  width="40"
                  height="40"
                  alt="linkedin-circled"
                />
                GitHub
              </Nav.Link>
            </Container>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
