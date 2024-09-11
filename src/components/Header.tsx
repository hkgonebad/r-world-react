import HeaderTicker from "./HeaderTicker";
import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, Dropdown } from "react-bootstrap";
import { FiFilePlus, FiHeadphones, FiUser } from "react-icons/fi";

const Header = () => {
  return (
    <header>
      <div className="mainHeader">
        <Navbar expand="lg" className="bg-body-tertiary mb-3">
          <Container>
            <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
            <Navbar.Toggle aria-controls="mainNav" />
            <Navbar.Offcanvas id="mainNav" aria-labelledby="offcanvasNavbarLabel-expand-lg" placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3 me-auto">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">My Feed</Nav.Link>
                  <Nav.Link href="#action2">News Room</Nav.Link>
                  <NavDropdown title="Media Hub" id="offcanvasNavbarDropdown-expand-lg">
                    <NavDropdown.Item href="#action3">Glossary of Terms</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Newsletters</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Communication Guidelines</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Events</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action3">Videos</Nav.Link>
                  <Nav.Link href="#action4">Photos</Nav.Link>
                  <NavDropdown title="Info Pages" id="offcanvasNavbarDropdown-expand-lg">
                    <NavDropdown.Item href="#action3">Glossary of Terms</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Newsletters</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Communication Guidelines</NavDropdown.Item>
                    <NavDropdown.Item href="#action5">Events</NavDropdown.Item>
                  </NavDropdown>
                </Nav>

                {/* Search */}
                <Form className="d-flex">
                  <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                </Form>

                {/* Extras */}
                <div className="extras d-flex gap-2">
                  {/*  */}
                  <Dropdown align="end">
                    <Dropdown.Toggle>
                      <FiHeadphones />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  {/*  */}
                  <Dropdown align="end">
                    <Dropdown.Toggle>
                      <FiFilePlus />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  {/* User */}
                  <Dropdown align="end">
                    <Dropdown.Toggle>
                      <FiUser />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                      <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>

      {/* Header Ticker */}
      <HeaderTicker />
    </header>
  );
};

export default Header;
