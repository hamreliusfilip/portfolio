import React from 'react'
import styled from 'styled-components'

const Greeting = () => {
    const date = new Date();
    const hour = date.getHours();

    return (
        <Wrapper>
            {hour >= 10 ? hour >= 12 ? hour >= 18 ? <Hellotext>Good evening</Hellotext> : <Hellotext>Good afternoon</Hellotext> : <Hellotext>Hello</Hellotext> : <Hellotext>Good morning</Hellotext>}
        </Wrapper>
    );
  };
  
  export default Greeting

  const Hellotext = styled.h2`
  position: relative;
  margin-left: 7%;
  margin-top: 7%;
  font-family: 'HelveticaAll';
  font-weight: bold;
  font-size: 5em;
  color: var(--text);

  @media (max-width: 1000px) {
    font-size: 3em;
    max-width: 95%;
  }
`
const Wrapper = styled.div`
max-width: 50%;
`
