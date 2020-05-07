import React from "react";

import styled from "styled-components";
import ProjectArtifact from "./ProjectArtifact";

import projectData from "../../data/projects";

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
  gap: 20px;

  @media (max-width: 1240px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1034px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 825px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 570px) {
    grid-template-columns: repeat(1, 1fr);
  }
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
        {projectData.map((proj, key) => (
          <ProjectArtifact
            title={proj.title}
            description={proj.description}
            image={proj.image}
            webUrl={proj.webUrl}
            codeUrl={proj.codeUrl}
            pictures={proj.pictures}
            stack={proj.stack}
            key={key}
          />
        ))}
      </ProjectGrid>
    </Container>
  );
};

export default Projects;
