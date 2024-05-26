import styled from 'styled-components'

import { DarkMode } from './components/DarkMode'
import ProjectMap from './components/ProjectMap'
import Contact from './components/Contact'
import Info from './components/Info'
import Greeting from "./components/Greeting"
import BackTop from './components/backTop'
import Image from './components/Image'
import CourseMap from './components/CourseMap'
import CourseMap2 from './components/CourseMap2'

import { courseData } from './data/DB'
import { courseData2 } from './data/DB3'
import { courseData3 } from './data/DB4'

function App() {
  return (
    <Wrapper>
      <DarkMode />

      <TitleWrapper id="title">
        <Greeting />
        {/* <SlideText /> */}
        <NewGreeting>Hello, I'm Filip, currently pursuing a master's degree in Media Technology and Engineering. Explore my portfolio by scrolling down to learn more. </NewGreeting>
      </TitleWrapper>

      <WhatCan id="whatcan">
        <Heading1>My toolkit</Heading1>
        <Info />
      </WhatCan>

      <ProjectWrapper id="project">
        <Heading1>Some things I have built</Heading1>
        <ProjectMap />
      </ProjectWrapper>

      <ImageWrapper id = "gallery"> 
        <HeadingImage>Renders, designs & promos </HeadingImage>
        <Image />
      </ImageWrapper> 

      <WrapperEducation id="education">
        <Heading1>Education</Heading1>
        <Heading2> Fourth year M.Sc in Media Technology and Engineering </Heading2>
        <Text> Media Technology a broad engineering program,
          where the classic subjects of engineering are mixed with topics such as visualization,
          computer graphics, machine learning, interaction design and image processing.</Text>

        <Text2 > Bachelor's Courses: </Text2>
        <CourseMap courseData={courseData}> </CourseMap>

        <Text2> Master's Courses: </Text2>
        <CourseMap2 courseData={courseData2}> </CourseMap2>

        <Text2> Standalone Courses: </Text2>
        <CourseMap2 courseData={courseData3}> </CourseMap2>
        
      </WrapperEducation>

      <ContactWrapper id="about">
        <Contact />
      </ContactWrapper>

      <BackTop />
    </Wrapper>
  );
}

export default App;

const NewGreeting = styled.p`
  position: relative;
  margin: 0 auto;
  margin-bottom: 25%;
  margin-top: 20%;
  width: 70%;
  font-family: 'HelveticaAll';
  font-weight: 700;
  font-size: 2em;
  color: var(--text);
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.2em;
    margin-top: 20vh; 
    transform: translateY(-50%); /* Centering trick */
    width: 90%;
  }
`;



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
  font-size: 1.4em;
  color: var(--text);
  text-align: "." center;

  @media (max-width: 600px) {
    font-size: 1em;
    margin-right: 10%;
    width: 90%;
}
`

const Text2 = styled.p`
  position: relative;
  margin-left: 2%;
  width: 40%;
  font-family: 'HelveticaAll';
  font-weight: 800;
  font-size: 2.5em;
  color: var(--text);
  text-align: "." center;
  margin-bottom: -4%;

  @media (max-width: 600px) {
    font-size: 1.4em;
    margin-right: 10%;
    width: 90%;
}
`