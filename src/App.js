import styled from 'styled-components'

import { DarkMode } from './components/DarkMode'
import ProjectMap from './components/ProjectMap'
import Typewriters from './components/TypeWriter'
import Contact from './components/Contact'
import SlideText from './components/SlideText'
import Info from './components/Info'
import Greeting from "./components/Greeting"
import BackTop from './components/backTop'
import Image from './components/Image'
import CourseMap from './components/CourseMap'

function App() {
  return (
    <Wrapper>
      <DarkMode />

      <TitleWrapper id="title">
        <Greeting />
        <SlideText />
      </TitleWrapper>

      <WhatCan id="whatcan">
        <Heading1>MY TOOLKIT</Heading1>
        <Info />
      </WhatCan>

      <ProjectWrapper id="project">
        <Heading1>SOME THINGS I'VE BUILT</Heading1>
        <ProjectMap />
      </ProjectWrapper>

      <ImageWrapper id = "gallery"> 
        <HeadingImage>SOME RENDERS, DESIGNS & PROMOS </HeadingImage>
        <Image />
      </ImageWrapper> 

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

      <Typewriters />
      <BackTop />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  position: relative;
  z-index: 1;
  background-color: var(--background);
  overflow: hidden;
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
  margin-top:15%;

  @media (max-width: 600px) {
    margin-top:70%;
}`
const WhatCan = styled.div`
  postion: absolute;
  z-index: 999;
  width: 100vw;
  margin-top:15%;

  @media (max-width: 600px) {
    margin-top:35%;
}`
const ContactWrapper = styled.div`
  postion: absolute;
  z-index: 999;
  width: 100vw;
  margin-top:15%;

  @media (max-width: 1400px) {
    margin-top:35%;
    flex-direction: row;
    align-items: left; 
    justify-content: left; 
  }`
  
const ImageWrapper = styled.div`
  postion: absolute;
  z-index: 999;
  width: 100vw;
  margin-top:15%;
  background-color: #242424;
  padding: 0.1% 0 0.1% 0;

  @media (max-width: 600px) {
    margin-top:35%;
}
`
const WrapperEducation = styled.div`
  postion: absolute;
  z-index: 999;
  width: 100vw;
  margin-top:15%;

  @media (max-width: 1000px) {
    margin-top:35%;
}`
// ------------------------------ END WRAPPERS ------------------------------ //

// ---------------------------------- TEXT ---------------------------------- //
const Heading1 = styled.h1`
  position: relative;
  margin-left: 2%;
  font-family: 'HelveticaAll';
  font-weight: 700;
  font-size: 5em;
  color: var(--text);

  @media (max-width: 600px) {
    font-size: 3em;
    margin-right: 10%;
}
`
const HeadingImage = styled.h1`
  position: relative;
  margin-left: 2%;
  font-family: 'HelveticaAll';
  font-weight: 700;
  font-size: 3em;
  color: #DCDCDC;

  @media (max-width: 600px) {
    font-size: 1.5em;
    margin-right: 10%;
}
`
const Heading2 = styled.p`
  position: relative;
  margin-left: 2%;
  font-family: 'HelveticaAll';
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
  font-family: 'HelveticaAll';
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