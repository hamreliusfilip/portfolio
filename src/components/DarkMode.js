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
        <Nav style={{ height: window === false ? 290 : 80 }}>

          <Burger onClick={toggleMenu}>
            <Icon onClick={() => openClose()} isActive={isActive}>
              <LogoStyle src={isOpen ? "img/cross.svg" : "img/menu.svg"} alt="MENU" />
            </Icon>
          </Burger> 

          <Navigation style={{ display: window === false ? "inline-block" : "none" }}> 
              <Link to="project" spy={true} smooth={true} offset={0} duration={500}><LabelStyle>Projects.</LabelStyle></Link>
              <br></br>
              <Link to="whatcan" spy={true} smooth={true} offset={0} duration={500}><LabelStyle>My Toolkit.</LabelStyle></Link>
              <br></br>
              <Link to="education" spy={true} smooth={true} offset={0} duration={500}><LabelStyle>Education.</LabelStyle></Link>
              <br></br>
              <Link to="about" spy={true} smooth={true} offset={0} duration={500}><LabelStyle>About.</LabelStyle></Link>
              <br></br>
              <Link to="mail" spy={true} smooth={true} offset={0} duration={500}><LabelStyle>Mail.</LabelStyle></Link>
          </Navigation>

          <CustomCheckboxContainer style={{ display: window === false ? "inline-block" : "none" }}>           
            <CustomCheckboxInput type="checkbox" id="darlmode-toggle" onChange={toggleTheme} />
            <Text>TOGGLE DARK/LIGHT MODE.</Text>
            <CustomCheckmark></CustomCheckmark>
          </CustomCheckboxContainer>

         </Nav> 

        <Gradient1 isDarkMode={isDarkMode} />
        <Gradient2 isDarkMode={isDarkMode} />
        <Gradient3 isDarkMode={isDarkMode} />
      </div>
    )
}; 

const Text = styled.p`
  position: relative;
  z-index: 999 !important;
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
`;

const CustomCheckboxContainer = styled.label`
transition: all 0.7s;
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 2em;
  user-select: none;
  float: right;
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
const LabelStyle = styled.label`
    cursor: pointer;
    font-family: 'Helvetica Neue';
    font-weight: bold;
    font-size: 2em;
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
  z-index: 999 !important;
  cursor: pointer;
  margin-top: -0.5%;
`
const Navigation = styled.div`
  position: relative;
  z-index: 999 !important;

  margin-top: 50px;
  margin-left: 200px;

  color: #DCDCDC;

  cursor:pointer;

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
    transition: all 1s ease;
  `}
`

// ------- GRADIENTER ------- // 

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
