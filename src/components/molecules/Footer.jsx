import React from "react";

import styled from "styled-components";

const Root = styled.div`
  width: 100%;
  height: 350px;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: white;
`;

const Footer = () => {
  return <Root></Root>;
};

export default Footer;
