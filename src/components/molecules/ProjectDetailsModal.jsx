import React from "react";

import styled, { keyframes } from "styled-components";
import closeIconImg from "../../img/close_icon.png";
import Button from "./Button";

const showAnim = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
`;

const Root = styled.div`
  position: fixed;

  width: ${(props) => props.width || "600px"};
  height: ${(props) => props.height || "500px"};

  // Center Modal
  top: 50%;
  left: 50%;
  margin-top: -${(props) => (props.height ? parseInt(props.height) / 2 : "250")}px;
  margin-left: -${(props) => (props.width ? parseInt(props.width) / 2 : "300")}px;

  background-color: ${(props) => props.theme.backgroundColor};

  //Overrides cursor pointer from ProjectArtifact
  cursor: auto;

  box-shadow: 0px 0px 11px 4px #00000055;

  animation: ${showAnim} 0.35s;
  z-index: 5;

  box-sizing: border-box;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
`;

const CloseIconButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;

  width: 30px;
  height: 30px;

  background-image: url(${(props) => props.image});
  background-position: center;
  background-repeat: none;
  background-size: cover;

  cursor: pointer;
  z-index: 10;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.primaryTextColor};
  font-size: 30.5px;
  font-family: "Josefin Sans", sans-serif;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.primaryTextColor};
  font-size: 16.2px;
  margin: 10px;
  align-self: flex-end;
`;

const InfoContainer = styled.div`
  position: absolute;
  top: 0px;
  padding: 20px 10px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StackContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const PictureContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const ProjectDetailsModal = ({
  title,
  description,
  stack,
  pictures,
  onClose,
  webUrl,
  codeUrl,
}) => {
  return (
    <Root width="800px" height="750px">
      <Container>
        <CloseIconButton onClick={onClose} image={closeIconImg} />
      </Container>
      <InfoContainer>
        <div>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </div>
        <ButtonContainer>
          <Button
            backgroundColor=""
            width="45%"
            height="40px"
            onClick={() => (window.location.href = webUrl)}
          >
            Visit
          </Button>
          <Button
            width="45%"
            height="40px"
            onClick={() => (window.location.href = codeUrl)}
          >
            View Code
          </Button>
        </ButtonContainer>
      </InfoContainer>
    </Root>
  );
};

export default ProjectDetailsModal;
