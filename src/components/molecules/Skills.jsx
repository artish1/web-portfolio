import React from "react";

import styled from "styled-components";

const Root = styled.div``;

const Title = styled.h2`
  color: ${({ theme }) => theme.primaryTextColor};
  margin: 0;
  margin-bottom: 50px;
  font-family: "Montserrat";
  font-size: 35px;
  font-weight: 300;
`;

const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  justify-items: center;
  gap: 15px;
  width: 100%;
  max-width: 700px;

  padding: 0px 20px;
  box-sizing: border-box;
  margin-bottom: 50px;
`;

const Skill = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
`;

const Skills = () => {
  return (
    <Root>
      <Title>Skills</Title>
      <CenterContainer>
        <SkillsGrid>
          <Skill />
          <Skill />
          <Skill />
        </SkillsGrid>
      </CenterContainer>
    </Root>
  );
};

export default Skills;
