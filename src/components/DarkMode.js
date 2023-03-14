import React from "react";
import styled from "styled-components";

const DarkMode = () => { 

    const setDarkMode = () => { 
        document.querySelector("body").setAttribute('data-theme', 'dark')
    }

    const setLighMode = () => { 
        document.querySelector("body").setAttribute('data-theme', 'light')
    }

   const toggleTheme = e => { 
    if (e.target.checked) setDarkMode(); 
    else setLighMode();
   }

    return( 
        <Wrapper> 
            <InputStyle 
            type="checkbox" 
            id="darlmode-toggle" 
            onChange = {toggleTheme}
            />

            <LabelStyle className="slider" for="darlmode-toggle"> TOGGLE DARK/LIGHT MODE</LabelStyle>
        </Wrapper> 
    )
}; 

export default DarkMode; 

const Wrapper = styled.div`
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;
    font-family: 'Helvetica Neue';
    font-weight: bold;
    font-size: 2em;
    color: var(--text);
    margin-top: 1%;
    margin-left: 93%;
`

const InputStyle = styled.input`
    position: absolute;
    cursor: pointer;
    -webkit-appearance: none;
`

const LabelStyle = styled.label`

`