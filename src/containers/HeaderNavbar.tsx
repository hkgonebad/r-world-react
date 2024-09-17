import { Navbar, Container, Offcanvas, Nav, NavDropdown, Form, Dropdown } from "react-bootstrap";
import { FiCalendar, FiChevronDown, FiFilePlus, FiHeadphones, FiMenu, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "/img/logo.svg";
import userPic from "/img/user.png";
import { useState } from "react";
import TagSelectionModal from "../components/home/TagSelectionModal";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "My Feed", path: "/my-feed" },
  {
    name: "News Room",
    dropdown: [
      { name: "Glossary of Terms", path: "/media-hub/glossary" },
      { name: "Newsletters", path: "/media-hub/newsletters" },
      { name: "Communication Guidelines", path: "/media-hub/guidelines" },
      { name: "Events", path: "/media-hub/events" },
    ],
  },
  { name: "Videos", path: "/videos" },
  { name: "Photos", path: "/photos" },
  {
    name: "Info Pages",
    dropdown: [
      { name: "Glossary of Terms", path: "/info-pages/glossary" },
      { name: "Newsletters", path: "/info-pages/newsletters" },
      { name: "Communication Guidelines", path: "/info-pages/guidelines" },
      { name: "Events", path: "/info-pages/events" },
    ],
  },
];

// const extraDropdowns = [
//   {
//     icon: FiHeadphones,
//     items: [
//       { name: "Action", path: "/support/action-1" },
//       { name: "Another action", path: "/support/action-2" },
//     ],
//   },
//   {
//     icon: FiFilePlus,
//     items: [
//       { name: "Action", path: "/files/action-1" },
//       { name: "Another action", path: "/files/action-2" },
//     ],
//   },
//   {
//     icon: FiUser,
//     items: [
//       { name: "Change Password", path: "/profile/change-password" },
//       { name: "Logout", path: "/login" },
//     ],
//   },
// ];

const HeaderNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  const availableTags = [
    "Reliance Industries",
    "ADAS, AV, & Safety",
    "EV Battery",
    "Supply Chain",
    "Manufacturing",
    "Sustainable & EV Supply Chain",
    "EV Strategy",
    "Charging & Infrastructure",
    "Regulatory & Policy",
    "Fleet & Trucking",
    "Consumer Trends",
    "Workforce",
    "Financial Results",
    "Lifestyle",
    "Partnerships and M&A",
    "Products",
    "Mobility & Transport",
    "China Strategy",
    "Aerospace & Defense",
    "Evironment",
    "Finance",
  ];

  const handleClose = () => setShowModal(false);

  return (
    <>
      <div className="mainHeader">
        <Navbar expand="lg" className="">
          <Container>
            <Navbar.Brand as={Link} to={"/"}>
              <img src={logo} alt="R-World Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="mainNav">
              <FiMenu />
            </Navbar.Toggle>
            <Navbar.Offcanvas id="mainNav" placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>R-World</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 me-auto mainNav">
                  {navLinks.map((link, index) =>
                    link.dropdown ? (
                      <NavDropdown
                        title={
                          <span className="d-flex align-items-center">
                            {link.name}
                            <FiChevronDown className="ms-1 dToggle" />
                          </span>
                        }
                        key={index}
                      >
                        {link.dropdown.map((item, idx) => (
                          <NavDropdown.Item
                            as={Link}
                            to={item.path}
                            key={idx}
                            active={window.location.pathname === item.path}
                          >
                            {item.name}
                          </NavDropdown.Item>
                        ))}
                      </NavDropdown>
                    ) : (
                      <Nav.Link as={Link} to={link.path} key={index}>
                        {link.name}
                      </Nav.Link>
                    )
                  )}
                </Nav>

                {/* Search */}
                <Form className="d-flex hSearch">
                  <Form.Control
                    type="search"
                    placeholder="Search here..."
                    size="sm"
                    className="me-2"
                    aria-label="Search"
                    id="search"
                  />
                  <FiSearch className="hsIcon" />
                </Form>

                {/* Extras */}
                <div className="hExtras d-flex gap-2">
                  <button onClick={() => {}} className="btn">
                    <FiCalendar />
                  </button>

                  <button onClick={() => {}} className="btn">
                    <FiHeadphones />
                  </button>

                  <button
                    onClick={() => {
                      setShowModal(true);
                    }}
                    className="btn"
                  >
                    <FiFilePlus />
                  </button>

                  {/* {extraDropdowns.map((dropdown, index) => (
                  <Dropdown align={{ lg: "end" }} key={index}>
                    <Dropdown.Toggle>
                      <dropdown.icon />
                      <FiChevronDown className="dToggle" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      {dropdown.items.map((item, idx) => (
                        <Dropdown.Item as={Link} to={item.path} key={idx}>
                          {item.name}
                        </Dropdown.Item>
                      ))}
                    </Dropdown.Menu>
                  </Dropdown>
                ))} */}

                  <Dropdown align={{ lg: "end" }}>
                    <Dropdown.Toggle>
                      <img src={userPic} alt="" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item as={Link} to={"/"}>
                        Change Password
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to={"/"}>
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>

      <TagSelectionModal show={showModal} handleClose={handleClose} availableTags={availableTags} />
    </>
  );
};

export default HeaderNavbar;
