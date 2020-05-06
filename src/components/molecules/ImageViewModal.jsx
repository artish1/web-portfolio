import React from "react";

import styled from "styled-components";

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
  z-index: 7;

  box-sizing: border-box;
  border-radius: 4px;
`;

const ImageSlide = styled.div``;

const IconButton = styled.div``;

const ImageViewModal = () => {
  return <Root image="800px" width="800px"></Root>;
};

export default ImageViewModal;
