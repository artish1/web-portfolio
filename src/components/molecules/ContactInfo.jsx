import React from "react";

import styled from "styled-components";

import GithubIcon from "../svgs/GitIcon";
import LinkedinIcon from "../svgs/LinkedinIcon";
import CodepenIcon from "../svgs/CodepenIcon";

import facePic from "../../img/face_pic.jpg";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  margin: 50px 10px;

  width: 100%;
  max-width: 1000px;

  padding: 25px;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 2px #00000077;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.primaryTextColor};
  margin: 0;
  margin-bottom: 30px;
  font-family: "Montserrat";
  font-size: 35px;
  font-weight: 300;
`;

const FlexContainer = styled.div`
  display: flex;
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

  box-shadow: 0px 0px 15px 1px #00000088;
`;

const CategoryTitle = styled.span`
  display: block;
  color: #ffffff66;
  margin-left: 25px;
  font-size: 20px;
`;

const CategoryValue = styled.span`
  color: white;
  margin-left: 10px;
`;

const AboutDescription = styled.p`
  color: white;
  font-zie: 17px;
  opacity: 0.5;
  font-family: "Montserrat";
  margin: 20px 30px;
`;

const IconContainer = styled.a`
  width: 45px;
  height: 45px;
  color: #ff9f58;
  margin-bottom: 20px;

  &:hover {
    color: white;
  }
`;

const IconsContainer = styled(FlexContainer)`
  justify-content: space-around;
`;

const InfoContainer = styled.div`
  margin: 10px 25px;
`;

// https://via.placeholder.com/728x90.png

const SeperateContainer = styled(FlexContainer)`
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
`;

const ContactInfo = () => {
  return (
    <Root>
      <Container>
        <Title>About Me</Title>

        <FlexContainer>
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
                  "Transforming ideas into a reality is something we all long to
                  have. It's something I love to do. All I really want is to
                  learn new things and be challenged, so that I can better
                  myself with skill and value.""
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
        </FlexContainer>
      </Container>
    </Root>
  );
};

export default ContactInfo;
