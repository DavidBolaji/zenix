import styled from "@emotion/styled";

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

const AudioCard = () => {
  return (
    <>
      <StyledAudioCard>
        <div className="player">
          <audio
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
      </StyledAudioCard>
    </>
  );
};

export default AudioCard;
