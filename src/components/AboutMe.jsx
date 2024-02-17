/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Typewriter from "typewriter-effect";
import Button from "react-bootstrap/Button";
// import Image from "react-bootstrap/Image";
import { useEffect } from "react";
// import { Tilt } from "react-tilt";
import { useNavigate } from "react-router-dom";

const AboutMe = ({
  myPrimaryColor,
  fontSize,
  setFlexDir,
  setFontSize,
  flexDir,
  setExpanded,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200) {
        setFlexDir("column");
      } else {
        setFlexDir("row");
      }
      if (window.innerWidth < 768) {
        setFontSize("sm");
      } else {
        setFontSize("lg");
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
        setExpanded(false);
      }}
      id="aboutme-component"
      className="text-center showPage"
    >
      <div
        style={{
          marginTop:
            flexDir === "column"
              ? fontSize === "sm"
                ? "70px"
                : "-60px"
              : "-90px",
          marginBottom: flexDir === "column" ? "50px" : "100px",
        }}
        className="d-flex justify-content-center"
      >
        <h1>
          <i className="fas fa-user"></i>&nbsp;About
        </h1>
        <h1 style={{ color: myPrimaryColor }}>&nbsp;Me</h1>
      </div>

      <Container
        className={
          (flexDir === "row" ? "d-flex " : "") + "justify-content-center"
        }
      >
        {/* <ImageSection fontSize={fontSize} flexDir={flexDir} /> */}

        <div
          style={{
            textAlign: "left",
            paddingLeft: flexDir === "column" ? "0px" : "50px",

            lineHeight: "1.5",
          }}
        >
          <h3
            style={{
              fontWeight: "bold",
            }}
          >
            I'm Ibrahim
          </h3>
          <div
            id="typewriter"
            style={{
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            <Typewriter
              options={{
                loop: true,
                delay: 75,
                autoStart: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .pauseFor(200)
                  .changeDelay(40)
                  .changeDeleteSpeed(3)
                  .typeString("Fullstack Developer")
                  .pauseFor(1000)
                  .deleteChars(20)
                  .pauseFor(100)
                  .typeString("Frontend Developer")
                  .pauseFor(1000)
                  .deleteChars(18)
                  .pauseFor(100)
                  .typeString("Backend Developer")
                  .pauseFor(1000)
                  .deleteChars(18)
                  .start();
              }}
            />
          </div>
          <br />
          <p
            style={{
              fontSize: fontSize === "lg" ? "16px" : "14px",
              textAlign: "justify",
            }}
          >
            I have a Bachelor's degree in Computer Science from QU, and I have a
            strong background in Fullstack Web Development. Throughout my
            academic journey, I have obtained various certificates and completed
            relevant courses to enhance my skills and stay up to date with the
            latest industry trends. I am eager to learn new technologies, to
            contribute my expertise to innovative projects and to make a
            meaningful impact in the world of software development.
            <br />
            <br />
            <a
              style={{
                color: myPrimaryColor,
                fontWeight: "bold",
              }}
            >
              Email:&nbsp;&nbsp;
            </a>
            <a
              style={{
                textDecoration: "none",
                color: "white",
              }}
              href="mailto: ibrahim-abdalaziz@hotmail.com"
            >
              ibrahim-abdalaziz@hotmail.com
            </a>
            <br />
            <a
              style={{
                color: myPrimaryColor,
                fontWeight: "bold",
              }}
            >
              Location:&nbsp;&nbsp;
            </a>
            Qassim - Riyadh, Saudi Arabia
          </p>
          <Button
            id="resume-btn"
            variant="dark"
            className="mb-4"
            style={{
              width: "140px",
            }}
            size="lg"
            onClick={() => {
              navigate("/resume");
            }}
          >
            Resume <i className="far fa-file"></i>
          </Button>
          <a style={{ margin: "5px" }}></a>
          <Button
            id="projects-btn"
            variant="dark"
            className="mb-4"
            style={{
              width: "140px",
            }}
            size="lg"
            onClick={() => {
              navigate("/projects");
            }}
          >
            Projects <i className="fas fa-tasks"></i>
          </Button>
        </div>
      </Container>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    myPrimaryColor: state.myPrimaryColor.color,
  };
};

export default connect(mapStateToProps)(AboutMe);
