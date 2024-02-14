/* eslint-disable react/prop-types */
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const PAGES = [
  {
    path: "",
    title: "Home",
  },
  {
    path: "aboutme",
    title: "About Me",
  },
  {
    path: "projects",
    title: "Projects",
  },
  {
    path: "resume",
    title: "Resume",
  },
];

const Navigation = ({ expanded, setExpanded, myPrimaryColor }) => {
  const navigate = useNavigate();
  const isActive = (path) => window.location.pathname === path;

  return (
    <Navbar
      expanded={expanded}
      fixed="top"
      expand="lg"
      style={{
        backdropFilter: "blur(30px) contrast(100%)",
        WebkitBackdropFilter: "blur(30px) contrast(100%)",
        width: "100%",
        paddingLeft: "50px",
        paddingRight: "50px",
      }}
    >
      <Navbar.Brand
        style={{
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        <Image src="../../public/icon.png" style={{ height: "40px" }} />
      </Navbar.Brand>
      <Navbar.Toggle
        onClick={() => setExpanded(expanded ? false : "expanded")}
        aria-controls="navbarScroll"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {PAGES.map((page) => (
            <Nav.Link
              key={page.path}
              className={isActive(page.path) ? "active" : ""}
              onClick={() => {
                setExpanded(false);
                navigate(page.path);
              }}
            >
              {page.title}
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users,
  };
};

export default connect(mapStateToProps)(Navigation);
