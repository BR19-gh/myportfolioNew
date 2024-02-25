/* eslint-disable react/prop-types */
import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import StatSlot from "./StatSlot";
import Header from "./Header";

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
      <Header
        icon={<i className="fas fa-chart-bar"></i>}
        text={{
          en: ["Personal", "Stats"],
          ar: ["أحصائيات", "شخصية"],
          space: true,
        }}
        flexDir={props.flexDir}
        fontSize={props.fontSize}
        lang={props.lang}
        myPrimaryColor={props.myPrimaryColor}
      />

      <Container className="d-flex flex-wrap flex-column align-content-center">
        <ClipLoader
          color={props.myPrimaryColor}
          loading={loadingStats}
          size={150}
          cssOverride={override}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        {loadingStats ? null : (
          <>
            <StatSlot
              title="Top Languages"
              src={
                props.lang === "ar"
                  ? "https://github-readme-stats.vercel.app/api/top-langs/?langs_count=10&username=BR19-gh&theme=catppuccin_mocha&layout=donut&locale=ar"
                  : "https://github-readme-stats.vercel.app/api/top-langs/?langs_count=10&username=BR19-gh&theme=catppuccin_mocha&layout=donut"
              }
            />
            <StatSlot
              title="Stats"
              src={
                props.lang === "ar"
                  ? "https://github-readme-stats.vercel.app/api?username=BR19-gh&show_icons=true&theme=catppuccin_mocha&rank_icon=github&locale=ar"
                  : "https://github-readme-stats.vercel.app/api?username=BR19-gh&show_icons=true&theme=catppuccin_mocha&rank_icon=github"
              }
            />
          </>
        )}
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
