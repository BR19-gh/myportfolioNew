import { _getUsers, _getQuestions } from "../../_DATA";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const AUTHED_ID = localStorage.getItem("authedUser")
  ? localStorage.getItem("authedUser")
  : "";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    _getUsers()
      .then((users) => {
        _getQuestions().then((questions) => {
          dispatch(receiveUsers(users));
          dispatch(receiveQuestions(questions));
          dispatch(setAuthedUser(AUTHED_ID));
          dispatch(hideLoading());
        });
      })
      .catch((error) => {
        alert(error);
      });
  };
}
