import React from "react";
import styled from 'styled-components'

import CourseMap from './CourseMap'
import ProjectMap from './ProjectMap'
import Typewriters from './TypeWriter'
import Contact from './Contact'
import Mail from './Mail'
import SlideText from './SlideText'
import Info from './Info'
import Greeting from "./Greeting";
import Image from "./Image";

const Hello = () => {
  return (
    <Wrapper>

      <TitleWrapper id="title">
        <Greeting />
        <SlideText />
      </TitleWrapper>

      <ProjectWrapper id="project">
        <Heading1>SOME THINGS I'VE BUILT</Heading1>
        <ProjectMap />
      </ProjectWrapper>

      <WhatCan id="whatcan">
        <Heading1>MY TOOLKIT</Heading1>
        <Info />
      </WhatCan>

      {/* <ImageWrapper> 
        <Heading2>SOME BLENDER RENDERS</Heading2>
        <Image />
      </ImageWrapper> */}

      <WrapperEducation id="education">
        <Heading1>EDUCATION</Heading1>
        <Heading2> Third year M.Sc in Media Technology and Engineering </Heading2>
        <Text> master of science in media technology is a broad program of study in engineering,
          where the classic subjects of engineering are mixed with topics such as visualization,
          computer graphics, machine learning, interaction design and image processing.</Text>
        <CourseMap />
      </WrapperEducation>

      <ContactWrapper id="about">
        <Contact />
      </ContactWrapper>

      <MailWrapper id="mail">
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
  z-index: 8; 
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

  @media (max-width: 600px) {
    margin-top:70%;
}
`
const WrapperEducation = styled.div`
  postion: absolute;
  z-index: 3;
  width: 100vw;
  margin-top:15%;

  @media (max-width: 600px) {
    margin-top:35%;
}
`
const WhatCan = styled.div`
  postion: absolute;
  z-index: 3;
  width: 100vw;
  margin-top:15%;

  @media (max-width: 600px) {
    margin-top:35%;
}
`
const ContactWrapper = styled.div`
  postion: absolute;
  z-index: 3;
  width: 100vw;
  margin-top:15%;

  @media (max-width: 600px) {
    margin-top:35%;
}
`
const MailWrapper = styled.div`
  postion: absolute;
  z-index: 3;
  width: 100vw;
  margin-top:15%;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 

  @media (max-width: 600px) {
    margin-top:35%;
    flex-direction: row;
    align-items: left; 
    justify-content: left; 
    margin-left: 3%;
}
`
const ImageWrapper = styled.div`
  postion: absolute;
  z-index: 3;
  width: 100vw;
  margin-top:15%;

  @media (max-width: 600px) {
    margin-top:35%;
}
`
// ------------------------------ END WRAPPERS ------------------------------ //

// ---------------------------------- TEXT ---------------------------------- //
const Heading1 = styled.h1`
  position: relative;
  margin-left: 2%;
  font-family: 'Helvetica Neue';
  font-weight: 700;
  font-size: 5em;
  color: var(--text);

  @media (max-width: 600px) {
    font-size: 3em;
    margin-right: 10%;
}
`
const Heading2 = styled.p`
  position: relative;
  margin-left: 2%;
  font-family: 'Helvetica Neue';
  font-weight: 700;
  font-size: 2em;
  color: var(--text);
  margin-top: -2%;

  @media (max-width: 600px) {
    font-size: 1em;
    margin-right: 10%;
}
`
const Text = styled.p`
  position: relative;
  margin-left: 2%;
  width: 40%;
  font-family: 'Helvetica Neue';
  font-weight: 700;
  font-size: 1.3em;
  color: var(--text);
  text-align: "." center;

  @media (max-width: 600px) {
    font-size: 0.7em;
    margin-right: 10%;
    width: 90%;
}
`
// ------------------------------ END TEXT ------------------------------ //