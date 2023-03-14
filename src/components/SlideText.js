import React from 'react'
import styled from 'styled-components'
import Marquee from 'react-fast-marquee'

function SlideText() {
    return (
        <Wrapper>
          <Marquee pauseOnHover = 'true' gradientWidth = '0' speed = '100'> 
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
`
const LineSmall = styled.hr`
  position: absolute;
  z-index: 999;
  width: 100vw;
  height: 6px;
  color: black;
  background-color: var(--text);
`
const Wrapper = styled.div`
margin-top: 20%;
`