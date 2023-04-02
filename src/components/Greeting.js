import React from 'react'
import styled from 'styled-components'

const Greeting = () => {
    const date = new Date();
    const hour = date.getHours();

    return (
        <Wrapper>
            {hour >= 10 ? hour >= 12 ? hour >= 18 ? <Hellotext>GOOD EVENING.</Hellotext> : <Hellotext>GOOD AFTERNOON.</Hellotext> : <Hellotext>HELLO.</Hellotext> : <Hellotext>GOOD MORNING.</Hellotext>}
        </Wrapper>
    );
  };
  
  export default Greeting

  const Hellotext = styled.h2`
  position: relative;
  margin-left: 7%;
  margin-top: 3%;
  font-family: 'HelveticaAll';
  font-weight: bold;
  font-size: 8em;
  color: var(--text);

  @media (max-width: 1000px) {
    font-size: 3em;
    max-width: 95%;
  }
`
const Wrapper = styled.div`
max-width: 50%;
`
