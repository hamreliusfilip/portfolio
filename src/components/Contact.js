import React from "react";
import styled from 'styled-components'

import github from '../loggor/githubgrey.svg'
import mail from '../loggor/mail.svg'
import linkedin from '../loggor/linkedin.svg'

const Contact = () => {

  return (
    <div>
      <Wrapper>
        <Box>
          <Heading1>Find me</Heading1>
          <Text>Feel free to contact me on your preffered platform. Or send me a email with form.</Text>
          <StyledA href="https://github.com/hamreliusfilip" target="_blank">
            <LogoStyle src={github} />
          </StyledA>
          <StyledA href="https://www.linkedin.com/in/filip-hamrelius/" target="_blank">
            <LogoStyle src={linkedin} />
          </StyledA>
          <StyledA href="https://www.facebook.com/filip.hamrelius" target="_blank">
            <LogoStyle src={mail} />
          </StyledA>
        </Box>
      </Wrapper>
    </div>
  )
}
export default Contact

const Wrapper = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 1000px) {
    width: 100%;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
}
`


const Heading1 = styled.p`
  postion: relative;
  font-family: 'HelveticaAll';
  font-weight: 700;
  font-size: 2em;
  color: #DCDCDC;
  margin-left: 5%;

  @media (max-width: 600px) {
    font-size: 2em;
}
`
const Text = styled.p`
  postion: relative;
  font-family: 'HelveticaAll';
  font-weight: 700;
  font-size: 1em;
  color: #DCDCDC;
  margin-left: 5%;
  width: 90%;

  @media (max-width: 600px) {
    font-size: 0.7em;
    width: 90%;
}
`
const Box = styled.div`
  flex-grow: 1;

  width: 200px;
  height: 300px;

  min-width: 200px;
  min-height: 300px;

  text-align: left;
  margin: 20px 20px 20px 20px;
  padding: 20px 20px 20px 20px;

  background-color: #242424;
  border-radius: 15px;

  @media (max-width: 600px) {
    width: 90%;
    height: auto;
    margin: 10px 10px 10px 10px;
    padding: 10px 5px 20px 5px;
}
`
const LogoStyle = styled.img`
  position: relative;
  width: 3em;
  height: 3em;
  padding: 0px 10% 0px 5.2%;
  margin-top: 5%;

  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.1) translateY(-5px);
  }

  @media (max-width: 600px) {
    width: 3em;
    height: 3em;
    padding: 0px 2% 0px 6%;
}
`

const StyledA = styled.a`
  postion: relative;
`


