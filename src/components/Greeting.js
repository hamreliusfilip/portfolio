import React from 'react'
import styled from 'styled-components'

const Greeting = () => {

    const date = new Date();
    const hour = date.getHours();

    return (
        <Wrapper>
            {hour >= 10 ? hour >= 12 ? hour >= 18 ? <Hellotext>GOOD EVNING.</Hellotext> : <Hellotext>GOOD AFTERNOON.</Hellotext> : <Hellotext>HELLO.</Hellotext> : <Hellotext>GOOD MORNING.</Hellotext>}
        </Wrapper>
    );
  };
  
  export default Greeting

  const Hellotext = styled.h2`
  position: relative;
  margin-left: 10%;
  font-family: 'Helvetica Neue';
  font-weight: bold;
  font-size: 6em;
  color: var(--text);

  @media (max-width: 1000px) {
    font-size: 2em;
  }
`

const Wrapper = styled.div`
max-width: 50%;

`