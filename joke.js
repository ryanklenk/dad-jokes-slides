import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: black;
  border: none;
  font-size: 64px;
  position: fixed;
  top: 80px;
  &:hover span {
    display: none;
  }
  &:hover:before {
    content: "😀";
  }
`;

const Joke = (props) => {
  const [answerVisible, setAnswerVisible] = useState(false);
  const { question, answer } = props;
  return (
    <>
      <Button onClick={() => setAnswerVisible(!answerVisible)}>
        {answerVisible ? <span>😂</span> : <span>🙂</span>}
      </Button>
      <h1>{question}</h1>
      {answerVisible && <h1>{answer}</h1>}
    </>
  );
};

export default Joke;
