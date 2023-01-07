import React, { useEffect, useRef } from "react";
import "./Transition.css";
import { Power4 } from "gsap";

const Transition = ({ timeline }) => {
  const trans = useRef(null);
  useEffect(() => {
    timeline.to(trans.current, {
      duration: 1,
      width: 0,
      ease: Power4.easeInOut,
    });
  }, [timeline]);

  return <div className="transition-effect" ref={trans}></div>;
};

export default Transition;
