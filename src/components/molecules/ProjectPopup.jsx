import React from "react";

import styled, { keyframes } from "styled-components";

const popupAnim = keyframes`

    from {
        // transform: translate(0, -555px);
        opacity: 0;
    }

    to {
        // transform: translate(0, -425px);
        opacity: 1;
    }
`;

const Root = styled.div`
  position: absolute;
  height: 400px;
  width: 300px;

  top: 0;
  left: -50%;

  transform: translate(21.5%, -425px);

  background-color: white;

  border-radius: 4px;

  animation: ${popupAnim} 0.5s;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.backgroundColor};
`;

const Description = styled.p`
  margin: 10px 20px;
`;

const ProjectPopup = ({ title, description }) => {
  return (
    <Root>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Root>
  );
};

export default ProjectPopup;
