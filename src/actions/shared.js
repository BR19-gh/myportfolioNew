import { _getProjects } from "../../_DATA";
import { receiveProjects } from "./projects";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const myPrimaryColorAction = {
  type: "CHANGE_PRIMARY_COLOR",
  payload: "#5a5aa1",
};

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());

    _getProjects()
      .then((projects) => {
        dispatch(receiveProjects(projects));
        dispatch(myPrimaryColorAction);
        dispatch(hideLoading());
      })

      .catch((error) => {
        alert(error);
      });
  };
}
