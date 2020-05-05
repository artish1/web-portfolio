import React from "react";

import styled from "styled-components";
import ProjectArtifact from "./ProjectArtifact";

import img1 from "../../img/image1.jpg";
import img2 from "../../img/image2.jpg";

const Container = styled.div`
  margin: 125px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  //   gap: 25px;
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 50px;
  font-family: "Montserrat";
  font-size: 35px;
  font-weight: 300;
  color: ${({ theme }) => theme.primaryTextColor};
`;

const Projects = () => {
  return (
    <Container>
      <Title>Projects</Title>
      <ProjectGrid>
        <ProjectArtifact image={img1} />
        <ProjectArtifact image={img2} />
        <ProjectArtifact image={img2} />
        <ProjectArtifact image={img2} />
        <ProjectArtifact image={img1} />
        <ProjectArtifact image={img1} />
        <ProjectArtifact image={img1} />
        <ProjectArtifact image={img2} />
        <ProjectArtifact image={img1} />
      </ProjectGrid>
    </Container>
  );
};

export default Projects;
