/* eslint-disable react/prop-types */
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import { useEffect } from "react";
import { connect } from "react-redux";

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
          marginBottom: "45px",
        }}
        className="d-flex justify-content-center"
      >
        <h1>
          <i className="fas fa-chart-bar"></i>&nbsp;Personal
        </h1>
        <h1 style={{ color: props.myPrimaryColor }}>&nbsp;Stats</h1>
      </div>

      <Container className="d-flex flex-wrap flex-column align-content-center">
        <Image
          style={{
            width: "19rem",
            margin: props.fontSize === "sm" ? "0px" : "20px",
            marginBottom: "20px",
          }}
          src="https://github-readme-stats.vercel.app/api/top-langs/?langs_count=10&username=BR19-gh&theme=catppuccin_mocha&layout=donut"
          alt="Top Langs"
        />

        <Image
          style={{
            width: "19rem",
            margin: props.fontSize === "sm" ? "0px" : "20px",
            marginBottom: "20px",
          }}
          src="https://github-readme-stats.vercel.app/api?username=BR19-gh&show_icons=true&theme=catppuccin_mocha&rank_icon=github"
          alt="Stats"
        />
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
