import React, { useState } from "react";
import EmojiButton from "./EmojiButton";
import styled from "styled-components";

const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Joke = (props) => {
  const [answerVisible, setAnswerVisible] = useState(false);
  const { question, answer, image } = props;
  return (
    <>
      <EmojiButton
        onClick={() => setAnswerVisible(!answerVisible)}
        answerVisible={answerVisible}
      />
      <h1>{question}</h1>
      {answerVisible && (
        <>
          <h1>{answer}</h1>
          {image && (
            <ImageWrapper>
              <img src={image} />
            </ImageWrapper>
          )}
        </>
      )}
    </>
  );
};

export default Joke;
