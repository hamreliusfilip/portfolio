import React, { useState } from "react";
import styled from 'styled-components'
import { Link } from "react-scroll"

const MenuBar = () => {

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
    <Nav style={{ height: window === false ? 300 : 70 }}>

      <Burger onClick={toggleMenu}>
        <Icon onClick={() => openClose()} isActive={isActive}>
          <LogoStyle src={isOpen ? "img/cross.svg" : "img/menu.svg"} alt="MENU" />
        </Icon>
      </Burger>

      <Navigation style={{ display: window === false ? "inline-block" : "none" }}>

      <Link to = "title"> TOP.</Link>
      <Link to = "project"> PROJECTS.</Link>
      <Link to = "whatcan"> MY TOOLKIT.</Link>
      <Link to = "education"> EDUCATION.</Link>
      <Link to = "about"> ABOUT.</Link>
      <Link to = "mail"> MAIL.</Link>
     

      </Navigation>
    </Nav>
  );
};

export default MenuBar;

const Nav = styled.nav`
  background-color: var(--text);
  color: var(--background);
  display: flex;
  justify-content: space-between;
  width:100wv;
`
const LogoStyle = styled.img`
  position: fixed;
  cursor:pointer;
}
`
const Burger = styled.div`
  position: relative;
  z-index: 999 !important;
  cursor: pointer;
  margin-top: -0.5%;
`
const Navigation = styled.div`
  position: fixed;
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
`
const Icon = styled.div`
  position: absolute;
  width: 30px;
  height: 1px;
  left: 15px;
  top: 30px;
  background-color: var(--background);

  ${(props) =>
    props.isActive &&`  
    transition: all 0.5s ease;
    transform: rotate(20deg);
  `}
`

// BUTTON 
const Button = styled.button`
  font-size: 30px;
  font-weight: 700;
  color: #ff7576;
  background-color: var(--text);
  border: none;
  outline: none;
  cursor: pointer;
  padding: 18px 35px;
  position: relative;
  line-height: 24px;
  font-family: 'Helvetica Neue';
  border-radius: 9px;
  box-shadow: 0px 1px 2px #2B3044,
    0px 4px 16px #2B3044;
  transform-style: preserve-3d;
  transform: scale(var(--s, 1)) perspective(600px)
    rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg));
  perspective: 600px;
  transition: transform 0.1s;

  &:hover{
    transition: 0.3s;
  transform: scale(0.93);
  }
`

const SP = styled.span`
background: var(--background);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
display: block;
`


