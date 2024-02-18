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

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Container>
      <LoadingBar style={{ backgroundColor: props.myPrimaryColor }} />
      <Nav expanded={expanded} setExpanded={setExpanded} />

      <div className="content-container">
        {props.loading === true ? null : (
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Dashboard
                  setExpanded={setExpanded}
                  flexDir={flexDir}
                  setFontSize={setFontSize}
                  fontSize={fontSize}
                  setFlexDir={setFlexDir}
                />
              }
            />
            <Route
              path="/projects"
              element={
                <Projects
                  setExpanded={setExpanded}
                  flexDir={flexDir}
                  setFontSize={setFontSize}
                  fontSize={fontSize}
                  setFlexDir={setFlexDir}
                />
              }
            />

            <Route
              path="/aboutme"
              element={
                <AboutMe
                  setExpanded={setExpanded}
                  flexDir={flexDir}
                  setFontSize={setFontSize}
                  fontSize={fontSize}
                  setFlexDir={setFlexDir}
                />
              }
            />
            <Route
              path="/stats"
              element={
                <Stats
                  setExpanded={setExpanded}
                  flexDir={flexDir}
                  setFontSize={setFontSize}
                  fontSize={fontSize}
                  setFlexDir={setFlexDir}
                />
              }
            />
            <Route
              path="/resume"
              element={
                <Resume
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
