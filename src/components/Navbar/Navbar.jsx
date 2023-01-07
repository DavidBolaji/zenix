import { Drawer } from "antd";
import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const StyledDrawer = styled(Drawer)`
  position: relative;
  .ant-drawer-wrapper-body {
    background-color: #040c18;
    color: #7b86a4;
    font-size: 18px;
    border-right: 1px solid #a5a4a47f;
  }
  .ant-drawer-close {
    position: absolute;
    right: 0;
    color: #fff;
    right: -10px;
    z-index: 100px;
    top: 10px;
    background: #7b86a4;
    width: 34px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 600;
  gap: 10px;

  img {
    width: 100px;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #0a192f;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100000000000;

  @media (max-width: 810px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export default function NavBar({ themeSet }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState("");
  const [active, setActive] = useState("Home");

  const onClose = () => {
    setOpen(false);
  };

  const handleMouse = (val) => {
    setCurrent(val);
  };

  return (
    <StyledNav>
      <LogoSection className="white">
        {/* <Avatar src={'https://res.cloudinary.com/dpi44zxlw/image/upload/v1672602753/zlogo_rzpqrz.png'} /> */}
        {/* <a href="/">Ologunleko David</a> */}
        <img
          src="https://res.cloudinary.com/dpi44zxlw/image/upload/v1672602753/zlogo_rzpqrz.png"
          alt="zenix"
        />
      </LogoSection>
      <div className="mobile-nav" onClick={() => setOpen(true)}>
        <RiMenu3Fill color="#4dba87" />
      </div>

      <ul className="flex white none">
        <li
          className={active === "Home" ? "green" : ""}
          onMouseEnter={() => handleMouse("Home")}
          onMouseLeave={() => handleMouse("")}
        >
          {/* <a href="/#home">{current === "Home" || active === "Home" ? "Home" : 'Home'}</a> */}
          <Link to="/">Home</Link>
        </li>
        <li
          className={active === "Catalog" ? "green" : ""}
          onMouseEnter={() => handleMouse("Catalog")}
          onMouseLeave={() => handleMouse("")}
        >
          {/* <a href="/#catalog">{current === "catalog" || active === "catalog" ? "Catalog" : 'Catalog'}</a> */}
          <Link to="/catalog">Catalog</Link>
        </li>
        <li
          className={active === "Home" ? "green" : ""}
          onMouseEnter={() => handleMouse("Home")}
          onMouseLeave={() => handleMouse("")}
        >
          {/* <a href="/#catalog">{current === "catalog" || active === "catalog" ? "Catalog" : 'Catalog'}</a> */}
          <Link to="/resources">Resources</Link>
        </li>
      </ul>
      <StyledDrawer
        onClose={onClose}
        open={open}
        placement={"left"}
        size={"50%"}
      >
        <ul className="mobile-ul">
          <li
            className={active === "Home" ? "green" : ""}
            onClick={() => {
              setActive("Home");
              setOpen(false);
            }}
            onMouseEnter={() => handleMouse("Home")}
            onMouseLeave={() => handleMouse("")}
          >
            <a href="/#home">
              {current === "Home" || active === "Home" ? "< Home />" : "Home"}
            </a>
          </li>
        </ul>
      </StyledDrawer>
    </StyledNav>
  );
}
