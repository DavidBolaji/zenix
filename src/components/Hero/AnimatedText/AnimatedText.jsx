import React, { Fragment } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const StyledText = styled.h1`
  margin: auto;
  margin-top: 10px;
  font-size: 3rem;
  font-weight: 500;
  color: ${(props) => props.theme.text};
`;

const StyledPara = styled.p`
  font-size: 1rem;
  line-height: 30px;
  font-weight: 500;
  margin-top: 1rem;
  margin-bottom: 2rem;
  max-width: 450px;
  font-style: italic;
  /* color: ${(props) => props.theme.text}; */
`;

const texts = [
  <Fragment key="text_1">
    <StyledText className="white">Hi, welcome to Zenix.</StyledText>
    <StyledText className="white">Every Day Things are Colorful</StyledText>
    <StyledPara className="gray">
      🦋The knower of the mystery of sound knows the mystery of the whole
      universe, zenix⭐⭐⭐⭐⭐
    </StyledPara>
  </Fragment>,
  <Fragment key="text_1">
    <StyledText className="white">ABOUT ME</StyledText>
    <StyledPara className="gray" style={{ color: "#fff" }}>
      I have proceeded my dream to be a developer as it has been my lifelong
      ambition. I am a talented Fullstack developer. since graduation I have had
      the opportunity to enhance my expertise by collaborating with different
      companies and by creating useful content for both business and customer
      use. I am naturally persevered, self-confident, quietly curios, innovative
      and constantly challenging my skills as i am determined to bring change to
      the world.
    </StyledPara>
  </Fragment>,
];

function AnimatedText() {
  const [counter, setCounter] = React.useState(1);
  const [hover, setHover] = React.useState(false);

  const hoverOn = () => {
    setHover((prev) => !prev);
  };

  const hoverOff = () => {
    setHover((prev) => !prev);
  };

  React.useEffect(() => {
    if (!hover) {
      const timer = setTimeout(() => {
        if (counter === texts.length) {
          setCounter(1);
        } else {
          setCounter((prev) => prev + 1);
        }
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [counter, hover]);

  return (
    <motion.h1
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
      key={counter}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {texts[counter - 1]}
    </motion.h1>
  );
}

export const ImageRegionText = () => (
  <>
    <AnimatedText />
  </>
);
AnimatedText.propTypes = {};

export default AnimatedText;
