import React, { useState, useEffect } from "react";

import styled, { keyframes } from "styled-components";
import closeIconImg from "../../img/close_icon.png";
import Button from "./Button";

import ImageViewModal from "./ImageViewModal";

const showAnim = keyframes`
    from {
        opacity: 0;
        transform: translate(-70%, -50%);

    }

    to {
        opacity: 1;
        
        transform: translate(-50%, -50%);
    }
`;

const Root = styled.div`
  position: fixed;

  max-width: ${(props) => props.width || "600px"};
  height: ${(props) => props.height || "500px"};

  width: 90vw;
  // Center Modal
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${(props) => props.theme.backgroundColor};
  cursor: auto;

  box-shadow: 0px 0px 11px 4px #00000055;

  animation: ${showAnim} 0.35s;
  z-index: 5;

  box-sizing: border-box;
  border-radius: 4px;
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
  opacity: 0.4;
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 1;
  }

  z-index: 10;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.primaryTextColor};
  font-size: 30.5px;
  font-family: "Josefin Sans", sans-serif;
  letter-spacing: 4px;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.primaryTextColor};
  font-size: 16.2px;
  margin: 10px;
  align-self: flex-end;
  opacity: 0.65;
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

  overflow-x: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: inherit;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: inherit;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #444444cc;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const List = styled.ul`
  color: ${({ theme }) => theme.primaryTextColor};
`;

const ListItem = styled.li`
  margin-bottom: 5px;
  font-size: 18px;
  opacity: 0.7;
  text-align: left;
`;

const PictureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${(props) => props.imageSize}, 1fr)
  );

  justify-items: center;
  align-items: center;

  width: 100%;
  padding: 0px 10px;
  gap: 15px;
  margin-top: 10px;
  box-sizing: border-box;
`;

const PictureContainer = styled.div`
  margin-bottom: 25px;
`;

const HalfContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0px 20px;
  box-sizing: border-box;

  @media (max-width: 660px) {
    flex-direction: column;
  }
`;

const ListContainer = styled.div`
  box-sizing: border-box;
`;

const ListTitle = styled.h3`
  color: ${({ theme }) => theme.primaryTextColor};
  font-size: 22.5px;
  font-family: "Josefin Sans", sans-serif;
`;

const SomeContainer = styled.div`
  box-sizing: border-box;
`;

const Picture = styled.div`
  height: ${(props) => props.imageSize};
  width: ${(props) => props.imageSize};
  background: url(${(props) => props.image});
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  cursor: pointer;

  filter: brightness(100%);

  transition: filter 0.2s linear;
  &:hover {
    filter: brightness(150%);
  }
`;

const ProjectDetailsModal = ({
  title,
  description,
  stack,
  highlights,
  pictures,
  onClose,
  webUrl,
  codeUrl,
}) => {
  const [slideModal, setSlideModal] = useState(false);
  const [clickedIndex, setClickedIndex] = useState(0);

  useEffect(() => {
    //Close modal event
    function onModalClose(event) {
      const elem = event.target.closest(".modal");
      if (!elem) onClose();
    }

    //Register
    window.addEventListener("click", onModalClose);
    //Cleanup
    return () => {
      window.removeEventListener("click", onModalClose);
    };
  }, [onClose]);

  const imageSize = "110px";

  const handlePictureClick = (clickedIndex) => {
    setClickedIndex(clickedIndex);
    setSlideModal(true);
  };

  return (
    <Root className="modal" width="600px" height="73%">
      {slideModal && (
        <ImageViewModal
          pictures={pictures}
          start={clickedIndex}
          onClose={() => setSlideModal(false)}
        />
      )}
      <Container>
        <CloseIconButton onClick={onClose} image={closeIconImg} />
      </Container>
      <InfoContainer>
        <SomeContainer>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <HalfContainer>
            <ListContainer>
              <ListTitle>Stack</ListTitle>
              <List>
                {stack &&
                  stack.map((stackItem, key) => (
                    <ListItem key={key}>{stackItem}</ListItem>
                  ))}
              </List>
            </ListContainer>

            <ListContainer>
              <ListTitle>Highlights</ListTitle>
              <List>
                {highlights &&
                  highlights.map((highlight, key) => (
                    <ListItem key={key}>{highlight}</ListItem>
                  ))}
              </List>
            </ListContainer>
          </HalfContainer>
          <PictureContainer>
            <ListTitle>Screenshots</ListTitle>
            <PictureGrid imageSize={imageSize}>
              {pictures &&
                pictures.map((pic, key) => (
                  <Picture
                    onClick={() => handlePictureClick(key)}
                    imageSize={imageSize}
                    image={pic}
                    key={key}
                  />
                ))}
            </PictureGrid>
          </PictureContainer>
        </SomeContainer>

        <ButtonContainer>
          <Button
            secondary
            width="47%"
            height="38px"
            onClick={() => (window.location.href = webUrl)}
          >
            Visit
          </Button>
          <Button
            secondary
            width="47%"
            height="38px"
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
