import React from "react";
import styled from 'styled-components'
import CourseMap from './CourseMap'
import ProjectMap from './ProjectMap'
import Contact from './Contact'
import Typewriters from './TypeWriter'
// import aboutSite from './aboutSite'
import Logo from './Logo'



const Hello = () => {
    return (
        <Wrapper>
            <Hellotext id = "hello"> HELLO. </Hellotext>
            <Line>
              <Typewriters />

                <ProjectWrapper id = "project"> 
                <Heading1> MY PROJECTS</Heading1>
                  <Heading4> freelance- & school projects </Heading4>
                 <ProjectMap /> 
                 </ProjectWrapper>  
                
                 <WrapperEducation id = "education"> 
                  <Heading1> EDUCATION</Heading1>
                  <Heading4> Third year M.Sc in Media Technology and Engineering </Heading4>
                  <Text> master of science in media technology is a broad program of study in engineering, 
                    where the classic subjects of engineering are mixed with topics such as visualization, 
                    computer graphics, machine learning, interaction design and image processing.</Text>
                   <CourseMap /> 
                 </WrapperEducation> 
                
                 <Wrapper3 id = "about"> 
                  <Logo/> 
                </Wrapper3> 

            </Line>
        </Wrapper>
    );
};
export default Hello;



// LINES AND TITLE 
const Wrapper = styled.div`
  z-index:2;
  position: absolute;
  min-width: 1800px;
  height: 100%;
  margin: 20px 20px 20px 20px;
`
const Hellotext = styled.h2`
z-index:2;
position: absolute;
margin-left: 1%;
margin-top: 1%;
font-family: 'Helvetica Neue';
font-weight: 700;
font-size: 220px;
color: #303A40;
`
const Line = styled.div`
z-index:2;
postion: realtive;
width: 0px;
height: 100%;
margin-left: 7.30%;
margin-top: 5%;
border: 17.5px solid #303A40;
`
// END LINES AND TITLE 

//PROJECT 
const ProjectWrapper = styled.div`
z-index:3;
postion: absolute;
width: 900px;
height: 2000px;
position: relative;
margin-top: 1200px;
`
const Heading1 = styled.h1`
z-index:3;
margin-left: 80px;
margin-top: 20px;
font-family: 'Helvetica Neue';
position: relative;
font-weight: 700;
font-size: 100px;
color: #303A40;
`
// END PROJECT



// EDUCATION
const WrapperEducation = styled.div`
z-index:3;
postion: absolute;
width: 1000px;
height: 2000px;
position: relative;
margin-top: -800px;
`
const Heading4 = styled.p`
z-index:3;
margin-left: 80px;
margin-top: 20px;
font-family: 'Helvetica Neue';
font-weight: 700;
font-size: 40px;
color: #303A40;
position: relative;
margin-top:-50px;
`
const Text = styled.p`
z-index:3;
position: absolute;
margin-left: 80px;
width: 650px;
font-family: 'Helvetica Neue';
font-weight: 700;
font-size: 20px;
margin-top:-10px;
color: #303A40;
`
// END EDUCATION




// CONTACT
const Wrapper3 = styled.div`
postion: relative;
z-index: 9999 !important;
  position: relative;
  width: 2000px;
  height: 500px;
  margin-left: 20px;
  margin-top: -810px;
`
const Heading3 = styled.h1`
z-index:2;
position: absolute;
margin-left: 80px;
font-family: 'Helvetica Neue';
font-weight: 700;
font-size: 100px;
color: #303A40;
`
// END CONTACT














