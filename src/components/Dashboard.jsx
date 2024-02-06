/* eslint-disable react/prop-types */
import { connect } from "react-redux";
import Question from "./Question.jsx";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Dashboard = (props) => {
  return (
    <Container>
      <Card className="text-center m-1">
        <Card.Header as="h3">New Questions</Card.Header>
        {props.unansweredQuestionId.length !== 0 ? (
          <Card.Body>
            <Row md={3}>
              {props.unansweredQuestionId.map((id) => (
                <Col className="mb-3" key={id}>
                  <Question id={id} />
                </Col>
              ))}
            </Row>
          </Card.Body>
        ) : (
          <h5>No new polls yet...</h5>
        )}
      </Card>
      <hr></hr>

      <Card className="text-center m-1 mb-4">
        <Card.Header as="h3">Done</Card.Header>
        {props.answeredQuestionIdlength !== 0 ? (
          <Card.Body>
            <Row md={3}>
              {props.answeredQuestionId.map((id) => (
                <Col className="mb-3" key={id}>
                  <Question id={id} />
                </Col>
              ))}
            </Row>
          </Card.Body>
        ) : (
          <h5>No polls answered yet...</h5>
        )}
      </Card>
    </Container>
  );
};

const mapStateToProps = ({ questions, authedUser }) => {
  const answeredQuestions = Object.keys(questions).filter((id) => {
    const question = questions[id];
    return (
      question.optionOne.votes.includes(authedUser) ||
      question.optionTwo.votes.includes(authedUser)
    );
  });

  const unansweredQuestions = Object.keys(questions).filter((id) => {
    return !answeredQuestions.includes(id);
  });

  return {
    answeredQuestionId: answeredQuestions.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
    unansweredQuestionId: unansweredQuestions.sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
};

export default connect(mapStateToProps)(Dashboard);
