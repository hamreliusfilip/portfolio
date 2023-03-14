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
            <Input type="text" name="subject" placeholder="SUBJECT" />
          </Label>

          <Label>
            <Input type="text" name="name" placeholder="NAME"/>
          </Label>

          <Label>
            <Input type="email" name="email" placeholder="EMAIL" />
          </Label>

          <Label>
            <InputText type="text" name="message" placeholder="MESSAGE" />
          </Label>
          
          <Button type="submit" value="Send" ><SP>Submit</SP></Button>
        </form>
      </Box>
    </Wrapper>
  )
}

const Input = styled.input`
  font-family: 'Helvetica Neue';
  font-size: 1em;
  font-weight: 900;
  padding: 10px 10px 10px 10px;
  border: none;
  outline: none;
  width: 90%;
  text-color: #242424;
  margin: 20px 20px 20px 20px;
  border-radius: 15px;
  background-color: #DCDCDC;
`
const InputText = styled.textarea`
  font-family: 'Helvetica Neue';
  font-size: 0.5em;
  font-weight: 900;
  padding: 10px 10px 10px 10px;
  border: none;
  outline: none;
  width: 90%;
  text-color: #242424;
  margin: 20px 20px 20px 20px;
  border-radius: 15px;
  background-color: #DCDCDC;
`
const Wrapper = styled.div`
  position: relative; 
  z-index: 999;
  margin-left: 2%;
`
const Label = styled.label`
  font-size: 45px;
  font-weight: 900;
  padding: 20px 20px 20px 20px;
  font-family: 'Helvetica Neue';
  color: #FDFDFD;
  max-width:700px;
  text-decoration: none;
  padding: 20px 20px 20px 20px;
  text-align: "." center;
`
const Box = styled.div`
  height: 100%;
  width: 1400px;
  padding: 50px 50px 50px 50px;
  background-color: #242424;
  border-radius: 15px;
`
// BUTTON 
const Button = styled.button`
  padding: 20px 20px 20px 20px;
  font-size: 30px;
  font-weight: 700;
  color: #ff7576;
  background-color: var(--text);
  border: none;
  outline: none;
  cursor: pointer;
  padding: 18px 35px;
  position: relative;
  margin-left: 3.2%;
  line-height: 24px;
  font-family: 'Helvetica Neue';
  border-radius: 9px;
  box-shadow: 0px 1px 2px var(--background);,
    0px 4px 16px var(--background);;
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
