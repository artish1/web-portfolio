import React from "react";

import styled from "styled-components";

import GithubIcon from "../svgs/GitIcon";
import LinkedinIcon from "../svgs/LinkedinIcon";
import CodepenIcon from "../svgs/CodepenIcon";

import facePic from "../../img/face_pic.jpg";
import Wedge from "./Wedge";

const Root = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  margin: 50px 10px;

  width: 90%;
  max-width: ${({ theme }) => theme.maxBodyWidth};

  padding: 25px;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 2px #00000077;
  background-color: ${({ theme }) => theme.backgroundColor};

  @media (max-width: 600px) {
    padding: 10px;
    margin: 50px 20px;
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.primaryTextColor};
  margin: 0;
  margin-bottom: 30px;
  font-family: "Montserrat";
  font-size: 35px;
  font-weight: 300;
`;

const ContactImage = styled.div`
  width: 200px;
  height: 200px;
  min-width: 200px;
  object-fit: contain;
  box-sizing: border-box;

  border-radius: 5px;
  background-image: url(${(props) => props.image});
  background-size: cover;

  background-position: center;
  margin-left: 15px;
  box-shadow: 0px 0px 15px 1px #00000088;
`;

const CategoryTitle = styled.span`
  display: block;
  color: #ffffff66;
  font-family: "Josefin Sans", sans-serif;
  margin-left: 25px;
  font-size: 20px;
  margin-bottom: 5px;
  margin-top: 10px;
`;

const CategoryValue = styled.span`
  color: white;
  font-family: "Montserrat";
  margin-left: 10px;
  opacity: 0.835;
`;

const AboutDescription = styled.p`
  color: white;
  font-zie: 17px;
  opacity: 0.5;
  font-family: "Montserrat";
  margin: 20px 30px;
  font-style: oblique;
`;

const IconContainer = styled.a`
  width: 45px;
  height: 45px;
  color: ${({ theme }) => theme.buttonBackgroundColor};
  margin-bottom: 20px;

  transition: color 0.25s linear;
  &:hover {
    color: white;
  }
`;

const SomeContainer = styled.div`
  display: flex;
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 350px;
  width: 100%;
`;

const InfoContainer = styled.div`
  margin: 10px 25px;

  @media (max-width: 600px) {
    margin: 10px;
  }
`;

const SeperateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  height: 100%;
`;

const ContactInfo = () => {
  return (
    <Root id="contact">
      <Wedge />
      <Container>
        <Title>About Me</Title>

        <SomeContainer>
          <ContactImage image={facePic} />
          <InfoContainer>
            <SeperateContainer>
              <div>
                <CategoryTitle>
                  Name:
                  <CategoryValue>Mark Artishuk</CategoryValue>
                </CategoryTitle>
                <CategoryTitle>
                  E-mail: <CategoryValue>markyshuk@gmail.com</CategoryValue>
                </CategoryTitle>

                <AboutDescription>
                  "Transforming ideas into a reality is a skill we all long to
                  have. It's why I became a software engineer in the first
                  place. I was born (and will always be) a problem solver, no
                  matter the frustration that comes with being one. All I really
                  want is to be challenged and succeed, so that I can better
                  myself with the newfound knowledge."
                </AboutDescription>
              </div>

              <IconsContainer>
                <IconContainer href="https://github.com/artish1">
                  <GithubIcon />
                </IconContainer>
                <IconContainer href="https://www.linkedin.com/in/mark-artishuk/">
                  <LinkedinIcon />
                </IconContainer>
                <IconContainer href="https://codepen.io/Artishy/">
                  <CodepenIcon />
                </IconContainer>
              </IconsContainer>
            </SeperateContainer>
          </InfoContainer>
        </SomeContainer>
      </Container>
    </Root>
  );
};

export default ContactInfo;
