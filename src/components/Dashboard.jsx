/* eslint-disable react/prop-types */
import { connect } from "react-redux";
import Question from "./Question.jsx";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Dashboard = (props) => {
  return (
    <Container>
      <Tabs
        defaultActiveKey="newQuestions"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="newQuestions" title="New Questions">
          {props.unansweredQuestionId.length !== 0 ? (
            <Row md={3}>
              {props.unansweredQuestionId.map((id) => (
                <Col className="mb-3" key={id}>
                  <Question id={id} />
                </Col>
              ))}
            </Row>
          ) : (
            <h5>No new polls yet...</h5>
          )}
        </Tab>
        <Tab eventKey="done" title="Done">
          {props.answeredQuestionIdlength !== 0 ? (
            <Row md={3}>
              {props.answeredQuestionId.map((id) => (
                <Col className="mb-3" key={id}>
                  <Question id={id} />
                </Col>
              ))}
            </Row>
          ) : (
            <h5>No polls answered yet...</h5>
          )}
        </Tab>
      </Tabs>
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
