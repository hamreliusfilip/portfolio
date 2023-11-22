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
      <Wrapper>
        <Box>
          <Heading1>SOFTWARE</Heading1>
          <Heading2>I have a strong understanding of development and programming, with experience working with various languages and frameworks. My primary interests lie in the fields of visualization, data science, and image processing.</Heading2>
            <LogoWrapper> 
            <LogoStyle src={c} />
            <LogoStyle src={python} />
            <LogoStyle src={matlab} />
            <LogoStyle src={reactcolor} />
            <LogoStyle src={jscolor} />
            <LogoStyle src={three} />
            </LogoWrapper>
        </Box>

        <Box>
          <Heading1>DESIGN & 3D</Heading1>
          <Heading2> In my free time, I have developed a fascinating interest in design, especially in the realm of 3D elements. I am skilled in a range of tools, from Figma to Blender. </Heading2>
            <LogoWrapper>
            <LogoStyle src={blender} />
            <LogoStyle src={figma} />
            <LogoStyle src={resolve} />
            <LogoStyle src={canva} />
            <LogoStyle src={ps} />
            </LogoWrapper>
        </Box>

        <Box>
          <Heading1>SALES & PACKAGING</Heading1>
          <Heading2> Through my experiences in both freelancing and school, I've discovered a passion and skill for technical sales and packaging for products and brands.</Heading2>
            <LogoWrapper> 
            <LogoStyle src={wix} />
            <LogoStyle src={shopify} />
            </LogoWrapper>
        </Box>
      </Wrapper> 
    )
  }
export default Info

const Wrapper = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center; 
    align-items: center;
}
`
const Box = styled.div`
  flex-grow: 1;
  width: 20rem;
  height: auto;
  text-align: left;
  margin: 20px 20px 20px 20px;
  padding: 20px 20px 20px 20px;

  background-color: #242424;
  border-radius: 15px;

  @media (max-width: 600px) {
    width: 80%;
    height: auto;
    margin: 10px 10px 10px 10px;
    padding: 20px 20px 20px 20px;
}
`
const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-start;
`


const Heading1 = styled.p`
  postion: relative;
  text-align: left;
  font-family: 'HelveticaAll';
  font-weight: 700;
  font-size: 2em;
  color: #DCDCDC;
  margin-left: 5%;
  margin-top: 4%;

  @media (max-width: 1000px) {
    font-size: 1.5em;
    width: 90%;
  }
`
const Heading2 = styled.p`
  postion: relative;
  text-align: left;
  font-family: 'HelveticaAll';
  font-weight: 700;
  width: 90%;
  font-size: 1em;
  color: #DCDCDC;
  margin-left: 5%;
  margin-top: 4%;

  @media (max-width: 1000px) {
    font-size: 0.7em;
    width: 90%;
  }
`
const LogoStyle = styled.img`
  position: relative;
  width: 6em;
  height: 6em;
  padding: 1% 1% 1% 1%;

  @media (max-width: 1000px) {
    width: 5em;
    height: 5em;
  }
`


