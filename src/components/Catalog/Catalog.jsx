import React, { useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import CatalogCard from "./CatalogCard";
import gsap, { Elastic } from "gsap";
import { event } from "./data/data";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaRegHandPointDown, FaRegHandPointRight } from "react-icons/fa";
import { getImage } from "./utils/helpers";
// import Typewriter from "typewriter-effect";

const HeroStyled = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  padding-left: 80px;
  padding-right: 80px;
  position: relative;
  width: 90%;
  margin: auto;
  overflow-y: hidden;
  /* background-image: linear-gradient(#4b3aab67, #000000c7), */
  /* url("https://cdn.dribbble.com/userupload/4102421/file/original-5d05763f6fd89c4f0193259a2eb3c35f.png?compress=1&resize=850x638"); */
  /* url("https://res.cloudinary.com/dpi44zxlw/image/upload/v1673132578/e-commerce/product/full_mixer_qwbs6c.png"); */
  /* filter: blur(1.4); */
  background-position: center;

  .hand2 {
    display: none;
  }

  @media (max-width: 810px) {
    /* padding-left: 20px; */
    /* padding-right: 20px; */
    /* padding-top: 120px; */
    margin-top: 100px;
    flex-direction: column;
    text-align: center;
    height: 70vh;
    background: none;

    .hand {
      transform: rotate(90deg) !important;
      display: none;
    }

    .hand2 {
      display: block;
    }
    
  }

`;

const StyledGalleryCont = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;

 @media (max-width: 810px) {
   /* width: 120vw; */
   height: 400px;
  }

`;

const StyledGalleryBlock = styled.div`
  /* border-radius: 16px; */
  width: ${(props) => props.width};
  height: ${(props) => props.size};
  padding: 5px;
  overflow: hidden;
  position: relative;
  box-shadow: 0px 0px 10px 10px rgba(30, 2, 2, 0.5);
  cursor: pointer;
  transform: scale(0.8);
  /* background-color: #000; */

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    /* object-position: top; */
  }

  .shadow.active {
    background-color: #0a192fbe;
    height: 100%;
    width: 100%;
    z-index: 10000;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffa640;
    font-size: 30px;
  }

  @media (max-width: 810px) {
    transform: scale(2.2);
    width: 300%;
    /* height: 200px; */
  }
`;

const StyledShadow = styled.div``;

const StyledHorizontalCarousel = styled.div`
  position: absolute;
  bottom: 0;
  height: 60px;
  padding: 5px;
  left: 85px;
  width: 80%;


     @media (max-width: 810px) {
    left: -110px;
    width: 100vw;
    height: 70px;
    transform: scale(0.8) translateX(-5%);
    bottom: -110px;
  }
`;

const StyledVerticalCarousel = styled.div`
  position: absolute;
  right: 140px;
  height: 70%;
  width: 60px;
  transform: translateY(-25px);
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  padding-top: 5px;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 810px) {
    right: -100px;
  }
`;

