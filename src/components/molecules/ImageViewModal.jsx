import React, { useState } from "react";

import styled from "styled-components";

import closeIcon from "../../img/close_icon.png";

import leftArrow from "../../img/left_arrow.png";
import rightArrow from "../../img/right_arrow.png";

const Root = styled.div`
  position: fixed;

  width: ${(props) => props.width || "600px"};
  height: ${(props) => props.height || "600px"};

  // Center Modal
  top: 50%;
  left: 50%;
  margin-top: -${(props) => (props.height ? parseInt(props.height) / 2 : "250")}px;
  margin-left: -${(props) => (props.width ? parseInt(props.width) / 2 : "300")}px;

  background-color: ${(props) => props.theme.backgroundColor};

  box-shadow: 0px 0px 11px 4px #00000055;
  z-index: 12;

  box-sizing: border-box;
  border-radius: 4px;
`;

const ImageSlide = styled.div`
  background: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 15px;
  height: 100%;

  box-sizing: border-box;
`;

const SlideContainer = styled.div`
  position: relative;
  padding: 15px;
  height: 100%;
  box-sizing: border-box;
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
    left: 20px;
    `
      : `
    //Right
    right: 20px;
    `;
  }}

  top: ${(props) => parseInt(props.height) / 2}px;


  opacity: 0.6;
  transition: opacity 0.2s linear;
  &:hover {
    opacity: 1;
  }
`;

const ImageViewModal = ({ pictures, start, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(start);
  console.log("Pictures: ", pictures);

  console.log("Current picture index: ", currentIndex);

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
  const height = "800px";
  const width = "800px";
  return (
    <Root height="800px" width="800px">
      <SlideContainer>
        <CloseButton onClick={onClose}>
          <IconButton image={closeIcon} />
        </CloseButton>
        <ArrowButton height={height} left onClick={handlePrevious}>
          <IconButton image={leftArrow} />
        </ArrowButton>

        <ArrowButton height={height} right onClick={handleNext}>
          <IconButton image={rightArrow} />
        </ArrowButton>

        <ImageSlide image={pictures[currentIndex]} />
      </SlideContainer>
    </Root>
  );
};

export default ImageViewModal;
