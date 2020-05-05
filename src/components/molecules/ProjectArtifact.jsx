import React, { useState } from "react";
import styled from "styled-components";

import ProjectPopup from "./ProjectPopup";

const Root = styled.div`
  position: relative;

  box-sizing: border-box;

  width: 220px;
  height: 220px;

  cursor: pointer;
`;

const ImageContainer = styled.div`
  background: url(${(props) => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;

  filter: grayscale(100%);

  transition: filter 0.2s linear;
  &:hover {
    filter: grayscale(0%);
  }
`;

const ProjectArtifact = ({ image, title, description }) => {
  const [popup, setPopup] = useState(false);
  return (
    <Root>
      {popup && <ProjectPopup title={title} description={description} />}
      <ImageContainer
        onMouseEnter={() => setPopup(true)}
        onMouseLeave={() => setPopup(false)}
        image={image}
      />
    </Root>
  );
};

export default ProjectArtifact;
