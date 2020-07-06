import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Root = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  color: ${(props) =>
    props.isTop ? props.theme.heroTitleColor : props.theme.navTextColor};
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
    margin-left: 18px;
    font-size: 18px;
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

  const handleClickScroll = (e, toId) => {
    e.preventDefault();
    document
      .getElementById(toId)
      .scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <Root isTop={isTop}>
      <Container>
        <TitleContainer>Mark Artishuk</TitleContainer>

        <LinksContainer isTop={isTop}>
          <a onClick={(e) => handleClickScroll(e, "projects")} href="#projects">
            Projects
          </a>
          <a onClick={(e) => handleClickScroll(e, "contact")} href="#contact">
            Contact
          </a>
        </LinksContainer>
      </Container>
    </Root>
  );
};

export default NavBar;
