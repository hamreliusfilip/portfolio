import React from 'react'
import styled from 'styled-components'
import { Link } from "react-scroll"
function BackTop() {
    return (
        <Wrapper>
            <Link to = "title" spy={true} smooth={true} offset={-500} duration={500}> <Text>GO TO TOP</Text> </Link>
        </Wrapper>
    )
}
export default BackTop; 

const Text = styled.h1`
font-family: 'HelveticaAll';
font-weight: 800;
font-size: 1.5em;
color: var(--text);
cursor: pointer;
margin-top: 200px;
margin-bottom: 200px;

&:hover {
  transition: all 300ms ease-in-out;
  color: var(--background);
  }

@media (max-width: 600px) {
  font-size: 1em;
  margin-top:0;
}
`
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center; /* Align vertically in the middle */

  @media (max-width: 600px) {
    margin-top: 15%;
  }
`;
