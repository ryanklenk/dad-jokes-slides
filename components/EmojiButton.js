import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: Transparent;
  border: none;
  font-size: 64px;
  position: fixed;
  top: 80px;
  border: none;
  outline: none;
`;

const EmojiButton = (props) => {
  const { answerVisible, onClick } = props;
  return (
    <Button onClick={onClick}>
      {answerVisible ? <span>😂</span> : <span>🙂</span>}
    </Button>
  );
};

export default EmojiButton;
