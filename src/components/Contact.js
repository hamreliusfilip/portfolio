import React from "react";
import styled from 'styled-components'

const Contact = () => {

    return (
      <Contairer>

        <Heading>ABOUT</Heading>

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
  
  export default Contact

const Contairer = styled.div`
  display: flex;
  flex-direction: row;
  width: 63%;

  @media (max-width: 1500px) {
    flex-direction: column;
}
`

const Heading = styled.h1`
  flex-grow: 1;
  position: relative;
  margin-left: 3%;
  font-family: 'Helvetica Neue';
  font-weight: 700;
  font-size: 10em;
  color: var(--text);
  margin-top: -0.6%;

  @media (max-width: 600px) {
    font-size: 3em;
    margin-right: 10%;
}
`

const Heading1 = styled.p`
  postion: relative;
  font-family: 'Helvetica Neue';
  font-weight: 700;
  font-size: 3em;
  color: #DCDCDC;
  margin-left: 5%;

  @media (max-width: 600px) {
    font-size: 2em;
}
`
const Box = styled.div`
  flex-grow: 2;
  height: 260px;
  max-width: 800px;
  min-width: 700px;
  margin: -1.3% 20px 20px 20px;
  background-color: #242424;
  border-radius: 15px;
  margin-left: 4%;

  @media (max-width: 600px) {
    max-width: 500px;
    min-width: 400px;
    height: 200px;
}
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

  @media (max-width: 600px) {
    width: 3em;
    height: 3em;
    padding: 0px 6% 0px 6%;
}
`
const LogoStyleStatic = styled.img`
  position: relative;
  width: 4em;
  height: 4em;
  padding: 0px 10% 0px 5.2%;

  @media (max-width: 600px) {
    width: 3em;
    height: 3em;
    padding: 0px 6% 0px 6%;
}
`
const StyledA = styled.a`
  postion: relative;
`


