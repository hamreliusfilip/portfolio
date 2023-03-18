import React from "react";
import styled from 'styled-components'

const Info = () => {

    return (
      <Contairer>
        <Box>
          <Heading1>PROGRAMMING & DEVELOPMENT</Heading1>
          <Heading2>I have a strong understanding of development and programming, with experience working with various languages and frameworks. </Heading2>
            <LogoStyle src="loggor/c.svg" />
            <LogoStyle src="loggor/python.svg" />
            <LogoStyle src="loggor/matlab.svg" />
            <LogoStyle src="loggor/reactcolor.svg" />
            <LogoStyle src="loggor/jscolor.svg" />
            <LogoStyle src="loggor/three.svg" />
        </Box>

        <Box>
          <Heading1>DESIGN & 3D</Heading1>
          <Heading2> In my free time, I have developed a fascinating interest in design, especially in the realm of 3D elements. I am skilled in a range of tools, from Figma to Blender. </Heading2>
            <LogoStyle src="loggor/blender.svg" />
            <LogoStyle src="loggor/figma.svg" />
            <LogoStyle src="loggor/canva.svg" />
            <LogoStyle src="loggor/ps.svg" />
        </Box>

        <Box>
          <Heading1>SALES & PACKAGING</Heading1>
          <Heading2> Through my experiences in both freelancing and school, I've discovered a passion and skill for technical sales and packaging for products and brands.</Heading2>
            <LogoStyle src="loggor/wix.svg" />
            <LogoStyle src="loggor/shopify.svg" />
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

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 30px;
    margin-top: -12%;
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

  @media (max-width: 600px) {
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

  @media (max-width: 600px) {
    font-size: 0.7em;
    width: 90%;
  }
`
const Box = styled.div`
  flex-grow: 1;
  height: 350px;
  width: 1025px;
  text-align: left;
  margin: -1.3% 20px 20px 20px;
  background-color: #242424;
  border-radius: 15px;
  margin-left: 2%;

  @media (max-width: 600px) {
    margin: 30px;
    min-height: 350px;
    max-width: 800px;
    margin: 30px 0px 0px 0px;
    margin-right: 15%;
}
`
const LogoStyle = styled.img`
  position: relative;
  width: 3em;
  height: 3em;
  padding: 1% 1% 1% 6%;

  @media (max-width: 600px) {
   width: 2em;
  height: 2em;
  }
`

