import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Root = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  color: ${(props) =>
    props.isTop ? props.theme.heroTitleColor : props.theme.navTextColor};
  // background-color: ${({ theme }) => theme.navBackgroundColor};
  background-color: ${(props) =>
    props.isTop ? "#00000000" : props.theme.navBackgroundColor};
  z-index: 100;
  transition: background-color 0.35s;


`;

const Container = styled.div`
  margin: 0px 35px;

  display: flex;
  justify-content: space-between;

  align-items: baseline;
  padding: 20px 15px;
`;

const TitleContainer = styled.div`
  font-family: "Quicksand", sans-serif;
  font-size: 23px;
`;

const LinksContainer = styled.nav`
  display: flex;

  a {
    text-decoration: none;
    color: ${(props) =>
      props.isTop ? props.theme.heroTitleColor : props.theme.navTextColor};
    margin-left: 15px;
    font-size: 16.5px;
  }
`;

const NavBar = () => {
  const [isTop, setIsTop] = useState(true);
  const handleScroll = () => {
    if (window.pageYOffset < 350) {
      setIsTop(true);
    } else setIsTop(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Root isTop={isTop}>
      <Container>
        <TitleContainer>Mark Artishuk</TitleContainer>

        <LinksContainer isTop={isTop}>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </LinksContainer>
      </Container>
    </Root>
  );
};

export default NavBar;
