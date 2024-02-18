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

const App = (props) => {
  const [flexDir, setFlexDir] = useState("row");
  const [fontSize, setFontSize] = useState("lg");
  const [expanded, setExpanded] = useState(false);
  const [lang, setLang] = useState("en");
  const langPath = `${
    window.location.pathname[window.location.pathname.length - 2]
  }${window.location.pathname[window.location.pathname.length - 1]}`;

  useEffect(() => {
    if (langPath === "ar") {
      setLang("ar");
    } else {
      setLang("en");
    }
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Container>
      <LoadingBar style={{ backgroundColor: props.myPrimaryColor }} />
      <Nav
        expanded={expanded}
        setExpanded={setExpanded}
        setLang={setLang}
        lang={lang}
      />

      <div className="content-container">
        {props.loading === true ? null : (
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
        )}
      </div>
    </Container>
  );
};

const mapStateToProps = ({ authedUser, myPrimaryColor }) => ({
  loading: authedUser === null,
  myPrimaryColor: myPrimaryColor.color,
});

export default connect(mapStateToProps)(App);
