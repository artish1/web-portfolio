import React from "react";

import styled from "styled-components";
import Values from "values.js";

const Container = styled.button`
  outline: none;
  border: none;
  text-decoration: none;

  background-color: ${(props) =>
    props.backgroundColor || props.theme.buttonBackgroundColor};
  color: ${(props) => props.color || props.theme.buttonTextColor};


  font-size: 17.5px;
  font-family: "Montserrat";
  font-weight: 300;

  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "50px"};

  border-radius: ${(props) => props.borderRadius || "3px"};
  cursor: pointer;

  transition: background-color linear 0.08s;
  &:hover {
    background-color: ${(props) => {
      const val = new Values(
        props.backgroundColor || props.theme.buttonBackgroundColor
      ).shade(23);
      return `#${val.hex}`;
    }};
  }
`;

const SecondaryButton = styled(Container)`
  background-color: rgb(58 49 50);
  color: white;
  &:hover {
    background-color: rgb(33 29 30);
  }
`;

const Button = (props) => {
  if(props.secondary) return <SecondaryButton {...props}>{props.children}</SecondaryButton>

  return <Container {...props}>{props.children}</Container>;
};

export default Button;
