import React from "react";
import NavBar from "../molecules/NavBar";
import ScrollLine from "../molecules/ScrollLine";
import Hero from "../molecules/Hero";
import styled from "styled-components";
import Projects from "../molecules/Projects";
import ContactInfo from "../molecules/ContactInfo";
import Footer from "../molecules/Footer";
import Skills from "../molecules/Skills";

const Box = styled.div`
  background-color: #ffcba4;
  height: 400px;
`;

const Root = styled.div`
  overflow: hidden;
`;

const Home = () => {
  return (
    <Root>
      <NavBar />
      <Hero />
      <ScrollLine />
      <Projects />
      <Skills />
      <ContactInfo />
      <Box></Box>
      <Footer />
    </Root>
  );
};

export default Home;
