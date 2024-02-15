/* eslint-disable react/prop-types */
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import icon from "../../public/icon.png";

const Navigation = ({ expanded, setExpanded }) => {
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
        <Image src={icon} style={{ height: "40px" }} />
      </Navbar.Brand>
      <Navbar.Toggle
        onClick={() => setExpanded(expanded ? false : "expanded")}
        aria-controls="navbarScroll"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link
            className={isActive("/") ? "active" : ""}
            onClick={() => {
              setExpanded(false);
              navigate("/");
            }}
          >
            Home
          </Nav.Link>
          <Nav.Link
            className={isActive("/aboutme") ? "active" : ""}
            onClick={() => {
              setExpanded(false);
              navigate("/aboutme");
            }}
          >
            About Me
          </Nav.Link>
          <Nav.Link
            className={isActive("/projects") ? "active" : ""}
            onClick={() => {
              setExpanded(false);
              navigate("/projects");
            }}
          >
            Projects
          </Nav.Link>
          <Nav.Link
            className={isActive("/resume") ? "active" : ""}
            onClick={() => {
              setExpanded(false);
              navigate("/resume");
            }}
          >
            Resume
          </Nav.Link>
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
