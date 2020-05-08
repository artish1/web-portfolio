import React from "react";

import styled from "styled-components";

const Root = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100vw;
  height: 500px;
  background-color: ${({ theme }) => theme.wedgeColor};

  clip-path: polygon(0 23%, 100% 71%, 100% 100%, 0% 100%);
  z-index: -1;
`;

const Wedge = () => {
  return <Root></Root>;
};

export default Wedge;
