/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { connect } from "react-redux";
import Container from "react-bootstrap/Container";
import Typewriter from "typewriter-effect";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useEffect } from "react";
import { Tilt } from "react-tilt";

const ImageSection = ({ fontSize, flexDir }) => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 10, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };

  return (
    <Container
      style={{
        marginBottom: flexDir === "column" ? "50px" : "00px",
        paddingRight: flexDir === "column" ? "0px" : "50px",
      }}
    >
      <Tilt
        options={defaultOptions}
        style={{
          borderRadius: "20%",
        }}
      >
        <Image
          className="avatar"
          style={{
            height: fontSize === "sm" ? "250px" : "",
            borderRadius: "20%",
          }}
          src="../../public/avatar/sticker.png"
          alt="avatar"
        />
      </Tilt>
    </Container>
  );
};

const AboutMe = ({
  myPrimaryColor,
  fontSize,
  setFlexDir,
  setFontSize,
  flexDir,
  setExpanded,
}) => {
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
                ? "75px"
                : "-30px"
              : "-100px",
          marginBottom: flexDir === "column" ? "70px" : "100px",
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
        <ImageSection fontSize={fontSize} flexDir={flexDir} />

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
          <p style={{ fontSize: fontSize === "lg" ? "16px" : "14px" }}>
            I have a Bachelor's degree in Computer Science from QU. I have a
            strong background in programming, Fullstack Web Development.
            Throughout my academic journey, I have obtained various certificates
            and completed relevant courses to enhance my skills and stay up to
            date with the latest industry trends. I am eager learn new
            technologies and to contribute my expertise to innovative projects
            and make a meaningful impact in the world of software development.
            <br />
            <br />
            Email:&nbsp;
            <a
              style={{ textDecoration: "none", color: "#fff" }}
              href="mailto: ibrahim-abdalaziz@hotmail.com"
            >
              ibrahim-abdalaziz@hotmail.com
            </a>
            <br />
            Location: Qassim - Riyadh, Saudi Arabia
          </p>
          <Button
            id="resume-btn"
            variant="dark"
            className="mb-4"
            style={{
              width: "155px",
            }}
            size="lg"
          >
            Resume <i className="fas fa-arrow-circle-right"></i>
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
