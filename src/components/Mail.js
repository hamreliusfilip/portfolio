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
      <Heading1> WRITE SOMETHING </Heading1>
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
          
          <ButtonWrapper> 
            <Button type="submit" value="Send" >submit.</Button>
          </ButtonWrapper>

        </form>
      </Box>
    </Wrapper>
  )
}

const Heading1 = styled.h1`
  position: relative;
  font-family: 'Helvetica Neue';
  font-weight: 700;
  font-size: 4.2em;
  color: var(--text);
  display: flex;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`
const Input = styled.input`
  max-width: 90%;
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
`
const InputText = styled.textarea`
  max-width: 90%;
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
`
const Wrapper = styled.div`
  position: relative; 
  z-index: 999;
  width: 30vw; 
  flex-direction: column;
  align-items: center; 
  justify-content: center;   
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
const Box = styled.div`
  width: 400px;
  padding: 20px 20px 20px 20px;
  background-color: #242424;
  border-radius: 15px;

  @media (max-width: 600px) {
    width: 340px;
}
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

  
  &:hover{
    transition: 0.3s;
    transform: scale(0.93);
  }
`
