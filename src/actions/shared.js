import { _getProjects, _getAccounts } from "../../_DATA";
import { receiveProjects } from "./projects";
import { receiveAccounts } from "./accounts";
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
        _getAccounts().then((accounts) => {
          dispatch(receiveProjects(projects));
          dispatch(receiveAccounts(accounts));
          dispatch(myPrimaryColorAction);
          dispatch(hideLoading());
        });
      })

      .catch((error) => {
        alert(error);
      });
  };
}
