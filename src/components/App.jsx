/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import Projects from "./Projects";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NotFound from "./NotFound";
import LoadingBar from "react-redux-loading-bar";
import AboutMe from "./AboutMe";
import Stats from "./Stats";
import Resume from "./Resume";
import ClipLoader from "react-spinners/ClipLoader";

const App = (props) => {
  const [flexDir, setFlexDir] = useState("row");
  const [fontSize, setFontSize] = useState("lg");
  const [expanded, setExpanded] = useState(false);
  const [lang, setLang] = useState("en");
  let [loading, setLoading] = useState(true);

  const langPath = `${
    window.location.pathname[window.location.pathname.length - 2]
  }${window.location.pathname[window.location.pathname.length - 1]}`;

  useEffect(() => {
    props.dispatch(handleInitialData());

    const handleResize = () => {
      if (window.innerWidth < 1180) {
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

    if (langPath === "ar") {
      setLang("ar");
    } else {
      setLang("en");
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    setTimeout(() => {
      window.addEventListener("load", setLoading(!loading));
    }, 500);
    return () => {
      window.removeEventListener("resize", handleResize);

      setTimeout(() => {
        window.addEventListener("load", setLoading(!loading));
      }, 500);
    };
  }, []);

  const override = {
    display: "block",
    margin: "auto",
    marginTop: "250px",
  };

  return (
    <Container>
      <ClipLoader
        color={props.myPrimaryColor}
        loading={loading}
        size={150}
        cssOverride={override}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <LoadingBar style={{ backgroundColor: props.myPrimaryColor }} />
      {loading ? null : (
        <>
          <Nav
            setLoading={setLoading}
            expanded={expanded}
            setExpanded={setExpanded}
            setLang={setLang}
            lang={lang}
          />

          <div className="content-container">
            <Routes>
              <Route
                path={lang === "ar" ? "/ar" : "/"}
                exact
                element={
                  <Dashboard
                    lang={lang}
                    setExpanded={setExpanded}
                    flexDir={flexDir}
                    setFontSize={setFontSize}
                    fontSize={fontSize}
                    setFlexDir={setFlexDir}
                  />
                }
              />
              <Route
                path={lang === "ar" ? "/projects/ar" : "/projects"}
                element={
                  <Projects
                    lang={lang}
                    setExpanded={setExpanded}
                    flexDir={flexDir}
                    setFontSize={setFontSize}
                    fontSize={fontSize}
                    setFlexDir={setFlexDir}
                  />
                }
              />

              <Route
                path={lang === "ar" ? "/aboutme/ar" : "/aboutme"}
                element={
                  <AboutMe
                    lang={lang}
                    setExpanded={setExpanded}
                    flexDir={flexDir}
                    setFontSize={setFontSize}
                    fontSize={fontSize}
                    setFlexDir={setFlexDir}
                  />
                }
              />
              <Route
                path={lang === "ar" ? "/stats/ar" : "/stats"}
                element={
                  <Stats
                    lang={lang}
                    setExpanded={setExpanded}
                    flexDir={flexDir}
                    setFontSize={setFontSize}
                    fontSize={fontSize}
                    setFlexDir={setFlexDir}
                  />
                }
              />
              <Route
                path={lang === "ar" ? "/resume/ar" : "/resume"}
                element={
                  <Resume
                    lang={lang}
                    setExpanded={setExpanded}
                    flexDir={flexDir}
                    setFontSize={setFontSize}
                    fontSize={fontSize}
                    setFlexDir={setFlexDir}
                  />
                }
              />
              <Route
                path="*"
                element={
                  <NotFound
                    setExpanded={setExpanded}
                    flexDir={flexDir}
                    setFontSize={setFontSize}
                    fontSize={fontSize}
                    setFlexDir={setFlexDir}
                  />
                }
              />
            </Routes>
          </div>
        </>
      )}
    </Container>
  );
};

const mapStateToProps = ({ myPrimaryColor }) => ({
  myPrimaryColor: myPrimaryColor.color,
});

export default connect(mapStateToProps)(App);
