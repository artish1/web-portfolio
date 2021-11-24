import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Root = styled.div`
  width: ${(props) => props.width};
  overflow: hidden;
`;

const SlidingContainer = styled.div`
  transform: ${({ visible }) =>
    visible ? "translateY(0px)" : "translateY(150%)"};
  transition: all 0.6s ease-out;
`;

const SlideUp = (props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (props.skip) return;

    if (props.delay) {
      if (visible) setVisible(false);
      const stringDelay = props.delay.replace("s", "");
      const msDelay = (parseFloat(stringDelay) + 0.1) * 1000;
      setTimeout(() => setVisible(true), msDelay);
    } else {
      setVisible(true);
    }
  }, [props]);

  return (
    <Root {...props}>
      <SlidingContainer visible={visible} {...props}>
        {props.children}
      </SlidingContainer>
    </Root>
  );
};

export default SlideUp;
