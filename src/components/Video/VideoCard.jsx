import styled from "@emotion/styled";
import { Empty } from "antd";
import AnimatedVideo from "./AnimatedVideo";

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

const VideoCard = ({ items }) => {
  return (
    <>
     {items[0].pic !== "" ? 
      <StyledVideoCard>
        <AnimatedVideo items={items} />
      </StyledVideoCard>
      : 
      <Empty />
      }
    </>
  );
};

export default VideoCard;
