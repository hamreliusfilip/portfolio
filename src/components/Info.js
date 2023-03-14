import React from "react";
import styled from 'styled-components'

const Info = () => {

    return (
      <Contairer>
        <Box>
          <Heading1>programming & development</Heading1>
          <Heading2>I have a broad knowlage of development and programming and CS as a whole. Here are some of my favorites languages and frameworks. </Heading2>
            <LogoStyle src="loggor/c.svg" />
            <LogoStyle src="loggor/python.svg" />
            <LogoStyle src="loggor/reactcolor.svg" />
            <LogoStyle src="loggor/jscolor.svg" />
            <LogoStyle src="loggor/matlab.svg" />
            <LogoStyle src="loggor/three.svg" />
        </Box>

        <Box>
          <Heading1>design & 3D</Heading1>
          <Heading2> On my free time a have developed a facinateing intreset for design and 3D elements in particular, I have worked in everything from Figma to Blender. </Heading2>
            <LogoStyle src="loggor/blender.svg" />
            <LogoStyle src="loggor/figma.svg" />
            <LogoStyle src="loggor/canva.svg" />
            <LogoStyle src="loggor/ps.svg" />
            <LogoStyle src="loggor/davinci.svg" />
        </Box>

        <Box>
          <Heading1>sales & packaging</Heading1>
          <Heading2> With both freelance and school envolvment I have developed both a intrest and talent in technical sales and packging of products and brands.</Heading2>
            <LogoStyle src="loggor/wix.svg" />
            <LogoStyle src="loggor/shopify.svg" />
        </Box>
      </Contairer> 
    )
  }
  
  export default Info

const Contairer = styled.div`
  display: flex;
  flex-direction: colomn;
  width: 100%;
`

const Heading1 = styled.p`
  postion: relative;
  font-family: 'Helvetica Neue';
  font-weight: 700;
  font-size: 4em;
  color: #DCDCDC;
  margin-left: 5%;
  margin-top: 4%;
`
const Heading2 = styled.p`
  postion: relative;
  font-family: 'Helvetica Neue';
  font-weight: 700;
  width: 60%;
  font-size: 2em;
  color: #DCDCDC;
  margin-left: 5%;
  margin-top: 4%;
`
const Box = styled.div`
  flex-grow: 1;
  min-height: 750px;
  max-width: 1025px;
  margin: -1.3% 20px 20px 20px;
  background-color: #242424;
  border-radius: 15px;
  margin-left: 2%;
`
const LogoStyle = styled.img`
  position: relative;
  width: 6em;
  height: 6em;
  padding: 4% 5% 0px 5%;

  cursor: pointer;
  &:hover {
    transition: all 0.3s ease-in-out;
    transform: scale(1.3) translateY(-20px);
  }
`

