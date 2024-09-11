import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, Dropdown } from "react-bootstrap";
import { FiFilePlus, FiHeadphones, FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

const HeaderNavbar = () => {
  return (
    <div className="mainHeader">
      <Navbar expand="lg" className="bg-body-tertiary mb-3">
        <Container>
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
          <Navbar.Toggle aria-controls="mainNav" />
          <Navbar.Offcanvas id="mainNav" placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-start flex-grow-1 pe-3 me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/my-feed">My Feed</Nav.Link>
                <Nav.Link href="/news-room">News Room</Nav.Link>
                <NavDropdown title="Media Hub">
                  <NavDropdown.Item href="/media-hub/glossary">Glossary of Terms</NavDropdown.Item>
                  <NavDropdown.Item href="/media-hub/newsletters">Newsletters</NavDropdown.Item>
                  <NavDropdown.Item href="/media-hub/guidelines">Communication Guidelines</NavDropdown.Item>
                  <NavDropdown.Item href="/media-hub/events">Events</NavDropdown.Item>
                </NavDropdown>
                <Link to={"/privacy"} className="nav-link">
                  Videos
                </Link>
                <Link to={"/privacy"} className="nav-link">
                  Photos
                </Link>
                <NavDropdown title="Info Pages">
                  <NavDropdown.Item href="/info-pages/glossary">Glossary of Terms</NavDropdown.Item>
                  <NavDropdown.Item href="/info-pages/newsletters">Newsletters</NavDropdown.Item>
                  <NavDropdown.Item href="/info-pages/guidelines">Communication Guidelines</NavDropdown.Item>
                  <NavDropdown.Item href="/info-pages/events">Events</NavDropdown.Item>
                </NavDropdown>
              </Nav>

              {/* Search */}
              <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
              </Form>

              {/* Extras */}
              <div className="extras d-flex gap-2">
                <Dropdown align="end">
                  <Dropdown.Toggle>
                    <FiHeadphones />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/support/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="/support/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="/support/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown align="end">
                  <Dropdown.Toggle>
                    <FiFilePlus />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/files/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="/files/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="/files/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown align="end">
                  <Dropdown.Toggle>
                    <FiUser />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="/user/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="/user/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="/user/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default HeaderNavbar;
