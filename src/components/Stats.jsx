/* eslint-disable react/prop-types */
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Tilt } from "react-tilt";

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

const Stats = (props) => {
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
          <i className="fas fa-chart-bar"></i>&nbsp;
          {props.lang === "en" ? "Personal" : "أحصائيات"}
        </h1>
        <h1 style={{ color: props.myPrimaryColor }}>
          &nbsp;{props.lang === "en" ? "Stats" : "شخصية"}
        </h1>
      </div>

      <Container className="d-flex flex-wrap flex-column align-content-center">
        <Tilt
          options={defaultOptions}
          style={{
            width: "19rem",
            borderRadius: "40%",
          }}
        >
          <Image
            style={{
              width: "100%",
              margin: props.fontSize === "sm" ? "0px" : "20px",
              marginBottom: "20px",
            }}
            src={
              "https://github-readme-stats.vercel.app/api/top-langs/?langs_count=10&username=BR19-gh&theme=catppuccin_mocha&layout=donut" +
                props.lang ===
              "ar"
                ? "&locale=ar"
                : ""
            }
            alt="Top Langs"
          />
        </Tilt>

        <Tilt
          options={defaultOptions}
          style={{
            width: "19rem",
            borderRadius: "40%",
          }}
        >
          <Image
            style={{
              width: "100%",
              margin: props.fontSize === "sm" ? "0px" : "20px",
              marginBottom: "20px",
            }}
            src={
              "https://github-readme-stats.vercel.app/api?username=BR19-gh&show_icons=true&theme=catppuccin_mocha&rank_icon=github" +
                props.lang ===
              "ar"
                ? "&locale=ar"
                : ""
            }
            alt="Stats"
          />
        </Tilt>
      </Container>
    </Container>
  );
};

const mapStateToProps = ({ projects, myPrimaryColor }) => {
  return {
    projects,
    myPrimaryColor: myPrimaryColor.color,
  };
};

export default connect(mapStateToProps)(Stats);
