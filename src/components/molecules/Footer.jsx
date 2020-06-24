import React from "react";

import styled from "styled-components";

const Root = styled.div`
  width: 100%;
  height: 150px;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: white;

  display: flex;
  justify-content: center;
`;

const Copyright = styled.span`
  color: ${({ theme }) => theme.buttonBackgroundColor};
  font-size: 14px;
  margin-left: 5px;
`;

const Title = styled.span`
  color: white;
  font-size: 14px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-family: "Josefin Sans", sans-serif;
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

// const ArtifactsContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

const Footer = () => {
  return (
    <Root>
      <CenteredContainer>
        {/* <ArtifactsContainer>Artifacts here</ArtifactsContainer> */}
        <div>
          <Title>Mark Artishuk</Title>
          <Copyright>&copy; 2020</Copyright>
        </div>
      </CenteredContainer>
    </Root>
  );
};

export default Footer;
