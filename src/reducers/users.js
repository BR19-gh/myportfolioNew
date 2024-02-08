import {
  ADD_QUESTION_TO_USER,
  RECEIVE_USERS,
  ADD_ANSWER,
} from "../actions/users";

export default function users(state = {}, action) {
  console.log();
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

    case ADD_QUESTION_TO_USER:
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          questions: state[authedUser].questions.concat(qid),
        },
      };
    default:
      return state;
  }
}
