import React from "react";

import styled from "styled-components";
import SlideUp from "../SlideUp";
import Button from "./Button";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2) 65%,
      rgba(0, 0, 0, 0.4) 100%
    ),
    url(${({ theme }) => theme.heroBackground}) no-repeat center center scroll;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  transform: translateY(-80px);
`;

const Title = styled.p`
  font-family: "Josefin Sans", sans-serif;
  margin: 0;
  margin-bottom: 18px;
  height: 70px;
  font-size: 90px;
  letter-spacing: 10px;
  font-weight: 300;
  text-transform: uppercase;

  color: ${({ theme }) => theme.heroTitleColor};

  @media (max-width: 545px) {
    font-size: 50px;
  }

  @media (max-width: 375px) {
    font-size: 40px;
  }
`;

const SubTitle = styled.span`
  font-size: 23px;
  margin-top: 15px;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 100;
  letter-spacing: 7px;
  transform: scale(1.1);
  text-transform: uppercase;

  @media (max-width: 500px) {
    transform: scale(1);
  }
`;

const HeroButton = styled(Button)`
  width: 90%;
  height: 56px;
  max-width: 450px;
`;

const Hero = () => {
  const handleClick = () => {
    document
      .getElementById("projects")
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <Root>
      <CenterContainer>
        <SlideUp>
          <Title>Mark Artishuk</Title>
        </SlideUp>
        <SlideUp delay="0.2s">
          <SubTitle>Software Engineer</SubTitle>
        </SlideUp>

        <SlideUp width="100%" delay="0.4s">
          <HeroButton onClick={handleClick} margin="25px 0px 0px 0px">
            View my work
          </HeroButton>
        </SlideUp>
      </CenterContainer>
    </Root>
  );
};

export default Hero;
