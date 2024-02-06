const { _saveQuestionAnswer, _saveQuestion } = require("./_DATA");

describe("_saveQuestion", () => {
  it("should return true for correct parameters", async () => {
    const response = await _saveQuestion({
      optionOneText: "learn English",
      optionTwoText: "learn Arabic",
      author: "br19",
    });

    expect(response).toBeTruthy();
  });

  it("should return error for false parameters", async () => {
    const response = await _saveQuestion({
      optionOneText: "learn English",
      optionTwoText: "learn Arabic",
      author: undefined,
    }).catch((e) => e);

    expect(response).toBe(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});

describe("_saveQuestionAnswer", () => {
  it("should return true for correct parameters", async () => {
    const response = await _saveQuestionAnswer({
      authedUser: "tylermcginnis",
      qid: "8xf0y6ziyjabvozdd253nd",
      answer: "optionOne",
    });

    expect(response).toBeTruthy();
  });

  it("should return error for false parameters", async () => {
    const response = await _saveQuestionAnswer({
      authedUser: "br19",
      qid: undefined,
      answer: "optionOne",
    }).catch((e) => e);

    expect(response).toBe("Please provide authedUser, qid, and answer");
  });
});
