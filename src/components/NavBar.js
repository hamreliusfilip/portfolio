import React, { useState } from "react";
import styled from 'styled-components'
import { Link } from "react-scroll"

const CustomNav = () => {
  const [window, setWindow] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsActive(!isActive);
  };

  let openClose = () => {
    if (window === false) {
      setWindow(true);
    } else {
      setWindow(false);
    }
  };
  
  return (
    <NavbarMenu style={{ width: window === false ? 250 : 120 }}>

    <Burger onClick={toggleMenu}>
      <Icon onClick={() => openClose()} isActive={isActive}>
        <LogoStyle src={isOpen ? "img/cross.svg" : "img/menu.svg"} alt="burger" />
      </Icon>
    </Burger>

      <NavbarList>
        <Navigation style={{ display: window === false ? "inline-block" : "none" }}>
          <Link to="hello" spy={true} smooth={true} offset={-20} duration={500}>top.</Link>
          <br></br>
          <Link to="project" spy={true} smooth={true} offset={160} duration={500}>projects.</Link>
          <br></br>
          <Link to="education" spy={true} smooth={true} duration={500}>education.</Link>
          <br></br>
          <Link to="about" spy={true} smooth={true} offset={-20} duration={500}>about & contact.</Link>
        </Navigation>
      </NavbarList>
    </NavbarMenu>
  );
};

export default CustomNav;

const LogoStyle = styled.img`
position: fixed;
z-index: 9999 !important;
cursor:pointer;
}
`

const NavbarMenu = styled.div`
  position: fixed;
  z-index: 9999 !important;
  height: 20vh;
  transition: all 1s ease;
  right:0;
`;

const Burger = styled.div`
position: relative;
z-index:999;
height: auto;
margin: 0 auto;
padding: 10px;
cursor: pointer;
margin-top:50px;
margin-right:50px;

&:hover{
  transition: all 0.5s ease-in-out;
  transform: scale(0.90);
}
`;

const NavbarList = styled.ul`
  z-index:1;
  list-style-type: none;
`;

const Navigation = styled.div`
position: fixed;
z-index: 9999 !important;
display: inline-block;
font-size: 20px;
margin-top:100px;
line-height: 500%;
color: black;
font-family: 'Helvetica Neue';
font-weight: 900;

display: flex;
justify-content: space-between;
width: 100%;
cursor:pointer;
`;

const Icon = styled.div`
  position: absolute;
  width: 30px;
  height: 1px;
  left: 15px;
  top: 30px;
  background-color: white;
  transition: all 0.5s ease;

  ${(props) =>
    props.isActive &&`  
    transition: all 0.5s ease;
    margin-top:14px;
    -webkit-transform: rotate(90deg);
  `}
`;
