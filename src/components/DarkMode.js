import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll"

import light from '../grad/gradient.png'
import dark from '../grad/darkgradient.png'

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
    
    const [isDarkMode, setIsDarkMode] = useState(false);

    const setDarkMode = () => { 
        document.querySelector("body").setAttribute('data-theme', 'dark');
        setIsDarkMode(true);
    }

    const setLightMode = () => { 
        document.querySelector("body").setAttribute('data-theme', 'light');
        setIsDarkMode(false);
    }

    const toggleTheme = e => { 
        if (e.target.checked)setDarkMode(); 
        else setLightMode();
    }

    const path = isDarkMode ? light : dark;

    return (
      <div>
        <Nav style={{ height: window === false ? 290 : 80 }}>

          <Burger onClick={toggleMenu}>
            <Icon onClick={() => openClose()} isActive={isActive}>
              <LogoStyle src = {isOpen ? cross : menu} />  
            </Icon>
          </Burger> 

          <CustomCheckboxContainer>           
            <CustomCheckboxInput type="checkbox" id="darlmode-toggle" onChange={toggleTheme} />
            <Text>TOGGLE DARK/LIGHT MODE.</Text>
            <CustomCheckmark></CustomCheckmark>
          </CustomCheckboxContainer>

          <Navigation style={{ display: window === false ? "inline-block" : "none" }}> 
              
              <StyledLink to="whatcan" spy={true} smooth={true} offset={0} duration={500}>Toolkit</StyledLink>
              <br></br> 
              <StyledLink to="project" spy={true} smooth={true} offset={0} duration={500}>Projects</StyledLink>
              <br></br> 
              <StyledLink to="gallery" spy={true} smooth={true} offset={0} duration={500}>Gallery</StyledLink>
              <br></br>
              <StyledLink to="education" spy={true} smooth={true} offset={0} duration={500}>Education</StyledLink>
              <br></br>
              <StyledLink to="about" spy={true} smooth={true} offset={-140} duration={500}>Contact</StyledLink>
          </Navigation>
         </Nav> 

         <div> 
          <IMG1 src = {path}  />
          <IMG2 src = {path}  />
          <IMG3 src = {path}  />
        </div>
      </div>
    )
}; 

const Text = styled.p`
  position: relative;
  z-index: 650;
  font-family: 'HelveticaAll';
  font-weight: bold;
  font-size: 0.6em;
  color: var(--text);
  text-align: right;
  width: 50%;
  transition: all 0.7s;
  margin-left: 30%;

  @media (max-width: 600px) {
    font-size: 0em;
   }
  `;
  const CustomCheckboxContainer = styled.label`
  transition: all 0.7s;
  display: flex;
  position: relative;
  cursor: pointer;
  font-size: 1.5em;
  user-select: none;
  float: right;
  margin-right: 1%;

  @media (max-width: 600px) {
   font-size: 0em;
   margin-right: 7%;
   margin-top: 4%;
  }
`;
const CustomCheckboxInput = styled.input`
  transition: all 0.7s;
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;
const CustomCheckmark = styled.div`
  position: relative;
  height: 2em;
  width: 2em;
  background: white;
  border-radius: 50px;
  transition: all 0.7s;
  margin-top: 7.5%;
  margin-left: 5%;
  --spread: 20px;
  @media (max-width: 600px) {
    padding: 20px;
   }
  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 0.45em;
    top: 0.25em;
    width: 0.25em;
    height: 0.5em;
    border-width: 0 0.15em 0.15em 0;
    transform: rotate(45deg);
  }
  ${CustomCheckboxInput}:checked ~ & {
    background: white;
    box-shadow: -10px -10px var(--spread) 0px #5B51D8, 0 -10px var(--spread) 0px #833AB4, 10px -10px var(--spread) 0px #E1306C, 10px 0 var(--spread) 0px #FD1D1D, 10px 10px var(--spread) 0px #F77737, 0 10px var(--spread) 0px #FCAF45, -10px 10px var(--spread) 0px #FFDC80;
    &:after {
      display: block;
    }
  }
`;
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

// ------- GRADIENTER ------- // 
const IMG1 = styled.img`
   position: fixed;
   z-index:-1;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   transform: scaleY(-1);
   margin-left: -30%;
   margin-top: -30%;

   @media (max-width: 600px) {
     width: 80%;
     height: 80%;
     margin-left: 50%;
     margin-top: -10%;
   }
 `
 const IMG2 = styled.img`
   position: fixed;
   z-index:-1;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   margin-left: 80%;
   margin-top:20%;
   transform: scaleY(-1);
   transform: scaleX(-1);

   @media (max-width: 600px) {
     width: 70%;
     height: 70%;
     margin-left: -20%;
     margin-top: -40%;
   }
 `
 const IMG3 = styled.img`
   position: fixed;
   z-index:-1;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
   transform: scaleY(-1);
   transform: scaleX(-1);

   @media (max-width: 600px) {
     width: 120%;
     height: 50%;
     margin-left: 20%;
     margin-top: 130%;
   }
 `


