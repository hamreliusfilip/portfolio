import React from "react";
import styled from 'styled-components'

const Logo = () => {

    return (
        <div> 
        <Heading1> ABOUT & CONTACT </Heading1>

        <Heading4> find me.</Heading4>
        <LogoWrapper> 
          <StyledA href = "mailto:hamreliusfilip@gmail.com"> 
            <LogoStyle src="loggor/mail.svg" />
          </StyledA>
          <StyledA href = "https://github.com/hamreliusfilip" target="_blank"> 
            <LogoStyle src="loggor/githubblack.svg" />
          </StyledA>
          <StyledA href = "https://www.facebook.com/filip.hamrelius/" target="_blank"> 
            <LogoStyle src="loggor/facebook.svg" />
          </StyledA>
          <StyledA href = "https://www.linkedin.com/in/filip-hamrelius/" target="_blank"> 
            <LogoStyle src="loggor/linkedin.svg" />
          </StyledA>
          <StyledA href = "https://www.instagram.com/filiphamrelius/" target="_blank"> 
            <LogoStyle src="loggor/instagram.svg" />
          </StyledA>
        </LogoWrapper>
     
        <Heading6> about site.</Heading6>
        <Heading5> this site is built with react js and the project can be viewed on github.</Heading5>
        <LogoWrapper> 
          <LogoStyleStatic src="loggor/react.svg"/> 
          <LogoStyleStatic src="loggor/js.svg"/> 
          <StyledA href = "https://github.com/hamreliusfilip/portfolio" target="_blank"> 
            <LogoStyle src="loggor/githubblack.svg" />
          </StyledA>
        </LogoWrapper>
        </div> 
    )
  }
  
  export default Logo



const LogoWrapper = styled.div`
  position: relative;
  width: 2000px;
  height: 500px;
`
const LogoStyle = styled.img`
  position: relative;
  width: 65px;
  height: 65px;
  margin: 25px 25px 25px 25px; 
  margin-top: 3%;
  margin-left:70px;
  cursor: pointer;
  &:hover {
    transform: scale(1.3) translateY(-20px);
  }
  
`;

const LogoStyleStatic = styled.img`
  postion: relative;
  width: 65px;
  height: 65px;
  margin: 25px 25px 25px 25px;
  margin-top:-1%;
  margin-left:70px;
`
const StyledA = styled.a`
  postion: relative;
`
const Heading1 = styled.h1`
  postion: relative;  
  margin-left: 80px;
  margin-top: 20px;
  font-family: 'Helvetica Neue';
  position: relative;
  font-weight: 700;
  font-size: 100px;
  color: black;
`
const Heading4 = styled.p`
  postion: relative;
  margin-left: 80px;
  font-family: 'Helvetica Neue';
  font-weight: 700;
  font-size: 40px;
  color: black;
  margin-top:-3%;
`
const Heading6 = styled.p`
  postion: relative;
  margin-left: 80px;
  font-family: 'Helvetica Neue';
  font-weight: 700;
  font-size: 40px;
  color: black;
  margin-top:-20%;
`

const Heading5 = styled.p`
  postion: relative;
  margin-left: 80px;
  font-family: 'Helvetica Neue';
  font-weight: 700;
  font-size: 20px;
  color: black;
  padding-bottom: 40px;
`

