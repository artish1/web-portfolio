import React, { useState } from "react";

import styled from "styled-components";

import closeIcon from "../../img/close_icon.png";

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
  width: 30px;
  height: 30px;
  background-image: url(${(props) => props.image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
`;

const ImageViewModal = ({ pictures, start, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(start);
  console.log("Pictures: ", pictures);

  console.log("Current picture index: ", currentIndex);
  return (
    <Root height="800px" width="800px">
      <SlideContainer>
        <CloseButton onClick={onClose}>
          <IconButton image={closeIcon} />
        </CloseButton>
        <ImageSlide image={pictures[currentIndex]} />
      </SlideContainer>
    </Root>
  );
};

export default ImageViewModal;
