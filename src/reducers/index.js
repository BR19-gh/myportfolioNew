import { combineReducers } from "redux";
import projects from "./projects";
import { loadingBarReducer } from "react-redux-loading-bar";

function myPrimaryColor(state = {}, action) {
  const { payload } = action;

  switch (action.type) {
    case "CHANGE_PRIMARY_COLOR":
      return {
        ...state,
        color: payload,
      };

    default:
      return state;
  }
}

export default combineReducers({
  projects,
  myPrimaryColor,
  loadingBar: loadingBarReducer,
});
