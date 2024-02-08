/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import NotFound from "./NotFound";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { formatDate } from "../helpers";
import { handleAnswerQuestion } from "../actions/questions";

const QuestionPage = (props) => {
  const { id } = useParams();

  if (props.questions[id] === undefined) {
    return <NotFound />;
  }

  const question = props.questions[id];

  const isAnswered = props.authedUser
    ? Object.keys(props.users[props.authedUser].answers).includes(question.id)
    : undefined;

  const isAnswerExist = () => {
    if (isAnswered) {
      const answer = props.users[props.authedUser].answers[question.id];
      let result;

      if (answer) {
        answer === "optionOne"
          ? (result = "optionOne")
          : (result = "optionTwo");
        return result;
      } else {
        return false;
      }
    }
  };

  const btnContent = (num) => {
    if (num === 1) {
      return isAnswered
        ? "Selected by " +
            question.optionOne.votes.length +
            " / " +
            `${(
              (question.optionOne.votes.length /
                Object.keys(props.users).length) *
              100
            ).toFixed(0)}% of users`
        : "Click";
    } else if (num === 2) {
      return isAnswered
        ? "Selected by " +
            question.optionTwo.votes.length +
            " / " +
            `${(
              (question.optionTwo.votes.length /
                Object.keys(props.users).length) *
              100
            ).toFixed(0)}% of users`
        : "Click";
    }
  };

  const handleAnswer = (option) => {
    localStorage.setItem("handleAnswer", true);
    if (props.authedUser === "") {
      alert("Login before answering the poll");
      return;
    }
    props.dispatch(
      handleAnswerQuestion({
        authedUser: props.authedUser,
        qid: question.id,
        answer: option,
      })
    );
  };
  return (
    <Card className="text-center">
      <Card.Header>
        Poll By {question.author === props.authedUser ? "You" : question.author}
      </Card.Header>
      <div className="text-center">
        <Image
          style={{
            width: "100px",
            height: "100px",
            marginTop: "10px",
          }}
          src={props.users[question.author].avatarURL}
          alt="avatar"
          roundedCircle
        />
      </div>
      <Card.Body>
        <Card.Title>Would You Rather</Card.Title>

        <Container style={{ display: "flex" }} size="lg" className="mb-2">
          <Card style={{ width: "50%" }} className="text-center">
            <Card.Body>
              <Card.Text style={{ height: "40px" }}>
                {question.optionOne.text}
              </Card.Text>
              <Button
                onClick={() => handleAnswer("optionOne")}
                disabled={!isAnswered ? false : true}
                variant={
                  isAnswerExist() === "optionOne"
                    ? "success"
                    : isAnswerExist()
                    ? "danger"
                    : "primary"
                }
                style={{ width: "100%", height: "40px" }}
              >
                {btnContent(1)}
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "50%" }} className="text-center">
            <Card.Body>
              <Card.Text style={{ height: "40px" }}>
                {question.optionTwo.text}
              </Card.Text>
              <Button
                onClick={() => handleAnswer("optionTwo")}
                disabled={!isAnswered ? false : true}
                variant={
                  isAnswerExist() === "optionTwo"
                    ? "success"
                    : isAnswerExist()
                    ? "danger"
                    : "primary"
                }
                style={{ width: "100%", height: "40px" }}
              >
                {btnContent(2)}
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </Card.Body>
      <Card.Footer className="text-muted">
        {formatDate(question.timestamp)}
      </Card.Footer>
    </Card>
  );
};

const mapStateToProps = ({ questions, users, authedUser }) => {
  return {
    questions,
    users,
    authedUser,
  };
};

export default connect(mapStateToProps)(QuestionPage);
