import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const showAnim = keyframes`
    from {
        opacity: 0;
    }

    to {
        opacity: 0.7;
    }
`;

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
  transform: translate(-25%, -65px);
  top: 0;
  color: black;
  opacity: 0.8;
  animation: ${showAnim} 0.25s linear;
  border-radius: 4px;
`;

const Title = styled.h2`
  margin: 10px;
  font-family: "Montserrat";
  font-size: 22px;
  font-weight: 300;
  color: #212121;
`;

const Skill = ({ image, title, children }) => {
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
