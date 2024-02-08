export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_ANSWER = "ADD_ANSWER";
export const ADD_QUESTION_TO_USER = "ADD_QUESTION_TO_USER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addAnswer({ authedUser, qid, answer }) {
  return {
    type: ADD_ANSWER,
    authedUser,
    qid,
    answer,
  };
}
export function addQuestionToUser({ authedUser, qid }) {
  return {
    type: ADD_QUESTION_TO_USER,
    authedUser,
    qid,
  };
}
