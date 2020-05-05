import React from "react";
import NavBar from "../molecules/NavBar";
import ScrollLine from "../molecules/ScrollLine";
import Hero from "../molecules/Hero";
import styled from "styled-components";
import Projects from "../molecules/Projects";

const Box = styled.div`
  height: 1000px;
`;

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <ScrollLine />
      <Projects />
      {/* <Box></Box> */}
    </div>
  );
};

export default Home;
