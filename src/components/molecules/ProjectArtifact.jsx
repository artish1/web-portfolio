import React from "react";
import styled from "styled-components";

const Root = styled.div`
//   background: url(${(props) => props.image});
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;

  box-sizing: border-box;

  width: 200px;
  height: 200px;

  cursor: pointer;

//   filter: grayscale(100%);

//   transition: filter 0.2s linear;
//   &:hover {
//     filter: grayscale(0%);
//   }
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

const ProjectArtifact = ({ image, title }) => {
  return (
    <Root>
      <ImageContainer image={image} />
    </Root>
  );
};

export default ProjectArtifact;
