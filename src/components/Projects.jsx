/* eslint-disable react/prop-types */
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";

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
          marginBottom: "45px",
        }}
        className="d-flex justify-content-center"
      >
        <h1>
          <i className="fas fa-tasks"></i>&nbsp;My
        </h1>
        <h1 style={{ color: props.myPrimaryColor }}>&nbsp;Projects</h1>
      </div>
      {Object.keys(props.projects).map((id) => (
        <Card
          key={id}
          style={{
            width: "19rem",
            margin: props.fontSize === "sm" ? "0px" : "20px",
            marginBottom: "20px",
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
          <Card.Body>
            <Card.Title>{props.projects[id].title}</Card.Title>
            <Card.Text
              style={{
                height: "50px",
              }}
            >
              {props.projects[id].shortDescription}
            </Card.Text>
            <Button id="projects-btn" variant="dark">
              Go to Project
            </Button>
          </Card.Body>
        </Card>
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
