import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
`;

const Link = (props) => {
  const { url } = props;
  return <StyledLink href={url}>{url}</StyledLink>;
};

export default Link;
