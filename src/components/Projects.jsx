/* eslint-disable react/prop-types */
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Projects = ({ projects }) => {
  return (
    <Container className="d-flex flex-lg-wrap">
      {Object.keys(projects).map((id) => (
        <Card key={id} style={{ width: "18rem", margin: "10px" }}>
          <Card.Img
            // style={{
            //   width: "200px",
            //   height: "100px",
            // }}
            variant="top"
            src={projects[id].githubImg}
            alt={projects[id].githubURL}
          />
          <Card.Body>
            <Card.Title>{projects[id].title}</Card.Title>
            <Card.Text>"working on it..."</Card.Text>
            <Button variant="primary">Go to Project</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

const mapStateToProps = ({ projects }) => {
  return {
    projects,
  };
};

export default connect(mapStateToProps)(Projects);
