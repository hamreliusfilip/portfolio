import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll"

import cross from '../loggor/cross.svg'
import menu from '../loggor/menu.svg'

export const DarkMode = () => { 
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
      <div>
        <Nav style={{ height: window === false ? 290 : 80 }}>

          <Burger onClick={toggleMenu}>
            <Icon onClick={() => openClose()} isActive={isActive}>
              <LogoStyle src = {isOpen ? cross : menu} />  
            </Icon>
          </Burger> 

          <Navigation style={{ display: window === false ? "inline-block" : "none" }}> 
              
              
              <StyledLink to="project" spy={true} smooth={true} offset={0} duration={500}>Projects</StyledLink>
              <br></br> 
              <StyledLink to="gallery" spy={true} smooth={true} offset={0} duration={500}>Gallery</StyledLink>
              <br></br>
              <StyledLink to="education" spy={true} smooth={true} offset={0} duration={500}>Education</StyledLink>
              <br></br>
              <StyledLink to="about" spy={true} smooth={true} offset={-140} duration={500}>Contact</StyledLink>
          </Navigation>
         </Nav> 

      </div>
    )
}; 

const StyledLink = styled(Link)`
  cursor: pointer;
  font-family: 'HelveticaAll';
  font-weight: bold;
  font-size: 1.7em;
  line-height: 1.5em;
  color: var(--text);

  &:hover {
    transition: all 0.4s;
    color: var(--background);
  } 
`
const Nav = styled.nav`
  width:100wv;
  transition: all -3s;
  border-bottom: 2px solid #DCDCDC;
`
const Navigation = styled.div`
  position: relative;
  z-index: 600;

  margin-top: 2%;
  margin-left: 4%;

  cursor:pointer;

  @media (max-width: 600px) {
    font-size: 0.9em;
    margin-left: 3%;
    margin-top: 17%;
  }
`
const LogoStyle = styled.img`
  position: relative;
  cursor:pointer;
  width: 30px;

  @media (max-width: 600px) {
    width: 20px;
  }
}
`
const Burger = styled.div`
  position: relative;
  z-index: 600;
  cursor: pointer;
  margin-top: -0.5%;
`

const Icon = styled.div`
  position: absolute;
  width: 30px;
  height: 1px;
  left: 15px;
  top: 30px;


  ${(props) =>
    props.isActive &&`  
    transition: all 1s ease;
  `}
`