const StyledHorizontalCarouselInner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default function CatalogComponent() {
  const catalog = gsap.timeline();
  const [count, setCount] = useState(1);
  const [eStart, setEStart] = useState(0);
  const [curE, setCurE] = useState("TIMKH");
  const [listE] = useState(Object.keys(event));
  const [listELength] = useState(Object.keys(event).length - 1);
  const [main, setMain] = useState(event[curE][0].pic);
  const [total, setTotal] = useState(event[curE].length - 1);
  const [hover, setHover] = useState(false);
  const [imgSize, setImgSize] = useState(getImage(event[curE][0].pic));
  const ref = useRef();
  const shadow = useRef();
  const router = useNavigate();

  const hoverOn = () => {
    setHover(true);
    catalog.to(shadow.current, {
      duration: 0.3,
      height: "100%",
      // opacity: 0
    });
  };

  const hoverOff = () => {
    setHover(false);
    gsap.timeline().to(shadow.current, {
      duration: 0.001,
      height: 0,
    });
  };

  const handleClickE = (list) => {
    setCurE(list);
    catalog.fromTo(
      ref.current,
      {
        duration: 0.5,
        y: 600,
        opacity: 0,
        ease: Elastic,
      },
      {
        duration: 0.5,
        y: 0,
        opacity: 1,
        ease: Elastic,
      }
    );
    setMain(event[list][0].pic);
  };

  const handleClickEPic = (pic) => {
    catalog.fromTo(
      ref.current,
      {
        duration: 0.5,
        x: 600,
        opacity: 0,
      },
      {
        duration: 0.5,
        x: 0,
        opacity: 1,
      }
    );

    setMain(pic);
  };

  useEffect(() => {
    // set timout
    const setTime = setTimeout(() => {
      if (!hover) {
        // animate image
        catalog.fromTo(
          ref.current,
          {
            duration: 0.5,
            x: 600,
            opacity: 0.4,
            // ease: Elastic.easeInOut
          },
          {
            duration: 0.5,
            x: 0,
            opacity: 1,
            // ease: Power4.easeInOut
          }
        );

        // compare image position and total images
        if (count > total) {
          // if equal
          catalog.fromTo(
            ref.current,
            {
              duration: 0.9,
              y: 600,
              opacity: 0.3,
            },
            {
              duration: 0.1,
              y: 0,
              opacity: 1,
            }
          );
        } else {
          setCount((prev) => prev + 1);
          // set the next image
          setImgSize(getImage(event[curE][count].pic));
          setMain(event[curE][count].pic);
        }

        if (count > total) {
          setCount(1); // set to starting picture
          setMain(event[listE[eStart >= listELength ? 0 : eStart + 1]][0].pic); // set picture url e.g https://pic.jpg
          setCurE(listE[eStart >= listELength ? 0 : eStart + 1]); // set event name
          setTotal(
            event[listE[eStart >= listELength ? 0 : eStart + 1]].length - 1
          ); // set total pic in event
          const ind = listE.findIndex(
            (val) => val === listE[eStart >= listELength ? 0 : eStart + 1]
          ); // get index of event
          setEStart(ind); // set index event
        }
      }
    }, 3000);

    return () => clearTimeout(setTime);
  }, [catalog, count, curE, eStart, hover, listE, listELength, total]);

  const loadEvents = React.Children.toArray(
    listE.map((list) => {
      return (
        <CatalogCard
          active={list === curE ? true : false}
          name={list}
          pic={event[list][0].pic}
          onClick={() => handleClickE(list)}
        />
      );
    })
  );

  const loadEventPic = React.Children.toArray(
    event[curE].map((list) => {
      return (
        <CatalogCard
          active={main === list.pic ? true : false}
          name={list.name}
          pic={list.pic}
          onClick={() => handleClickEPic(list.pic)}
        />
      );
    })
  );
  return (
    <header>
      <HeroStyled id="#catalog">
        <FaRegHandPointRight
          className="hand animate__animated animate__shakeY animate__wobble animate__slow animate__infinite infinite"
          color="white"
          size={30}
          style={{ transform: "translateX(-50px)" }}
          />
          <h3 style={{color: 'white', marginBottom: '10px', fontSize: 12}}>Click to view more</h3>
        <FaRegHandPointDown
          className="hand2 animate__animated animate__shakeY animate__wobble animate__slow animate__infinite infinite"
          color="white"
          size={30}
          style={{ transform: "translateX(-50px)" }}
        />
        <StyledGalleryCont
          as={motion.div}
          initial={{ y: -1500 }}
          animate={{ y: 0 }}
          exit={{}}
         
        >
          <StyledGalleryBlock  onMouseEnter={hoverOn}
          onMouseLeave={hoverOff} size={imgSize}>
            <StyledShadow
              onClick={() => router(`/catalog/${curE}`)}
              className={`shadow ${hover ? "active" : ""}`}
              ref={shadow}
            >
              {hover ? curE : null}
            </StyledShadow>
            <img ref={ref} src={main} alt={"tyshh"} />
          </StyledGalleryBlock>
          <StyledHorizontalCarousel>
            <StyledHorizontalCarouselInner>
              {loadEventPic}
            </StyledHorizontalCarouselInner>
          </StyledHorizontalCarousel>

          <StyledVerticalCarousel>{loadEvents}</StyledVerticalCarousel>
        </StyledGalleryCont>
      </HeroStyled>
    </header>
  );
}
