import React from "react";
import styled from 'styled-components'
import CourseMap from './CourseMap'
import ProjectMap from './ProjectMap'
import Typewriters from './TypeWriter'
import Logo from './Logo'
import { ScrollReveal } from "reveal-on-scroll-react"

const Hello = () => {
  return (
    <Wrapper>
      <Hellotext id="hello"> HELLO. </Hellotext>
      {/* <Line> */}
      <Typewriters />

      
      <ImgStyle src='/grad/gradient.png' />

      <ProjectWrapper id="project">
        <Heading1> MY PROJECTS</Heading1>
        <Heading4> freelance- & school projects </Heading4>
        <ProjectMap />
      </ProjectWrapper>

      <ImgStyle2 src='/grad/gradient.png' />

      <WrapperEducation id="education">
        <Heading1> EDUCATION</Heading1>
        <Heading4> Third year M.Sc in Media Technology and Engineering </Heading4>
        <Text> master of science in media technology is a broad program of study in engineering,
          where the classic subjects of engineering are mixed with topics such as visualization,
          computer graphics, machine learning, interaction design and image processing.</Text>
        <CourseMap />
      </WrapperEducation>

      <ImgStyle src='/grad/gradient.png' />

      <Wrapper3 id="about">
        <Logo />
      </Wrapper3>
      {/* </Line> */}
    </Wrapper>
  );
};
export default Hello;



// LINES AND TITLE 
const Wrapper = styled.div`
  position: absolute;
  z-index: 9; 
  min-width: 1800px;
  height: 100%;
`
const Hellotext = styled.h2`
  position: absolute;
  margin-left: 5%;
  margin-top: 1%;
  font-family: 'Helvetica Neue';
  font-weight: 700;
  font-size: 220px;
  color: black;
`
const Line = styled.div`
  postion: realtive;
  z-index: 9; 
  width: 0px;
  height: 4150px;
  margin-left: 7.30%;
  margin-top: 5%;
  border: 17.5px solid black;
`
// END LINES AND TITLE 

//PROJECT 
const ProjectWrapper = styled.div`
postion: absolute;
z-index: 3;
width: 100vw;
`
const Heading1 = styled.h1`
  position: relative;
  margin-left: 5%;
  font-family: 'Helvetica Neue';
  font-weight: 700;
  font-size: 8em;
  color: black;
`
// END PROJECT

// EDUCATION
const WrapperEducation = styled.div`
  postion: absolute;
  z-index: 3;
  width: 100vw;
  margin-top: -800px;
`
const Heading4 = styled.p`
  position: relative;
  margin-left: 5%;
  font-family: 'Helvetica Neue';
  font-weight: 700;
  font-size: 2em;
  color: black;
`
const Text = styled.p`
  position: absolute;
  margin-left: 5%;
  width: 650px;
  font-family: 'Helvetica Neue';
  font-weight: 700;
  font-size: 20px;
  color: black;
`
// END EDUCATION

// CONTACT
const Wrapper3 = styled.div`
  position: relative;
  z-index: 3;
  width: 2000px;
  height: 500px;
  margin-left: 20px;
  margin-top: -810px;
`
// END CONTACT

const ImgStyle = styled.img`
  postion: absolute; 
  z-index: 1;

  margin-top: -500px;
  margin-left: -500px;

  width: 2000px;
  height: 2000px;
`

const ImgStyle2 = styled.img`
  postion: absolute; 
  z-index: 1;

  margin-top: -500px;
  margin-left: -500px;

  width: 2000px;
  height: 2000px;

  transform: scaleY(-1);
`












