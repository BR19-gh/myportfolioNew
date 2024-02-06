/* eslint-disable react/prop-types */
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { formatDate } from "../helpers";
import { useNavigate } from "react-router-dom";

const Question = (props) => {
  const navigate = useNavigate();

  if (props.question === null) {
    return <p>This question does not exist</p>;
  }

  const { author, timestamp } = props.question;

  return (
    <Card className="text-center h-100 w-100">
      <Card.Body>
        <Card.Title>{author === props.authedUser ? "You" : author}</Card.Title>
        <Button
          onClick={() => navigate(`/question/${props.id}`)}
          variant="primary"
        >
          Show
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">{formatDate(timestamp)}</Card.Footer>
    </Card>
  );
};

const mapStateToProps = ({ authedUser, questions }, { id }) => {
  const question = questions[id];

  return {
    authedUser,
    question: question ? question : null,
  };
};

export default connect(mapStateToProps)(Question);
