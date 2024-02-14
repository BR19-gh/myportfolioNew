/* eslint-disable no-empty */
import { RECEIVE_PROJECTS } from "../actions/projects";

export default function questions(state = {}, action) {
  //   const { question } = action;
  //   const { qid } = action ? action : { qid: "" };
  //   const { authedUser } = action ? action : { authedUser: "" };
  //   const { answer } = action ? action : { answer: {} };

  switch (action.type) {
    case RECEIVE_PROJECTS:
      return {
        ...state,
        ...action.projects,
      };

    default:
      return state;
  }
}
