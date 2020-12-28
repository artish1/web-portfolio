import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const slideUpAnim = keyframes`
    from {
        transform: translateY(200px);
    }

    to {
        transform: translateY(0px);
    }
`;

const Root = styled.div`
  width: ${(props) => props.width};
  overflow: hidden;
`;

const SlidingContainer = styled.div`
  animation: ${slideUpAnim} 0.6s ease-out;
  animation-delay: ${(props) => props.delay || "0s"};
  opacity: ${(props) => (props.visible ? "100%" : "0%")};
`;

const SlideUp = (props) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (props.delay) {
      setVisible(false);
      const stringDelay = props.delay.replace("s", "");
      const msDelay = (parseFloat(stringDelay) + 0.1) * 1000;
      setTimeout(() => setVisible(true), msDelay);
    }
  }, [props.delay]);

  return (
    <Root width={props.width}>
      <SlidingContainer visible={visible} {...props}>
        {props.children}
      </SlidingContainer>
    </Root>
  );
};

export default SlideUp;
