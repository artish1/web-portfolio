import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Root = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  color: ${({ theme }) => theme.primaryTextColor};
`;

const PopupContainer = styled.div`
  position: absolute;
  background-color: white;
  width: fit-content;
  min-width: 80px;
  height: fit-content;
  transform: translate(-25%, -60px);
  top: 0;
  color: black;
  border-radius: 4px;
`;

const Title = styled.h2`
  margin: 10px;
  font-family: "Montserrat";
  font-size: 22px;
  font-weight: 300;
  color: #212121;
`;

const Skill = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <Root
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {open && (
        <PopupContainer>
          <Title>{title}</Title>
        </PopupContainer>
      )}
      {children}
    </Root>
  );
};

export default Skill;
