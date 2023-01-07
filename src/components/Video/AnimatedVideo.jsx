import React, { Fragment } from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const StyledVideoCard = styled.div`
  max-width: 500px;
  /* width: 300px; */
  /* border: 1px solid #ededed;
  background-color: #fff; */
  height: 400px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.3);

  .player {
    width: 100%;
    height: 100%;

    video {
      height: 100% !important;
      /* margin: auto; */
      object-fit: cover;
    }
  }

  .text {
    padding: 10px;
  }
`;
const texts = [
  <Fragment key="text_1">
    <StyledVideoCard>
      <div className="player">
        <video
          controls
          src={
            "https://res.cloudinary.com/dpi44zxlw/video/upload/v1672356747/322307310_176012935040347_7918079026087355917_n_tgiw9u.mp4"
          }
          width={"100%"}
          height={"100%"}
        />
      </div>
      {/* <div className='text'>
            piano tutorial
        </div> */}
    </StyledVideoCard>
  </Fragment>,
  <Fragment key="text_1">
    <StyledVideoCard>
      <div className="player">
        <video
          controls
          src={
            "https://res.cloudinary.com/dpi44zxlw/video/upload/v1672398679/10000000_507927247866055_8949269750556364856_n_awaezh.mp4"
          }
          width={"100%"}
          height={"100%"}
        />
      </div>
      {/* <div className='text'>
            piano tutorial
        </div> */}
    </StyledVideoCard>
  </Fragment>,
];

function AnimatedVideo({ items }) {
  const [counter, setCounter] = React.useState(1);
  const [hover, setHover] = React.useState(false);

  const videoList = items.map((d) => {
    return (
      <Fragment key={d.pic}>
        <StyledVideoCard>
          <div className="player">
            <video controls src={d.pic} width={"100%"} height={"100%"} />
          </div>
          {/* <div className='text'>
                    piano tutorial
                </div> */}
        </StyledVideoCard>
      </Fragment>
    );
  });
  const hoverOn = () => {
    setHover((prev) => !prev);
  };

  const hoverOff = () => {
    setHover((prev) => !prev);
  };

  React.useEffect(() => {
    if (!hover) {
      const timer = setTimeout(() => {
        if (counter === videoList.length) {
          setCounter(1);
        } else {
          setCounter((prev) => prev + 1);
        }
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [counter, hover, videoList.length]);

  return (
    <motion.div
      onMouseEnter={hoverOn}
      onMouseLeave={hoverOff}
      key={counter}
      initial={{ x: 300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {texts[counter - 1]}
    </motion.div>
  );
}

export const ImageRegionText = () => (
  <>
    <AnimatedVideo />
  </>
);
AnimatedVideo.propTypes = {};

export default AnimatedVideo;
