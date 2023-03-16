import React, { useState } from "react";
import styled from "styled-components";

export const DarkMode = () => { 
    
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
            <Wrapper>
                <InputStyle type="checkbox" id="darlmode-toggle" onChange={toggleTheme} />
                <LabelStyle className="slider" for="darlmode-toggle">TOGGLE DARK/LIGHT MODE.</LabelStyle>
            </Wrapper>

            <Gradient1 isDarkMode={isDarkMode} />
            <Gradient2 isDarkMode={isDarkMode} />
            <Gradient3 isDarkMode={isDarkMode} />
        </div>
    )
}; 

export const Gradient1 = ({ isDarkMode }) =>{
    const path = isDarkMode ? "/grad/darkgradient.png" : "/grad/gradient.png";
    return (
      <div> 
        <IMG1 src = {path} />
      </div>
    );
  };
  
export const Gradient2 = ({ isDarkMode }) =>{
    const path = isDarkMode ? "/grad/darkgradient.png" : "/grad/gradient.png";
    return (
      <div> 
        <IMG2 src = {path}  />
      </div>
    );
  };

  export const Gradient3 = ({ isDarkMode }) =>{
    const path = isDarkMode ? "/grad/darkgradient.png" : "/grad/gradient.png";
    return (
      <div> 
        <IMG3 src = {path}  />
      </div>
    );
  };

const Wrapper = styled.div`
    position: relative;
    width: 3.5em;
    height: 2em;
    font-family: 'Helvetica Neue';
    font-weight: bold;
    font-size: 2em;
    color: var(--text);
    cursor: pointer;
    float: right; 
    margin-right: 5%;
    padding: 10px;

    &:hover {
        width: 4.2em;
     } 

     @media (max-width: 600px) {
        font-size: 1em;
        margin-right: 10%;
    }
    
`
const InputStyle = styled.input`
    position: relative;
    cursor: pointer;
    -webkit-appearance: none;
    cursor: pointer;
`
const LabelStyle = styled.label`
    position: relative;
    z-index: 999;
`
const IMG1 = styled.img`
  postion: relative;
  z-index:-1;
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
  z-index:-1;
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
  z-index:-1;
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