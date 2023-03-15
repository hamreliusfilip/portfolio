import React from 'react'; 
import emailjs from 'emailjs-com'
import styled from 'styled-components'

export default function mail(){ 

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
    <Wrapper>
      <Box>
        <form onSubmit={sendEmail}>
          <Label>
            <Input type="text" name="subject" placeholder="subject" />
          </Label>

          <Label>
            <Input type="text" name="name" placeholder="name"/>
          </Label>

          <Label>
            <Input type="email" name="email" placeholder="email" />
          </Label>

          <Label>
            <InputText type="text" name="message" placeholder="message" />
          </Label>
          
          <Button type="submit" value="Send" >submit.</Button>
        </form>
      </Box>
    </Wrapper>
  )
}

const Input = styled.input`
  max-width: 50%;
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

  margin: 20px;

  &:focus {
    border: 2px solid #DCDCDC;
    caret-color: #DCDCDC;
    color: #DCDCDC;
    border-radius: 15px;
  }
`
const InputText = styled.textarea`
  max-width: 66%;
  min-width: 66%;
  height: 30px;
  font-size: 0.6em;
  font-weight: bold;
  text-color: #DCDCDC;
  border: 2px solid transparent;
  outline: none;
  border-bottom: 2px solid #DCDCDC;
  caret-color: #DCDCDC;
  background-color: #242424;
  padding: 5px;
  transition: .5s linear;
  font-family: helvetica neue;
  letter-spacing: 1px;

  margin: 20px;

  &:focus {
    border: 2px solid #DCDCDC;
    caret-color: #DCDCDC;
    color: #DCDCDC;
    border-radius: 15px;
  }
`
const Wrapper = styled.div`
  position: relative; 
  z-index: 999;
  margin-left: 2%;
  width: 50vw; 
  align-items: center;
  display: flex;
  flex-direction: coloumn;
`
const Label = styled.label`
  flex-grow: 1;
  font-size: 45px;
  font-weight: 900;
  padding: 20px 20px 20px 20px;
  font-family: 'Helvetica Neue';
  text-color: #DCDCDC;
  max-width:700px;
  text-decoration: none;
  text-align: "." center;
`
const Box = styled.div`
  height: 100%;
  width: 50vw;
  padding: 20px 20px 20px 20px;
  background-color: #242424;
  border-radius: 15px;
`
// BUTTON 
const Button = styled.button`
  flex-grow: 2;
  margin-left: 5%;
  font-size: 2em;
  algin-items: center;
  font-weight: bold;
  color: var(--background);
  background-color: var(--text);
  border: none;
  outline: none;
  cursor: pointer;
  padding: 18px 35px;
  position: relative;
  line-height: 24px;
  font-family: 'Helvetica Neue';
  border-radius: 9px;

  &:hover{
    transition: 0.3s;
    transform: scale(0.93);
  }
`
