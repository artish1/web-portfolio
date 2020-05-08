import React from "react";

import styled from "styled-components";
import Button from "./Button";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 85vh; /* if you don't want it to take up the full screen, reduce this number */
  overflow: hidden;

  background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0.07) 0%,
      rgba(0, 0, 0, 0.2) 51%,
      rgba(0, 0, 0, 0.55) 100%
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

const Title = styled.span`
  font-family: "Josefin Sans", sans-serif;

  font-size: 70px;
  letter-spacing: 10px;
  font-weight: 300;
  text-transform: uppercase;

  color: ${({ theme }) => theme.heroTitleColor};

  @media (max-width: 450px) {
    font-size: 50px;
  }
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

/*
 primary: #c07c84,
  secondary: #6c5b7b,
  accent: #fffcf1,
  texts: #05386b
*/

const Hero = () => {
  return (
    <Root>
      <CenterContainer>
        <NameContainer>
          <Title>Mark Artishuk</Title>
        </NameContainer>
        <SubTitle>Software Engineer</SubTitle>

        <Button
          backgroundColor="#05386b"
          // color="black"
          margin="25px 0px 0px 0px"
          width="350px"
        >
          Hire me
        </Button>
      </CenterContainer>
    </Root>
  );
};

export default Hero;
