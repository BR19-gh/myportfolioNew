/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading-bar";
import NewQuestion from "./NewQuestion";
import QuestionPage from "./QuestionPage";
import Leaderboard from "./Leaderboard";
import Nav from "./Nav";
import Login from "./Login";
import { Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import NotFound from "./NotFound";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Container>
      <LoadingBar />
      <div className="content-container">
        <Nav />
        {props.loading === true ? null : (
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/leaderboard" exact element={<Leaderboard />} />
            <Route path="/question/:id" element={<QuestionPage />} />
            <Route path="/add" element={<NewQuestion />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </div>
    </Container>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
