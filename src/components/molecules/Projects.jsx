import React from "react";

import styled from "styled-components";
import ProjectArtifact from "./ProjectArtifact";

import imgPortfolio from "../../img/project_portfolio.jpg";
import imgTrash from "../../img/project_trash.jpg";
import imgGrace from "../../img/project_grace.jpg";
import imgWord from "../../img/project_word.jpg";
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

const portfolioPics = [img2, imgPortfolio, imgGrace, imgWord];

const Projects = () => {
  return (
    <Container>
      <Title>Projects</Title>
      <ProjectGrid>
        <ProjectArtifact
          title="Portfolio Website"
          description="My personal portfolio website (This website)."
          image={imgPortfolio}
          webUrl="https://www.google.com"
          codeUrl="https://www.youtube.com"
          pictures={portfolioPics}
        />
        <ProjectArtifact
          title="The Trash Panda"
          description="A PWA (Progressive Web App) that helps users know how and where to recycle through either category selection or image recognition."
          image={imgTrash}
        />
        <ProjectArtifact
          title="GTCAG"
          description="An informative church website that also handles donations, contact forms, event management, and more."
          image={imgGrace}
        />
        <ProjectArtifact
          title="Word Definitions"
          description="A simple word look-up application that gives definitions, image references, and more."
          image={imgWord}
        />

        <ProjectArtifact image={img2} />
        <ProjectArtifact image={img2} />
        <ProjectArtifact image={img2} />
        <ProjectArtifact image={img2} />
        <ProjectArtifact image={img2} />
      </ProjectGrid>
    </Container>
  );
};

export default Projects;