import { RECEIVE_USERS } from "../actions/users";
import { ADD_ANSWER } from "../actions/users";

export default function users(state = {}, action) {
  const { qid } = action ? action : { qid: "" };
  const { authedUser } = action ? action : { authedUser: "" };
  const { answer } = action ? action : { answer: {} };

  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    case ADD_ANSWER:
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer,
          },
        },
      };
    default:
      return state;
  }
}
