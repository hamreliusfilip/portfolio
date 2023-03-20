import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll"

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

    return (
      <div>
        <Nav style={{ height: window === false ? 120 : 70 }}>

          <Burger onClick={toggleMenu}>
            <Icon onClick={() => openClose()} isActive={isActive}>
              <LogoStyle src={isOpen ? "img/cross.svg" : "img/menu.svg"} alt="MENU" />
            </Icon>
          </Burger> 

          <Navigation style={{ display: window === false ? "inline-block" : "none" }}>
              <Link to="project" spy={true} smooth={true} offset={0} duration={500}><LabelStyle>Projects.</LabelStyle></Link>
              <Link to="whatcan" spy={true} smooth={true} offset={0} duration={500}><LabelStyle>My Toolkit.</LabelStyle></Link>
              <Link to="education" spy={true} smooth={true} offset={0} duration={500}><LabelStyle>Education.</LabelStyle></Link>
              <Link to="about" spy={true} smooth={true} offset={0} duration={500}><LabelStyle>About.</LabelStyle></Link>
              <Link to="mail" spy={true} smooth={true} offset={0} duration={500}><LabelStyle>Mail.</LabelStyle></Link>
          </Navigation>

          <DarkWrapper> 
              <InputStyle type="checkbox" id="darlmode-toggle" onChange={toggleTheme} />
              <LabelStyle for="darlmode-toggle">TOGGLE DARK/LIGHT MODE.</LabelStyle>
          </DarkWrapper>

         </Nav> 

        <Gradient1 isDarkMode={isDarkMode} />
        <Gradient2 isDarkMode={isDarkMode} />
        <Gradient3 isDarkMode={isDarkMode} />
      </div>
    )
}; 

export const Gradient1 = ({ isDarkMode }) =>{
    const path = isDarkMode ? "grad/darkgradient.png" : "grad/gradient.png";
    return (
      <div> 
        <IMG1 src = {path} />
      </div>
    );
  };
  
export const Gradient2 = ({ isDarkMode }) =>{
    const path = isDarkMode ? "grad/darkgradient.png" : "grad/gradient.png";
    return (
      <div> 
        <IMG2 src = {path}  />
      </div>
    );
  };

  export const Gradient3 = ({ isDarkMode }) =>{
    const path = isDarkMode ? "grad/darkgradient.png" : "grad/gradient.png";
    return (
      <div> 
        <IMG3 src = {path}  />
      </div>
    );
  };


const DarkWrapper = styled.div`
  position: relative;
  z-index: 999 !important;
  float:right;
  font-family: 'Helvetica Neue';
  font-weight: bold;
  font-size: 1.6em;
  color: #DCDCDC;
  color: var(--text);
  cursor:pointer;
  width: 10%;
  text-align: right;
  margin: 2%;
  margin-top:7%;

  @media (max-width: 600px) {
    width: 30%;
    text-align: right;
    margin: 2%;
    margin-top:7%;
    font-size: 1em;
  }
`
const InputStyle = styled.input`
    -webkit-appearance: none;
`
const LabelStyle = styled.label`
    cursor: pointer;
`
const Nav = styled.nav`
  background-color: #242424;
  width:100wv;
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
  z-index: 999 !important;
  cursor: pointer;
  margin-top: -0.5%;
`
const Navigation = styled.div`

  position: relative;
  z-index: 999 !important;

  margin-top: 50px;
  margin-left: 200px;

  font-family: 'Helvetica Neue';
  font-weight: bold;
  font-size: 1em;
  color: #DCDCDC;

  cursor:pointer;

  display: flex;
  justify-content: center; 
  align-items: center;

  @media (max-width: 600px) {
    font-size: 0.7em;
    width: 50%;
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
    transition: all 0.5s ease;
    transform: rotate(20deg);
  `}
`

// ------- GRADIENTER ------- // 
const IMG1 = styled.img`
  postion: relative;
  z-index:1;
  position: fixed;
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
  postion: relative;
  z-index:1;
  position: fixed;
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
  postion: relative;
  z-index:1;
  position: fixed;
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

