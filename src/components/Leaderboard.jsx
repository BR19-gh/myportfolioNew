/* eslint-disable react/prop-types */
// Leaderboard.js

import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import { connect } from "react-redux";

const Leaderboard = (props) => {
  let count = 0;
  return (
    <Container className=" mt-4">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th className="text-center">#</th>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(props.users)
            .sort((a, b) => {
              const userA = props.users[a];
              const userB = props.users[b];
              const answersA = Object.keys(userA.answers).length;
              const answersB = Object.keys(userB.answers).length;
              const questionsA = userA.questions.length;
              const questionsB = userB.questions.length;
              return answersB + questionsB - (answersA + questionsA);
            })
            .map((user) => (
              <tr key={user}>
                <td
                  className="text-center"
                  style={{
                    fontWeight: props.authedUser === user ? "bold" : "normal",
                    color: props.authedUser === user ? "lightblue" : "white",
                  }}
                >
                  {++count}
                </td>
                <td
                  style={{
                    display: "flex",
                    fontWeight: props.authedUser === user ? "bold" : "normal",
                    color: props.authedUser === user ? "lightblue" : "white",
                  }}
                >
                  <div>
                    <Image
                      style={{
                        width: "50px",
                        height: "50px",
                        marginRight: "10px",
                      }}
                      src={props.users[user].avatarURL}
                      alt="avatar"
                      roundedCircle
                    />
                  </div>
                  <div>
                    <div style={{ fontSize: "larger" }}>
                      {props.authedUser === user
                        ? props.users[user].name + " (You)"
                        : props.users[user].name}
                    </div>
                    <p style={{ margin: 0 }}>{user}</p>
                  </div>
                </td>
                <td
                  style={{
                    fontWeight: props.authedUser === user ? "bold" : "normal",
                    color: props.authedUser === user ? "lightblue" : "white",
                  }}
                >
                  {Object.keys(props.users[user].answers).length}
                </td>
                <td
                  style={{
                    fontWeight: props.authedUser === user ? "bold" : "normal",
                    color: props.authedUser === user ? "lightblue" : "white",
                  }}
                >
                  {props.users[user].questions.length}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

const mapStateToProps = ({ authedUser, users }) => {
  return {
    authedUser,
    users,
  };
};

export default connect(mapStateToProps)(Leaderboard);
