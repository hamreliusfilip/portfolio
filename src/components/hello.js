import React from "react";
import styled from 'styled-components'
import CourseMap from './CourseMap'
import ProjectMap from './ProjectMap'
import Typewriters from './TypeWriter'
import Contact from './Contact'
import Mail from './Mail'
import SlideText from './SlideText'
import Info from './Info'



const Hello = () => {
  return (
    <Wrapper>
      
        <TitleWrapper id="title">
          <Hellotext>HELLO.</Hellotext>
          
          
        </TitleWrapper>

        <SlideText /> 

        <ProjectWrapper id="project">
          <Heading1>SOME THINGS I'VE BUILT</Heading1>
          <ProjectMap />
        </ProjectWrapper>


        <WhatCan> 
          <Heading1>WHAT CAN I DO?</Heading1>
          <Info />
        </WhatCan>
        

        <WrapperEducation id="education">
          <Heading1>EDUCATION</Heading1>
          <Heading2> Third year M.Sc in Media Technology and Engineering </Heading2>
          <Text> master of science in media technology is a broad program of study in engineering,
            where the classic subjects of engineering are mixed with topics such as visualization,
            computer graphics, machine learning, interaction design and image processing.</Text>
          <CourseMap />
        </WrapperEducation>


        <ContactWrapper id = "about">
          <Contact />
        </ContactWrapper>
 

        <MailWrapper id = "mail">
          <Heading1>WRITE SOMETHING</Heading1>
          <Mail />
        </MailWrapper>

        <Typewriters />
      
    </Wrapper>
  );
};
export default Hello;


// ------------------------------ WRAPPERS ------------------------------ // 
const Wrapper = styled.div`
  position: absolute;
  z-index: 9; 
  height: 100%;
`
const TitleWrapper = styled.div`
  postion: absolute;
  z-index: 3;
  width: 100vw;
`
const ProjectWrapper = styled.div`
  postion: absolute;
  z-index: 3;
  width: 100vw;
  margin-top:25%;
`
const WrapperEducation = styled.div`
  postion: absolute;
  z-index: 3;
  width: 100vw;
  margin-top:10%;
`

const WhatCan = styled.div`
  postion: absolute;
  z-index: 3;
  width: 100vw;
  margin-top:10%;
`

const ContactWrapper = styled.div`
  postion: absolute;
  z-index: 3;
  width: 100vw;
  margin-top:10%;
`
const MailWrapper = styled.div`
  postion: absolute;
  z-index: 3;
  width: 100vw;
  margin-top:10%;
`
// ------------------------------ END WRAPPERS ------------------------------ //



// ---------------------------------- TEXT ---------------------------------- //
const Hellotext = styled.h2`
  position: absolute;
  margin-left: 2%;
  margin-top: -4%;
  font-family: 'Helvetica Neue';
  font-weight: bold;
  font-size: 10em;
  color: var(--text);
`
const Heading1 = styled.h1`
  position: relative;
  margin-left: 2%;
  font-family: 'Helvetica Neue';
  font-weight: 700;
  font-size: 8em;
  color: var(--text);
`
const Heading2 = styled.p`
  position: relative;
  margin-left: 2%;
  font-family: 'Helvetica Neue';
  font-weight: 700;
  font-size: 2em;
  color: var(--text);
  margin-top: -2%;
`
const Text = styled.p`
  position: absolute;
  margin-left: 2%;
  width: 23%;
  font-family: 'Helvetica Neue';
  font-weight: 700;
  font-size: 1.3em;
  color: var(--text);
  text-align: "." center;
`
// ------------------------------ END TEXT ------------------------------ //



// ------------------------------ IMAGES ------------------------------ //
const ImgStyle = styled.div`
  background-image: url('/grad/gradient.png');
  postion: absolute; 
  z-index: 1;

  margin-top: -500px;
  margin-left: -500px;
`
const ImgStyle2 = styled.div`
  postion: absolute; 
  z-index: 999;

  background-image: url('/grad/gradient.png');

  margin-top: -48%;
  margin-left: 0px;

  width: 2000px;
  height: 2000px;

  transform: scaleY(-1);
`
const ImgStyle3 = styled.div`
  postion: absolute; 
  z-index: 1;

  margin-left: 50%;
  margin-top: -5%;

  width: 2200px;
  height: 2200px;

  transform: scaleX(-1);
`

// ------------------------------ END IMAGES ------------------------------ //

// -------------------------------- LINES --------------------------------- //
const LineSmall = styled.hr`
  position: absolute;
  z-index: 999;
  width: 100vw;
  height: 6px;
  color: black;
  background-color: #242424;
  margin: 100px 0px 0px 0px;
`
// ------------------------------ END LINES ------------------------------ //