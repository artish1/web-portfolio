import React, { useState } from "react";

import styled from "styled-components";

import closeIcon from "../../img/close_icon.png";

import leftArrow from "../../img/left_arrow.png";
import rightArrow from "../../img/right_arrow.png";

const Root = styled.div`
  position: fixed;

  width: ${(props) => props.width || "600px"};
  height: ${(props) => props.height || "600px"};

  max-width: 1000px;
  max-height: 1000px;

  // Center Modal
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: ${(props) => props.theme.backgroundColor};

  box-shadow: 0px 0px 11px 4px #00000055;
  z-index: 500;

  box-sizing: border-box;
  border-radius: 4px;
`;

const ImageSlide = styled.img`
  padding: 15px;
  width: 100%;
  object-fit: contain;
  box-sizing: border-box;
`;

const SlideContainer = styled.div`
  position: relative;
  padding: 15px;
  height: 100%;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
`;

const IconButton = styled.div`
  width: ${(props) => props.width || "30px"};
  height: ${(props) => props.height || "30px"};
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;

  opacity: 0.6;
  transition: opacity 0.2s linear;
  &:hover {
    opacity: 1;
  }
`;

const ArrowButton = styled.div`
  position: absolute;

  ${(props) => {
    return props.left
      ? `
    //Left
    left: 30px;
    `
      : `
    //Right
    right: 30px;
    `;
  }}

  top: 50%;
  transform: translateY(-50%);

  opacity: 0.8;
  transition: opacity 0.2s linear;
  &:hover {
    opacity: 1;
  }
`;

const ImageViewModal = ({ pictures, start, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(start);

  const handleNext = () => {
    let next = currentIndex + 1;
    if (next >= pictures.length) {
      next = 0;
    }

    setCurrentIndex(next);
  };

  const handlePrevious = () => {
    let next = currentIndex - 1;
    if (next < 0) {
      next = pictures.length - 1;
    }

    setCurrentIndex(next);
  };

  return (
    <Root height="82vh" width="94vw">
      <SlideContainer>
        <CloseButton onClick={onClose}>
          <IconButton image={closeIcon} />
        </CloseButton>
        <ArrowButton left onClick={handlePrevious}>
          <IconButton width="50px" height="50px" image={leftArrow} />
        </ArrowButton>

        <ArrowButton right onClick={handleNext}>
          <IconButton width="50px" height="50px" image={rightArrow} />
        </ArrowButton>

        <ImageSlide
          src={pictures[currentIndex]}
          image={pictures[currentIndex]}
        />
      </SlideContainer>
    </Root>
  );
};

export default ImageViewModal;
