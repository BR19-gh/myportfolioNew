/* eslint-disable react/prop-types */
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
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

const Projects = (props) => {
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        props.setFlexDir("column");
      } else {
        props.setFlexDir("row");
      }
      if (window.innerWidth < 768) {
        props.setFontSize("sm");
      } else {
        props.setFontSize("lg");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Container
      onClick={() => {
        props.setExpanded(false);
      }}
      className="d-flex flex-wrap justify-content-center showPage"
    >
      <div
        style={{
          width: "100%",

          marginTop:
            props.flexDir === "column"
              ? props.fontSize === "sm"
                ? "20px"
                : "-60px"
              : "-90px",
          marginBottom: "30px",
        }}
        className="d-flex justify-content-center"
      >
        <h1>
          <i className="fas fa-laptop-code"></i>
          {props.lang === "en" ? " My" : " مشاريـ"}
        </h1>
        <h1 style={{ color: props.myPrimaryColor }}>
          {props.lang === "en" ? <a>&nbsp;</a> : null}
          {props.lang === "en" ? "Projects" : "ـعي"}
        </h1>
      </div>
      {Object.keys(props.projects).map((id) => (
        <Tilt
          key={id}
          options={defaultOptions}
          style={{
            width: "19rem",
            margin: props.fontSize === "sm" ? "0px" : "20px",
            marginBottom: "20px",
          }}
        >
          <Card
            className= "text-center"
            style={{
              width: "100%",
            }}
          >
            <Card.Img
              style={{
                height: "113px",
              }}
              variant="top"
              src={props.projects[id].githubImg}
              alt={props.projects[id].githubURL}
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
                {props.projects[id].title}
              </Card.Title>
              <Card.Text
                style={{
                  height: "40px",
                }}
              >
                {props.lang === "en"
                  ? props.projects[id].shortDescription
                  : props.projects[id].shortDescriptionAr}
              </Card.Text>

              <Container
                style={{
                  height: "95px",
                }}
              >
                {props.projects[id].skills.map((skill) => (
                  <Badge key={skill} bg="primary" style={{margin: "1px"}}>
                    {skill}
                  </Badge>
                ))}
              </Container>

              <Button
                onClick={() => {
                  window.open(props.projects[id].githubURL, "_blank");
                }}
                id="projects-btn"
                variant="dark"
              >
                {props.lang === "en" ? "Go to Project" : "الذهاب للمشروع"}
              </Button>
            </Card.Body>
          </Card>
        </Tilt>
      ))}
    </Container>
  );
};

const mapStateToProps = ({ projects, myPrimaryColor }) => {
  return {
    projects,
    myPrimaryColor: myPrimaryColor.color,
  };
};

export default connect(mapStateToProps)(Projects);
