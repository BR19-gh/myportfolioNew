/* eslint-disable react/prop-types */
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { formatDate } from "../helpers";
import { useNavigate } from "react-router-dom";

const Project = (props) => {
  const navigate = useNavigate();

  if (props.project === null) {
    return <p>This project does not exist</p>;
  }

  const { author, timestamp } = props.project;

  return (
    <Card className="text-center h-100 w-100">
      <Card.Body>
        <Card.Title>{author === props.authedUser ? "You" : author}</Card.Title>
        <Button
          onClick={() => navigate(`/project/${props.id}`)}
          variant="primary"
        >
          Show
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted">{formatDate(timestamp)}</Card.Footer>
    </Card>
  );
};

const mapStateToProps = ({ projects }, { id }) => {
  const project = projects[id];

  return {
    project: project ? project : null,
  };
};

export default connect(mapStateToProps)(Project);
