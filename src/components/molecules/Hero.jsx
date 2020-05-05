import React from "react";

import styled from "styled-components";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 75vh; /* if you don't want it to take up the full screen, reduce this number */
  overflow: hidden;
  background-size: cover;
  background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.05) 0%,
      rgba(0, 0, 0, 0.2) 51%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${({ theme }) => theme.heroBackground}) no-repeat center center scroll;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;

  transform: translateY(-120px);
`;

const Title = styled.span`
  font-family: "Josefin Sans", sans-serif;

  font-size: 70px;
  letter-spacing: 10px;
  font-weight: 300;
  text-transform: uppercase;

  color: ${({ theme }) => theme.heroTitleColor};
`;

const SubTitle = styled.span`
  font-size: 23px;
  margin-top: 15px;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 100;
  letter-spacing: 7px;

  text-transform: uppercase;
`;

const NameContainer = styled.div``;

const Hero = () => {
  return (
    <Root>
      <CenterContainer>
        <NameContainer>
          <Title>Mark Artishuk</Title>
        </NameContainer>
        <SubTitle>Software Engineer</SubTitle>
      </CenterContainer>
    </Root>
  );
};

export default Hero;
