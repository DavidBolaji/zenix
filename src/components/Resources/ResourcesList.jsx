import styled from "@emotion/styled";
import { Badge, Button, Card, Col, Drawer, Row } from "antd";
import Meta from "antd/es/card/Meta";
import React, { useState } from "react";
import { StyledList } from "../../pages/SingleCartalog/SingleCartalog";
import HeaderSingle from "../Header/HeaderSingle";
import { SiAudacity } from "react-icons/si";
import { RxMixerVertical, RxMixerHorizontal } from "react-icons/rx";
import { RiComputerLine } from "react-icons/ri";

import ContactForm from "../Form/ContactForm";
import { SignUpForm } from "../Form/SignUpForm";
  const len = [0, 1, 2];
const data = [
  {
    id: "c1",
    cat: "DAW",
    color: "magenta",
    title: "nice",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem laboriosam assumenda dignissimos sed dolore. Illo dolor culpa quo architecto ratione, esse ipsum error necessitatibus quisquam.",
    icon: <SiAudacity />,
  },
  {
    id: "c1",
    cat: "Digital Console",
    color: "volcano",
    title: "nice",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem laboriosam assumenda dignissimos sed dolore. Illo dolor culpa quo architecto ratione, esse ipsum error necessitatibus quisquam.",
    icon: (
      <div>
        <RxMixerVertical />
        <RxMixerHorizontal />
      </div>
    ),
  },
  {
    id: "c1",
    cat: "pc",
    color: "purple",
    title: "nice",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem laboriosam assumenda dignissimos sed dolore. Illo dolor culpa quo architecto ratione, esse ipsum error necessitatibus quisquam.",
    icon: <RiComputerLine />,
  },
];

const StyledCard = styled(Card)`
  margin-bottom: 16px;
  background: rgba(255, 255, 255, 0.26);
  /* border-radius: 16px; */
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(7.6px);
  -webkit-backdrop-filter: blur(7.6px);
  cursor: pointer;
  color: bisque;
  margin: auto;
  .ant-card-head-title {
    text-align: end;
    color: #fff;
  }

  .ant-card-head {
    border: none;
  }

  .ant-card-meta-title {
    color: #fff;
  }

  .ant-card-actions {
    border-top: 1px solid #eb2f96;
    background: rgba(255, 255, 255, 0.26);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(7.6px);
    -webkit-backdrop-filter: blur(7.6px);
  }

  .ant-card-meta-description {
    text-transform: capitalize;
    text-align: center;
    color: #fff;
  }

  .ant-card-meta {
    flex-direction: column;
  }

  .ant-card-meta-avatar {
    padding-inline-end: 0px;
    font-size: 50px;
    margin-bottom: 10px;
    color: bisque;
  }

  .ant-card-actions > li {
    padding: 0px 10px;

    span {
      text-align: right;
    }
  }
`;

const StyledDrawer = styled(Drawer)`
  padding: 20px;
  .ant-drawer-body {
    text-align: center;
    margin-top: 50px;

    h3 {
      color: #b7076b;
      font-size: 1.345rem;
      margin-bottom: 20px;
      margin-top: 10px;
      font-weight: 700;
    }

    p {
      color: #555555;
      font-style: italic;
      font-weight: 400;
    }
  }

  .ant-drawer-close {
    position: absolute;
    top: 90px;
    left: 0;
  }
  /* background-color: #eb2f96de !important; */
  .ant-drawer-content-wrapper {
    width: 100% !important;
    max-width: 578px;
    text-align: center;
  }

  .ant-drawer-footer {
    text-align: center;
    color: #555555;
    font-style: italic;
    /* font-weight: 700; */
    /* letter-spacing: 2px; */

    span {
      color: #1f93ff;
      margin-right: 5px;
    }
  }
`;

const ResourcesList = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  //  const [viewPass, setViewPass] = React.useState(false);
  const onClose = () => {
    setOpen((prev) => !prev);
  };
  const onClose2 = () => {
    setOpen2((prev) => !prev);
  };



  const cardActions = [
    <Button key={'btn_text'} onClick={() => setOpen(true)}>Get Resource</Button>,
  ];
  const resourceList = React.Children.toArray(
    data.map((list, ind) => {
      return (
        <Col
          key={ind}
          className={`animate__animated animate__flipInY animate__delay-${len[ind]}s`}
          span={8}
          style={{ marginBottom: "20px" }}
          xs={24}
          md={8}
        >
          <Badge.Ribbon placement="start" text={list.cat} color={list.color}>
            <StyledCard
              // hoverable
              title={"Resource"}
              actions={cardActions}
              style={{
                maxWidth: "540px",
              }}
              bordered={false}
            >
              <Meta
                avatar={list.icon}
                title={list.title}
                description={list.description}
              />
            </StyledCard>
          </Badge.Ribbon>
        </Col>
      );
    })
  );
  return (
    <>
      <HeaderSingle text={"RESOURCES"} />
      <StyledList>
        <Row gutter={[16]}>{resourceList}</Row>
      </StyledList>
      <StyledDrawer
        // closable={false}
        onClose={onClose}
        open={open}
        footer={[
          <p>
            Don't have an account yet ?{" "}
            <span
              onClick={() => {
                // setOpen(false);
                setOpen2(true);
              }}
            >
              Sign Up
            </span>{" "}
          </p>,
        ]}
      >
        <h3>Welcome Back</h3>
        <p>Sign into your member Dashboard to get access to your resources</p>
        <ContactForm />
         <StyledDrawer
        // width={320}
        // closable={false}
        onClose={onClose2}
        open={open2}
      >
        <h3>Welcome Back</h3>
        <p>
          Select plan to Sign up and become a member to get access to all our resources
        </p>
        <SignUpForm />
      </StyledDrawer>
      </StyledDrawer>
     
    </>
  );
};

export default ResourcesList;
