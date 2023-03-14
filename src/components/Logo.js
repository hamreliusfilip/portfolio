import React from "react";
import styled from 'styled-components'

const Logo = () => {

    return (
      <Contairer>
        <Box>
          <Heading1>me.</Heading1>
          <StyledA href="https://github.com/hamreliusfilip" target="_blank">
            <LogoStyle src="loggor/githubgrey.svg" />
          </StyledA>
          <StyledA href="https://www.facebook.com/filip.hamrelius/" target="_blank">
            <LogoStyle src="loggor/facebook.svg" />
          </StyledA>
          <StyledA href="https://www.linkedin.com/in/filip-hamrelius/" target="_blank">
            <LogoStyle src="loggor/linkedin.svg" />
          </StyledA>
          <StyledA href="https://www.instagram.com/filiphamrelius/" target="_blank">
            <LogoStyle src="loggor/instagram.svg" />
          </StyledA>
        </Box>

        <Box>
          <Heading1>site.</Heading1>
          <LogoStyleStatic src="loggor/react.svg" />
          <LogoStyleStatic src="loggor/js.svg" />
          <StyledA href="https://github.com/hamreliusfilip/portfolio" target="_blank">
            <LogoStyle src="loggor/githubgrey.svg" />
          </StyledA>
        </Box>
      </Contairer> 
    )
  }
  
  export default Logo

const Contairer = styled.div`
  display: flex;
  flex-direction: row;
`

const Heading1 = styled.p`
  postion: relative;
  font-family: 'Helvetica Neue';
  font-weight: 700;
  font-size: 3em;
  color: #DCDCDC;
  margin-left: 5%;
`
const Heading2 = styled.p`
  postion: relative;
  font-family: 'Helvetica Neue';
  font-weight: 700;
  font-size: 1em;
  color: #DCDCDC;
  margin-left: 5%;
  margin-top: -5%;
`
const Box = styled.div`
  flex-grow: 4;
  height: 260px;
  max-width: 655px;
  margin: -1.3% 20px 20px 20px;
  background-color: #242424;
  border-radius: 15px;
  margin-left: 2%;
`
const LogoStyle = styled.img`
  position: relative;
  width: 4em;
  height: 4em;
  padding: 0px 10% 0px 5.2%;

  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.3) translateY(-20px);
  }
`
const LogoStyleStatic = styled.img`
  position: relative;
  width: 4em;
  height: 4em;
  padding: 0px 10% 0px 5.2%;
`
const StyledA = styled.a`
  postion: relative;
`


