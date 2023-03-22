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

    const path = isDarkMode ? dark : light;

    return (
      <div>
        <Nav style={{ height: window === false ? 290 : 80 }}>

          <Burger onClick={toggleMenu}>
            <Icon onClick={() => openClose()} isActive={isActive}>
              <LogoStyle src = {isOpen ? cross : menu} />  
            </Icon>
          </Burger> 

          <ButtonWrapper style={{ display: window === false ? "none" : "inline-block" }}>
            <Button><Link to = "about" spy={true} smooth={true} offset={-100} duration={500}>build a project with me.</Link></Button>
          </ButtonWrapper>

          <Navigation style={{ display: window === false ? "inline-block" : "none" }}> 
              <StyledLink to="project" spy={true} smooth={true} offset={0} duration={500}>Projects.</StyledLink>
              <br></br> 
              <StyledLink to="whatcan" spy={true} smooth={true} offset={0} duration={500}>My Toolkit.</StyledLink>
              <br></br>
              <StyledLink to="education" spy={true} smooth={true} offset={0} duration={500}>Education.</StyledLink>
              <br></br>
              <StyledLink to="about" spy={true} smooth={true} offset={-140} duration={500}>Contact.</StyledLink>
          </Navigation>

          <CustomCheckboxContainer style={{ display: window === false ? "inline-block" : "none" }}>           
            <CustomCheckboxInput type="checkbox" id="darlmode-toggle" onChange={toggleTheme} />
            <Text>TOGGLE DARK/LIGHT MODE.</Text>
            <CustomCheckmark></CustomCheckmark>
          </CustomCheckboxContainer>
         </Nav> 

         <div> 
          <IMG1 src = {path}  />
          <IMG2 src = {path}  />
          <IMG3 src = {path}  />
        </div>
      </div>
    )
}; 

const ButtonWrapper = styled.div`
  display: block;
  margin-right: 2%;
  float: right;

  @media (max-width: 600px) {
    margin-left: 60%;
    width: 300px;
    margin-top: 3%;
    margin-right: 3%;
   }
`;

const Button = styled.button`
font-size: 1em;
font-weight: bold;
color: #242424;
background-color: #DCDCDC;
border: none;
outline: none;
cursor: pointer;
padding: 13px 20px;
font-family: 'Helvetica Neue';
border-radius: 9px;

@media (max-width: 600px) {
  margin-left: 60%;
  font-size: 0.5em;
 }

&:hover{
  transition: all -0.7s;
  background-color: black;
  color: #DCDCDC;
}
`

const Text = styled.p`
  position: relative;
  z-index: 650;
  font-family: 'Helvetica Neue';
  font-weight: bold;
  font-size: 0.6em;
  color: #DCDCDC;
  text-align: right;
  width: 50%;
  float: right;
  margin-right: 110%;
  margin-top: 40%;
  transition: all 0.7s;

  @media (max-width: 600px) {
    width: 50%;
    float: right;
    margin-right: 110%;
    margin-top: 40%;
    font-size: 0em;
   }
   
  `;

const CustomCheckboxContainer = styled.label`
  transition: all 0.7s;
  position: relative;
  cursor: pointer;
  font-size: 2em;
  user-select: none;
  float: right;

  @media (max-width: 600px) {
   font-size: 1em;
   margin-right: 5%;
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
  margin-right: 20%;
  margin-top: 44%;
  position: relative;
  height: 1.3em;
  width: 1.3em;
  background: white;
  border-radius: 50px;
  transition: all 0.7s;
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
  font-family: 'Helvetica Neue';
  font-weight: bold;
  font-size: 1.7em;
  line-height: 1.5em;

  @media (max-width: 600px) {
    width: 20px;
  }

  &:hover{
    transition: 0.3s;
    color: black;
  }
`
const Nav = styled.nav`
  background-color: #242424;
  width:100wv;
  transition: all -5s;
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
const Navigation = styled.div`
  position: relative;
  z-index: 600;

  margin-top: 5%;
  margin-left: 7%;

  color: #DCDCDC;

  cursor:pointer;

  @media (max-width: 600px) {
    font-size: 0.9em;
    width: 50%;
    margin-top: 20%;
    margin-left: 10%;
  }
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
     margin-top: -50%;
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
     margin-top: 0%;
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


