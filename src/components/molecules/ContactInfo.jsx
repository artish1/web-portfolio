import React from "react";

import styled from "styled-components";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  margin: 50px 10px;

  width: 100%;
  max-width: 1000px;

  padding: 25px;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 2px #00000077;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.primaryTextColor};
  margin: 0;
  margin-bottom: 30px;
  font-family: "Montserrat";
  font-size: 35px;
  font-weight: 300;
`;

const FlexContainer = styled.div`
  display: flex;
`;

const ContactImage = styled.div`
  width: 300px;
  height: 300px;
  object-fit: cover;
  box-sizing: border-box;

  border-radius: 5px;
  background-image: url(${(props) => props.image});
  background-size: cover;

  background-position: center;


  box-shadow: 0px 0px 15px 1px #00000088;
  // border: 10px solid ${({ theme }) => theme.buttonBackgroundColor};
`;

// https://via.placeholder.com/728x90.png

const ContactInfo = () => {
  return (
    <Root>
      <Container>
        <Title>Contact Info</Title>

        <FlexContainer>
          <ContactImage
            image={
              "https://images.unsplash.com/photo-1588852823709-da0bdd700a43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            }
          />
        </FlexContainer>
      </Container>
    </Root>
  );
};

export default ContactInfo;
