/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

function Login(props) {
  const navigate = useNavigate();
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  const handleLogin = () => {
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    if (username === "" || password === "") {
      alert("Please fill in all fields");
    } else if (Object.keys(props.users).includes(username)) {
      if (props.users[username].password === password) {
        localStorage.setItem("authedUser", username);
        props.dispatch(setAuthedUser(username));
        if (localStorage.getItem("prevPath") !== null) {
          window.location.replace(
            location.origin + localStorage.getItem("prevPath")
          );
          localStorage.removeItem("prevPath");
        } else navigate("/");
      } else {
        alert("Incorrect password or username");
      }
    } else {
      alert("Incorrect password or username");
    }
  };
  console.log(props.authedUser, localStorage.getItem("authedUser"));
  return (
    <Form>
      {props.authedUser !== undefined ||
      localStorage.getItem("authedUser") !== null ? (
        <div>
          <h2>You are already logged in.</h2>
          <p>If you want to log out, please click logout above.</p>
        </div>
      ) : (
        <>
          <h2>Login</h2>
          <hr></hr>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              ref={usernameRef}
              type="username"
              placeholder="Enter username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordRef}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button id="LoginBtn" onClick={handleLogin} variant="primary">
            Login
          </Button>
        </>
      )}
    </Form>
  );
}

const mapStateToProps = ({ users }) => {
  return {
    users,
  };
};

export default connect(mapStateToProps)(Login);
