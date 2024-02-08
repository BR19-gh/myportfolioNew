/* eslint-disable no-empty */
import {
  RECEIVE_QUESTIONS,
  ANSWER_QUESTION,
  ADD_QUESTION,
} from "../actions/questions";

export default function questions(state = {}, action) {
  const { question } = action;
  const { qid } = action ? action : { qid: "" };
  const { authedUser } = action ? action : { authedUser: "" };
  const { answer } = action ? action : { answer: {} };

  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    case ANSWER_QUESTION:
      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser]),
          },
        },
      };

    case ADD_QUESTION:
      console.log("Question added to user: ", question);

      return {
        ...state,
        [question.id]: question,
      };

    default:
      return state;
  }
}
