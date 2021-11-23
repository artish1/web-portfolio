import React from "react";
import styled, { keyframes } from "styled-components";

const loadAnim = keyframes`
0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

const Root = styled.div`
  &,
  &:after {
    border-radius: 50%;
    width: 6em;
    height: 6em;
  }
  margin: 60px auto;
  font-size: 10px;
  position: ${({ fixedCenter }) => (fixedCenter ? "fixed" : "relative")};
  ${({ fixedCenter }) =>
    fixedCenter
      ? `
  left: 50%;
  `
      : ` transform: translateZ(0);`}
  text-indent: -9999em;
  border-top: 0.9em solid ${({ theme }) => theme.primaryBg}44;
  border-right: 0.9em solid ${({ theme }) => theme.primaryBg}44;
  border-bottom: 0.9em solid ${({ theme }) => theme.primaryBg}44;
  border-left: 0.9em solid ${({ theme }) => theme.primaryBg};
  -webkit-animation: ${loadAnim} 1.1s infinite linear;
  animation: ${loadAnim} 1.1s infinite linear;
  opacity: 1;

  ${({ fadeOut }) =>
    fadeOut &&
    `
    transition: opacity 0.5s ease-out;
    opacity: 0;
  `}
`;

const Loader = (props) => {
  return <Root onTransitionEnd={props.transitionFinished} {...props}></Root>;
};

export default Loader;
