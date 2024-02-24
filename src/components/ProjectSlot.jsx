/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Tilt } from "react-tilt";
import Badge from "react-bootstrap/Badge";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 20, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 2000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const ProjectSlot = (props) => {
  return (
    <Tilt
      key={props.id}
      options={defaultOptions}
      style={{
        width: "19rem",
        margin: "7px",
        marginBottom: "20px",
      }}
    >
      <Card
        className="text-center"
        style={{
          width: "100%",
        }}
      >
        <Card.Img
          style={{
            height: "113px",
          }}
          variant="top"
          src={props.projects[props.id].githubImg}
          alt={props.projects[props.id].githubURL}
        />
        <Card.Body
          style={{
            height: "260px",
          }}
        >
          <Card.Title
            style={{
              height: "35px",
            }}
          >
            {props.projects[props.id].title}
          </Card.Title>
          <Card.Text
            style={{
              height: "40px",
            }}
          >
            {props.lang === "en"
              ? props.projects[props.id].shortDescription
              : props.projects[props.id].shortDescriptionAr}
          </Card.Text>

          <Container
            style={{
              height: "95px",
            }}
          >
            {props.projects[props.id].skills.map((skill) => (
              <Badge key={skill} bg="primary" style={{ margin: "1px" }}>
                {skill}
              </Badge>
            ))}
          </Container>

          <Button
            onClick={() => {
              window.open(props.projects[props.id].githubURL, "_blank");
            }}
            id="projects-btn"
            variant="dark"
          >
            {props.lang === "en" ? "Go to Project" : "الذهاب للمشروع"}
          </Button>
        </Card.Body>
      </Card>
    </Tilt>
  );
};

export default ProjectSlot;
