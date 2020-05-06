import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Root = styled.div`
  color: ${(props) => props.theme.navTextColor};
  background-color: ${({ theme }) => theme.navBackgroundColor};
`;

const Container = styled.div`
  margin: 0px 35px;

  display: flex;
  justify-content: space-between;

  align-items: baseline;
  padding: 15px;
`;

const TitleContainer = styled.div`
  font-family: "Quicksand", sans-serif;
  font-size: 23px;
`;

const LinksContainer = styled.nav`
  display: flex;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.navTextColor};
    margin-left: 15px;
    font-size: 16.5px;
  }
`;

const NavBar = () => {
  return (
    <Root>
      <Container>
        <TitleContainer>Mark Artishuk</TitleContainer>

        <LinksContainer>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </LinksContainer>
      </Container>
    </Root>
  );
};

export default NavBar;
