import React from "react";
import styled from "styled-components";
import Skill from "./Skill";

// Icons
import HtmlIcon from "../../components/svgs/HtmlIcon";
import CssIcon from "../svgs/CssIcon";
import JavascriptIcon from "../svgs/JavascriptIcon";
import NodejsIcon from "../svgs/NodejsIcon";
import JavaIcon from "../svgs/JavaIcon";
import PythonIcon from "../svgs/PythonIcon";
import ReactIcon from "../svgs/ReactIcon";
import ReduxIcon from "../svgs/ReduxIcon";
import GitIcon from "../svgs/GitIcon";

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.primaryTextColor};
  // color: #efa48b;
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
  width: 90%;
  max-width: ${({ theme }) => theme.maxBodyWidth};
  margin: 0px 10px;

  padding: 25px;
  box-sizing: border-box;
  box-shadow: 0px 0px 8px 3px #00000055;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  justify-items: center;
  gap: 25px;
  width: 100%;
  max-width: 600px;

  padding: 0px 20px;
  box-sizing: border-box;
  margin-bottom: 50px;
`;

const Skills = () => {
  return (
    <Root>
      <CenterContainer>
        <Title>Skills</Title>
        <SkillsGrid>
          <Skill title="Html5">
            <HtmlIcon />
          </Skill>
          <Skill title="CSS3">
            <CssIcon />
          </Skill>
          <Skill title="Javascript">
            <JavascriptIcon />
          </Skill>
          <Skill title="React">
            <ReactIcon />
          </Skill>
          <Skill title="Redux">
            <ReduxIcon />
          </Skill>
          <Skill title="NodeJS">
            <NodejsIcon />
          </Skill>
          <Skill title="Java">
            <JavaIcon />
          </Skill>
          <Skill title="Python">
            <PythonIcon />
          </Skill>
          <Skill title="Git">
            <GitIcon />
          </Skill>
        </SkillsGrid>
      </CenterContainer>
    </Root>
  );
};

export default Skills;
