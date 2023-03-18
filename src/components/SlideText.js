import React from 'react'
import styled from 'styled-components'
import Marquee from 'react-fast-marquee'

function SlideText() {
    return (
        <Wrapper>
          <Marquee gradientWidth = '0' speed = '100'> 
            <Text> personal website portfolio </Text>
          </Marquee>
          <Marquee gradientWidth = '0' speed = '100' direction='right'> 
            <Name> by filip hamrelius.</Name>
          </Marquee>
        </Wrapper>
    )
}

export default SlideText; 

const Text = styled.h1`
font-family: 'Helvetica Neue';
font-weight: bold;
font-size: 4em;
color: var(--text);

@media (max-width: 600px) {
  font-size: 2em;
  margin-top:60%;
}
`
const Name = styled.h1`
font-family: 'Helvetica Neue';
font-weight: bold;
font-size: 4em;
color: var(--text);
margin-top: -0.6%;

@media (max-width: 600px) {
  font-size: 2em;
  mmargin-top: -0.6%;
}
`
const Wrapper = styled.div`
margin-top: 20%;
`