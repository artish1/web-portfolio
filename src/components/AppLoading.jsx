import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "./molecules/Loader";
import { resourceLoader } from "../util/resourceLoader";

const Root = styled.div`
  transition: all 0.7s cubic-bezier(1, 0.01, 0.29, 1.01);
  background-color: ${({ theme }) => theme.accentColor};
  content: " ";
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: ${(props) => (props.isFinished ? "100%" : "0")};
  width: 100%;
  z-index: 100;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppLoading = () => {
  const [finished, setFinished] = useState(false); // Is true when outro animation for Spinner is done
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    const unsubscribe = resourceLoader.subscribe(() => {
      setLoaded(true);
    });

    return unsubscribe;
  }, []);

  return (
    <Root isFinished={finished}>
      <Loader
        fixedCenter
        fadeOut={loaded}
        transitionFinished={() => {
          setTimeout(() => setFinished(true), 200);
        }}
      />
    </Root>
  );
};

export default AppLoading;
