import styled from "@emotion/styled";
import { Col, Divider, Row } from "antd";
import React from "react";
import ReactImageGallery from "react-image-gallery";
import { useParams } from "react-router-dom";
import AudioCard from "../../components/Audio/AudioCard";
import HeaderSingle from "../../components/Header/HeaderSingle";
import VideoCard from "../../components/Video/VideoCard";
import { audio, data, video } from "./data/data";

export const StyledList = styled.div`
  padding-top: 30px;
  margin: auto;
  width: 90%;
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 30px;
`;

const StyledH3 = styled.h3`
  margin-bottom: 30px;
`;

const StyledGalleryCont = styled.div`
  /* border: 2px solid green; */
  box-shadow: 10px 4px 5px rgba(11, 11, 11, 0.292);
  padding: 5px;
  margin: auto;
  width: 100%;
`;

const formatData = (arr) => {
  const newData = arr.map((a) => {
    return {
      original: a.pic,
      thumbnail: a.pic,
    };
  });

  return newData;
};

const SingleCartalog = () => {
  const { event } = useParams();

  return (
    <>
      <HeaderSingle text={event} />
      <StyledList>
        <Row gutter={[32]}>
          <Col span={16} xs={24} md={16}>
            <StyledH3>images</StyledH3>
            <StyledGalleryCont>
              <ReactImageGallery autoPlay items={formatData(data[event])} />
            </StyledGalleryCont>
          </Col>

          <Col span={8} xs={24} md={8}>
            <StyledH3>videos</StyledH3>
            <StyledGalleryCont>
              <VideoCard items={video[event]} />
            </StyledGalleryCont>
            <Divider />
            <Col span={32}>
              <Divider
                orientation="left"
                style={{ color: "#fff", borderTop: "1px solid #fafafa" }}
              >
                <StyledH3>Audio</StyledH3>
              </Divider>
              {/* <StyledGalleryCont> */}
              <p></p>
              <AudioCard items={audio[event]} />
              {/* </StyledGalleryCont> */}
            </Col>
          </Col>
        </Row>
      </StyledList>
    </>
  );
};

export default SingleCartalog;
