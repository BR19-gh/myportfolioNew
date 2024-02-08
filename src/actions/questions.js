import { _saveQuestionAnswer, _saveQuestion } from "../../_DATA";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { addAnswer, addQuestionToUser } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(question) {
  return (dispatch) => {
    dispatch(showLoading());

    return _saveQuestion(question)
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(
          addQuestionToUser({ qid: question.id, authedUser: question.author })
        );
      })
      .then(() => {
        dispatch(hideLoading());
        localStorage.removeItem("handleAnswer");
      });
  };
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function answerQuestion({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    qid,
    authedUser,
    answer,
  };
}

export function handleAnswerQuestion(info) {
  return (dispatch) => {
    dispatch(showLoading());
    return _saveQuestionAnswer(info)
      .then(() => {
        dispatch(answerQuestion(info));
        dispatch(addAnswer(info));
      })
      .then(() => {
        dispatch(hideLoading());
        localStorage.removeItem("handleAnswer");
      })
      .catch((e) => {
        console.warn("Error in handleAnswerQuestion: ", e);
        alert("There was an error answering the question. Try again.");
      })
      .catch((e) => {
        console.error("Error in dispatching answerQuestion: ", e);
      });
  };
}
