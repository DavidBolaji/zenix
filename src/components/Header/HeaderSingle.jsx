import styled from "@emotion/styled";
import React from "react";
import Typewriter from "typewriter-effect";

const StyledHeaderSingle = styled.div`
  width: 90%;
  padding: 50px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  backdrop-filter: blur(7.6px);
  background: rgba(255, 255, 255, 0.447);
  -webkit-backdrop-filter: blur(1.6px);
  overflow: hidden;
  position: relative;
  z-index: 12;
  background-image: linear-gradient(#00000084, #00000096),
    url("https://res.cloudinary.com/dpi44zxlw/image/upload/v1672829701/turntable-g23b61cc4a_1920_gew6of.jpg");

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
  }

  h1 {
    color: #f79e44;
    font-size: 2rem;
  }

  @media (max-width: 810px) {
    margin-top: 100px;
    padding: 10px;
    border-radius: 5px;
  }
`;

const HeaderSingle = ({ text }) => {
  return (
    <StyledHeaderSingle>
      <h1>
        <Typewriter
          options={{
            strings: [text],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </StyledHeaderSingle>
  );
};

export default HeaderSingle;
