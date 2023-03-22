import React from 'react'
import styled from 'styled-components'
import Marquee from 'react-fast-marquee'
import { Link } from "react-scroll"
function BackTop() {
    return (
        <Wrapper>
          <Marquee gradientWidth = '0' speed = '200' > 
            <Link to = "title" spy={true} smooth={true} offset={-500} duration={500}> <Text>GO TO TOP_GO TO TOP_GO TO TOP_GO TO TOP_GO TO TOP_GO TO TOP_GO TO TOP_</Text> </Link>
          </Marquee>
        </Wrapper>
    )
}
export default BackTop; 

const Text = styled.h1`
font-family: 'Helvetica Neue';
font-weight: 500;
font-size: 5em;
color: var(--text);
cursor: pointer;

&:hover {
  transition: all 300ms ease-in-out;
  color: var(--background);
  }

@media (max-width: 600px) {
  font-size: 4em;
  margin-top:0;
}
`
const Wrapper = styled.div`
width: 100%;

@media (max-width: 600px) {
  margin-top: -10%;
}
`