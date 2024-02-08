/* eslint-disable react/prop-types */
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";

const Navigation = (props) => {
  const navigate = useNavigate();
  const isActive = (path) => window.location.pathname === path;

  return (
    <Navbar className="container" fixed="top" bg="dark" variant="dark">
      <Navbar.Brand
        style={{
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        Employee Polls
      </Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link
          className={isActive("/") ? "active" : ""}
          onClick={() => navigate("/")}
        >
          Home
        </Nav.Link>
        <Nav.Link
          className={isActive("/leaderboard") ? "active" : ""}
          onClick={() => navigate("/leaderboard")}
        >
          Leaderboard
        </Nav.Link>
        {props.authedUser ? (
          <Nav.Link
            className={isActive("/new") ? "active" : ""}
            onClick={() => navigate("/add")}
          >
            New
          </Nav.Link>
        ) : null}
      </Nav>
      <Navbar.Collapse className="d-flex justify-content-end">
        <Image
          style={{
            width: "50px",
            height: "50px",
            marginRight: "10px",
          }}
          src={
            props.authedUser
              ? props.users[props.authedUser]?.avatarURL
              : "../../public/avatar/example.png"
          }
          alt="avatar"
          roundedCircle
        />
        <Navbar.Text data-testid="username-nav" style={{ marginLeft: "-10px" }}>
          {props.authedUser ? (
            "@" + props.authedUser
          ) : (
            <Navbar.Text
              style={{
                color: "white",
                marginLeft: "10px",
                marginRight: "10px",
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </Navbar.Text>
          )}
        </Navbar.Text>
        {props.authedUser ? (
          <Navbar.Text
            style={{
              color: "white",
              marginLeft: "10px",
              marginRight: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              localStorage.removeItem("authedUser");
              props.dispatch(setAuthedUser(""));
              navigate("/login");
            }}
          >
            Logout
          </Navbar.Text>
        ) : (
          ""
        )}
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
