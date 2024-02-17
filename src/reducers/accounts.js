/* eslint-disable no-empty */
import { RECEIVE_ACCOUNTS } from "../actions/accounts.js";

export default function accounts(state = {}, action) {
  //   const { question } = action;
  //   const { qid } = action ? action : { qid: "" };
  //   const { authedUser } = action ? action : { authedUser: "" };
  //   const { answer } = action ? action : { answer: {} };

  switch (action.type) {
    case RECEIVE_ACCOUNTS:
      console.log(action.accounts);
      return {
        ...state,
        ...action.accounts,
      };

    default:
      return state;
  }
}
