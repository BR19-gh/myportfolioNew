/* eslint-disable react/prop-types */
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const NewQuestion = (props) => {
  const navigate = useNavigate();

  const firstOptionRef = useRef("");
  const secondOptionRef = useRef("");

  const handleSubmit = () => {
    localStorage.setItem("handleAnswer", true);
    if (
      firstOptionRef.current.value === "" ||
      secondOptionRef.current.value === ""
    ) {
      return alert("Please fill in all fields");
    }
    const question = {
      optionOneText: firstOptionRef.current.value,
      optionTwoText: secondOptionRef.current.value,
      author: props.authedUser,
    };
    props.dispatch(handleAddQuestion(question));
    navigate("/");
    firstOptionRef.current.value = "";
    secondOptionRef.current.value = "";
  };
  return (
    <Form className="text-center">
      <h2>Would You Rathar</h2>
      <p>Create Your Own Poll</p>
      <Form.Group className="mb-3" controlId="formFirstOption">
        <Form.Label data-testid="firstOptionLabel">First Option</Form.Label>
        <Form.Control
          data-testid="firstOption"
          ref={firstOptionRef}
          type="text"
          placeholder="First Option"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formFirstOption">
        <Form.Label data-testid="secondOptionLabel">Second Option</Form.Label>
        <Form.Control
          data-testid="secondOption"
          ref={secondOptionRef}
          type="text"
          placeholder="Second Option"
        />
      </Form.Group>

      <Button
        data-testid="submitQuestion"
        variant="primary"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Form>
  );
};

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};

export default connect(mapStateToProps)(NewQuestion);
