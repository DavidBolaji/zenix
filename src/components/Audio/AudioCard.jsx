import styled from "@emotion/styled";
import { Empty } from "antd";

const StyledAudioCard = styled.div`
  max-width: 500px;
  /* width: 300px; */
  /* border: 1px solid #ededed;
  background-color: #fff; */
  /* height: 300px; */
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

const AudioCard = ({items}) => {
  return (
    <>
      {items[0].pic !== "" ? 
      <StyledAudioCard>
        <div className="player">
          <audio
            controls
            src={items[0].pic}
            width={"100%"}
            height={"100%"}
          />
        </div>
        {/* <div className='text'>
            piano tutorial
        </div> */}
      </StyledAudioCard>
      : 
      <Empty />
      }
    </>
  );
};

export default AudioCard;
