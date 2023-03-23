import React from "react";
import styled from 'styled-components'
import emailjs from 'emailjs-com'

import github from '../loggor/githubgrey.svg'
import facebook from '../loggor/facebook.svg'
import linkedin from '../loggor/linkedin.svg'
import instagram from '../loggor/instagram.svg'
import react from '../loggor/react.svg'
import js from '../loggor/js.svg'

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_aya5557', 'template_kg7cebk', e.target, 'RYDwVvTLPB7zm-oNA')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <div>
      <Heading>CONTACT</Heading>
      <Wrapper>
        <Box>
          <Heading1>find me.</Heading1>
          <Text>Feel free to contact me on your preffered platform. Or send me a email with form.</Text>
          <StyledA href="https://github.com/hamreliusfilip" target="_blank">
            <LogoStyle src={github} />
          </StyledA>
          <StyledA href="https://www.facebook.com/filip.hamrelius/" target="_blank">
            <LogoStyle src={facebook} />
          </StyledA>
          <StyledA href="https://www.linkedin.com/in/filip-hamrelius/" target="_blank">
            <LogoStyle src={linkedin} />
          </StyledA>
          <StyledA href="https://www.instagram.com/filiphamrelius/" target="_blank">
            <LogoStyle src={instagram} />
          </StyledA>

          <Heading1>behind site.</Heading1>
          <Text>This website was built using React js. This is an open source project. You can clone or download the project via my Github repository. </Text>
          <LogoStyleStatic src={react} />
          <LogoStyleStatic src={js} />
          <StyledA href="https://github.com/hamreliusfilip/portfolio" target="_blank">
            <LogoStyle src={github} />
          </StyledA>
        </Box>

        <Box>
          <Heading1>send me a message.</Heading1>
          <form onSubmit={sendEmail}>
            <Label>
              <Input type="text" name="subject" placeholder="subject." required/>
            </Label>

            <Label>
              <Input type="text" name="name" placeholder="name." required/>
            </Label>

            <Label>
              <Input type="email" name="email" placeholder="email." required/>
            </Label>

            <Label>
              <InputText type="text" name="message" placeholder="message." required/>
            </Label>

            <ButtonWrapper>
              <Button type="submit" value="Send" >send.</Button>
            </ButtonWrapper>

          </form>
        </Box>
      </Wrapper>
    </div> 
    )
  }
  export default Contact

  const Wrapper = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center; 
    align-items: center;
}
`

const Heading = styled.h1`
  flex-grow: 1;
  position: relative;
  margin-left: 3%;
  font-family: 'Helvetica Neue';
  font-weight: 700;
  font-size: 5em;
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
  font-size: 2em;
  color: #DCDCDC;
  margin-left: 5%;

  @media (max-width: 600px) {
    font-size: 2em;
}
`
const Text = styled.p`
  postion: relative;
  font-family: 'Helvetica Neue';
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
  width: 40rem;
  height: auto;
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
    transform: scale(1.1) translateY(-20px);
  }

  @media (max-width: 600px) {
    width: 3em;
    height: 3em;
    padding: 0px 2% 0px 6%;
}
`
const LogoStyleStatic = styled.img`
  position: relative;
  width: 3em;
  height: 3em;
  padding: 0px 10% 0px 5.2%;
  margin-top: 5%;px 5.2%;
  margin-top: 5%;

  @media (max-width: 600px) {
    width: 3em;
    height: 3em;
    padding: 0px 6% 0px 6%;
}
`
const StyledA = styled.a`
  postion: relative;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`
const Input = styled.input`
  width: 85%;
  height: 30px;
  font-size: 0.6em;
  font-weight: bold;
  border: 2px solid transparent;
  outline: none;
  border-bottom: 2px solid #DCDCDC;
  caret-color: #DCDCDC;
  background-color: #242424;
  padding: 5px;
  transition: .5s linear;
  font-family: helvetica neue;
  letter-spacing: 1px;

  padding: 10px;
  margin:10px;

  &:focus {
    border: 2px solid #DCDCDC;
    caret-color: #DCDCDC;
    color: #DCDCDC;
    border-radius: 15px;
  }

  @media (max-width: 600px) {
    width: 70%;
}
`
const InputText = styled.textarea`
  min-width: 85%;
  max-width: 85%;
  height: 30px;
  resize: vertical; 
  max-height: 120px;
  font-size: 0.6em;
  font-weight: bold;
  border: 2px solid transparent;
  outline: none;
  border-bottom: 2px solid #DCDCDC;
  caret-color: #DCDCDC;
  background-color: #242424;
  padding: 5px;
  transition: .5s linear;
  font-family: helvetica neue;
  letter-spacing: 1px;

  padding: 10px;
  margin:10px;

  &:focus {
    border: 2px solid #DCDCDC;
    caret-color: #DCDCDC;
    color: #DCDCDC;
    border-radius: 15px;
  }

  &::-webkit-resizer {
    display: none;
  }

  @media (max-width: 600px) {
    min-width: 70%;
    max-width: 70%;
}
`
const Label = styled.label`
  flex-grow: 1;
  font-size: 45px;
  font-weight: bold;
  padding: 20px 20px 20px 20px;
  font-family: 'Helvetica Neue';
  text-color: #DCDCDC;
  max-width:700px;
  text-decoration: none;
`
const Button = styled.button`
  flex-grow: 2;
  font-size: 2em;
  font-weight: bold;
  color: #242424;
  background-color: #DCDCDC;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 13px 30px;
  font-family: 'Helvetica Neue';
  border-radius: 9px;
  max-width: 50%;

  &:hover{
    transition: 0.3s;
    transform: scale(0.93);
  }
`


