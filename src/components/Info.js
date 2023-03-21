import React from "react";
import styled from 'styled-components'

import c from '../loggor/c.svg'
import python from '../loggor/python.svg'
import matlab from '../loggor/matlab.svg'
import reactcolor from '../loggor/reactcolor.svg'
import jscolor from '../loggor/jscolor.svg'
import three from '../loggor/three.svg'
import blender from '../loggor/blender.svg'
import figma from '../loggor/figma.svg'
import canva from '../loggor/canva.svg'
import ps from '../loggor/ps.svg'
import wix from '../loggor/wix.svg'
import shopify from '../loggor/shopify.svg'
import resolve from '../loggor/resolve.svg'

const Info = () => {
    return (
      <Contairer>
        <Box>
          <Heading1>PROGRAMMING & DEVELOPMENT</Heading1>
          <Heading2>I have a strong understanding of development and programming, with experience working with various languages and frameworks. </Heading2>
            <LogoStyle src={c} />
            <LogoStyle src={python} />
            <LogoStyle src={matlab} />
            <LogoStyle src={reactcolor} />
            <LogoStyle src={jscolor} />
            <LogoStyle src={three} />
        </Box>

        <Box>
          <Heading1>DESIGN & 3D</Heading1>
          <Heading2> In my free time, I have developed a fascinating interest in design, especially in the realm of 3D elements. I am skilled in a range of tools, from Figma to Blender. </Heading2>
            <LogoStyle src={blender} />
            <LogoStyle src={figma} />
            <LogoStyle src={resolve} />
            <LogoStyle src={canva} />
            <LogoStyle src={ps} />
        </Box>

        <Box>
          <Heading1>SALES & PACKAGING</Heading1>
          <Heading2> Through my experiences in both freelancing and school, I've discovered a passion and skill for technical sales and packaging for products and brands.</Heading2>
            <LogoStyle src={wix} />
            <LogoStyle src={shopify} />
        </Box>
      </Contairer> 
    )
  }
export default Info

const Contairer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 30px;
    margin-top: 5%;
}
`
const Heading1 = styled.p`
  postion: relative;
  text-align: left;
  font-family: 'Helvetica Neue';
  font-weight: 700;
  font-size: 2em;
  color: #DCDCDC;
  margin-left: 5%;
  margin-top: 4%;

  @media (max-width: 1300px) {
    font-size: 1.5em;
    width: 90%;
  }
`
const Heading2 = styled.p`
  postion: relative;
  text-align: left;
  font-family: 'Helvetica Neue';
  font-weight: 700;
  width: 70%;
  font-size: 1em;
  color: #DCDCDC;
  margin-left: 5%;
  margin-top: 4%;

  @media (max-width: 1300px) {
    font-size: 0.7em;
    width: 90%;
  }
`
const Box = styled.div`
  flex-grow: 1;
  height: 440px;
  width: 1025px;
  text-align: left;
  margin: -1.3% 20px 20px 20px;
  background-color: #242424;
  border-radius: 15px;
  margin-left: 2%;

  @media (max-width: 1300px) {
    margin: 30px;
    height: 295px;
    width: 90%;
    margin: 50px 0px 0px 0px;
    margin-right: 15%;
}
`
const LogoStyle = styled.img`
  position: relative;
  width: 6em;
  height: 6em;
  padding: 1% 1% 1% 6%;

  @media (max-width: 1300px) {
    width: 5em;
    height: 5em;
  }
`

