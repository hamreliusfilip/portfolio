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
      <div>
        <form onSubmit={sendEmail}>
          <label>
            Subject:
            <input type="text" name="subject" />
          </label>

          <label>
            Name:
            <input type="text" name="name" />
          </label>

          <label>
            Email:
            <input type="email" name="email" />
          </label>

          <label>
            Message:
            <textarea type="text" name="message" />
          </label>
          
          <label> 
            send
           <input type="submit" value="Send" />
           </label> 

        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative; 
  z-index: 999;

`