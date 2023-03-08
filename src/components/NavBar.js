import React, { useState } from "react";
import styled from 'styled-components'
import { Link } from "react-scroll"

const CustomNav = () => {
  const [window, setWindow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
      <div onClick={() => openClose()}>
        <img src={isOpen ? "img/menu.svg" : "img/cross.svg"} alt="burger" />
      </div>
    </Burger>

      <NavbarList>
        <Navigation style={{ display: window === false ? "inline-block" : "none" }}>
          <Link to="hello" spy={true} smooth={true} offset={-20} duration={500}>top.</Link>
          <br></br>
          <Link to="project" spy={true} smooth={true} offset={160} duration={500}>projects.</Link>
          <br></br>
          <Link to="education" spy={true} smooth={true} duration={500}>education</Link>
          <br></br>
          <Link to="contact" spy={true} smooth={true} offset={-20} duration={500}>contact</Link>
        </Navigation>
      </NavbarList>
    </NavbarMenu>
  );
};

export default CustomNav;

const NavbarMenu = styled.div`
  position: fixed;
  height: 100vh;
  background-color: #282626;
  transition: all 1s ease;
  right:0;
`;

const Burger = styled.div`
height: auto;
margin: 0 auto;
padding: 10px;
position: relative;
  cursor: pointer;
  
  img {
    padding: 25px 8px 0px 0px;
    
    transition: transform 0.3s ease-in-out;
    transform: ${props => (props.isOpen ? 'rotate(90deg)' : 'rotate(0deg)')};
    
  }
`;

const NavbarList = styled.ul`
  list-style-type: none;
`;

const Navigation = styled.div`
display: inline-block;
position: relative;
font-size: 34px;
margin-top:100px;
line-height: 500%;
color: #DCDCDC;
font-family: 'Helvetica Neue';
font-weight: 900;

display: flex;
justify-content: space-between;
width: 100%;
max-width: 360px;

  & > a {
    white-space: nowrap;
    text-decoration: none;
    transition: .2s;
    &:hover {
      cursor: pointer;
      text-shadow: 0 2px 50px white;
      } 
  }  
`;

