import React from "react";

import styled, { keyframes } from "styled-components";

const LineContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 50px;
`;

const LineWrapper = styled.div`
  height: 70px;
  width: 1px;
  align-self: center;
  overflow: hidden;
  position: absolute;
  top: -35px;
`;

const ScrollAnimation = keyframes`
    from {
    transform: translateY(-100%);
  }

  to {
    transform: translateY(110%);
  }
`;

const Line = styled.div`
  background-color: ${({ theme }) => theme.scrollLineColor};
  width: 1px;
  height: 70px;
  animation: ${ScrollAnimation} 2s infinite;
`;

const ScrollLine = () => {
  return (
    <LineContainer>
      <LineWrapper>
        <Line />
      </LineWrapper>
    </LineContainer>
  );
};

export default ScrollLine;
