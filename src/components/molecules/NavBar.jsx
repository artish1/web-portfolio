import React from "react";
import styled from "styled-components";

import Link from "react-router-dom";

const Root = styled.div`
  margin: 0px 35px;
`;

const TitleContainer = styled.div`
  font-family: "Quicksand", sans-serif;
  font-size: 23px;
`;

const LinksContainer = styled.nav`
  display: flex;
`;

const NavBar = () => {
  return (
    <Root>
      <TitleContainer>Mark Artishuk</TitleContainer>

      <LinksContainer>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </LinksContainer>
    </Root>
  );
};

export default NavBar;
