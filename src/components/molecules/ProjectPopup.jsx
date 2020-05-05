import React from "react";

import styled, { keyframes } from "styled-components";

const popupAnim = keyframes`

    from {
        transform: translate(-50px, -555px);
        opacity: 0;
    }

    to {
        transform: translate(-50px, -425px);
        opacity: 1;
    }
`;

const Root = styled.div`
  position: absolute;
  top: 0;

  transform: translate(-50px, -425px);

  background-color: white;

  height: 400px;
  width: 300px;

  border-radius: 4px;

  animation: ${popupAnim} 0.5s;
`;

const ProjectPopup = ({ title, description }) => {
  return <Root></Root>;
};

export default ProjectPopup;
