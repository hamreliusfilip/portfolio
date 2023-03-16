import React from 'react'
import styled from 'styled-components'
import Marquee from 'react-fast-marquee'

function SlideText() {
    return (
        <Wrapper>
          <Marquee gradientWidth = '0' speed = '100'> 
            <Text> a personal website by filip hamrelius . . . . . .  . </Text>
          </Marquee>
        </Wrapper>
    )
}

export default SlideText; 

const Text = styled.h1`
font-family: 'Helvetica Neue';
font-weight: bold;
font-size: 10em;
color: var(--text);

@media (max-width: 600px) {
  font-size: 2em;
  margin-top:40%;
}
`
const Wrapper = styled.div`
margin-top: 20%;
`