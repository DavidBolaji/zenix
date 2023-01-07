import { Avatar, Button } from "antd";
import React from "react";
import styled from "@emotion/styled";
import { FaFacebookF } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText/AnimatedText";
// import Typewriter from "typewriter-effect";

const HeroStyled = styled.div`
  justify-content: space-between;
  padding: 1.1rem 5rem 0rem 5rem;
  /* background-color: #25262a; */
  background-color: ${(props) => props.theme.bg};
  /* transform: rotate(2deg); */
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80vh;
  /* padding-bottom: 70px; */
  padding-left: 80px;
  padding-right: 80px;
  position: relative;
  width: 90%;
  margin: auto;
  background: rgba(255, 255, 255, 0.26);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.6px);
  -webkit-backdrop-filter: blur(7.6px);
  overflow: hidden;

  &:after {
    content: "";
    /* width: 80%;
    height: 10px;
    position: absolute; */
    bottom: 0;
    /* background-color: #ff00002c; */
    /* width: 90vw;
    margin: auto; */
    /* transform: rotate(-3deg); */
    border-radius: 16px;
    height: 90vh;
    left: 0;
    /* border-bottom: 1px solid ${(props) => props.theme.textbg}; */
  }

  @media (max-width: 810px) {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 120px;
    flex-direction: column;
    text-align: center;
    height: auto;
  }
`;

export const StyledLink = styled.a`
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  text-decoration: underline;
  cursor: pointer;
  margin-right: 20px;

  button {
    background: transparent;
    border: 2px solid ${(props) => props.theme.textbg};
    color: #fff;
    width: 120px;
    border-radius: 0;
    height: 40px;
  }

  button.block {
    background-color: ${(props) => props.theme.textbg};
    color: #fff;
    /* font-weight: 700; */
    text-transform: uppercase;
    border-radius: 50px;
    border: 1px solid #f7bf48;
  }

  button.block:hover {
    color: #fff;
    background-color: transparent;
  }
`;

const StyledButton2 = styled.button`
  background-color: ${(props) => props.theme.textbg};
  color: #fff;
`;

export default function Hero() {
  const [hover, setHover] = React.useState(false);

  const handleHover = () => {
    setHover((prev) => !prev);
  };

  return (
    <header>
      {/* <NavBar /> */}
      <HeroStyled id="#home">
        <motion.HeroLeftStyled
          initial={{ y: -1500 }}
          animate={{ y: 0 }}
          exit={{}}
        >
          <StyledButton2>
            {/* <Typewriter
              options={{
                  strings: ["Full-Stack Developer"],
                  autoStart: true,
                  loop: true,
                }}
            /> */}
          </StyledButton2>
          {/* animate__animated animate__rubberBand animate__delay-2s */}

          {/* <Transition timeline={home} /> */}
          <AnimatedText />
          <div>
            <StyledLink
              href="https://wa.me/+2348107483900"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              className={`animate__animated animate__flash animate__slow ${
                !hover ? "animate__infinite infinite" : ""
              } green`}
            >
              <Button className="block">Join our</Button>
            </StyledLink>
            <StyledLink
              href="https://wa.me/+2348107483900"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              className={`animate__animated animate__flash animate__slow ${
                !hover ? "animate__infinite infinite" : ""
              } green`}
            >
              <Avatar
                style={{ backgroundColor: "#f7bf48" }}
                src={<FaFacebookF />}
              />
            </StyledLink>
            <StyledLink
              href="https://wa.me/+2348107483900"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              className={`animate__animated animate__flash animate__slow  ${
                !hover ? "animate__infinite infinite" : ""
              } green`}
            >
              <Avatar
                style={{ backgroundColor: "#f7bf48" }}
                src={<ImLinkedin2 />}
              />
            </StyledLink>
          </div>
        </motion.HeroLeftStyled>
        <motion.div initial={{ y: 1500 }} animate={{ y: 0 }} exit={{}}>
          <img
            src={
              "https://res.cloudinary.com/dpi44zxlw/image/upload/v1672599603/zen-removebg-preview_nsfrqv.png"
            }
            alt={"zenix"}
            width={400}
          />
        </motion.div>
        {/* <Image src="" width={463} height={513} alt="david" /> */}
      </HeroStyled>
    </header>
  );
}
