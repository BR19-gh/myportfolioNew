/* eslint-disable react/prop-types */
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import { useEffect } from "react";
import ProjectSlot from "./ProjectSlot";
import Header from "./Header";

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
      <Header
        icon={<i className="fas fa-laptop-code"></i>}
        text={{ en: ["My", "Projects"], ar: ["مشاريـ", "ـــعي"], space: false }}
        flexDir={props.flexDir}
        fontSize={props.fontSize}
        lang={props.lang}
        myPrimaryColor={props.myPrimaryColor}
      />

      {Object.keys(props.projects).map((id) => (
        <ProjectSlot id={id} projects={props.projects} key={id} />
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
