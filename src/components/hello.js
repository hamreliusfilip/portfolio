import React from "react";
import styled from 'styled-components'
import CourseMap from './CourseMap'
import ProjectMap from './ProjectMap'
import Contact from './Contact'
// import aboutSite from './aboutSite'



const Hello = () => {
    return (
        <Wrapper>
            <Hellotext id = "hello"> HELLO. </Hellotext>
            <Line>

              <Name>a portfolio by filip hamrelius</Name>

                <ProjectWrapper id = "project"> 
                <Heading1> MY PROJECTS</Heading1>
                  <Heading4> freelance- & school projects </Heading4>
                 <ProjectMap /> 
                 </ProjectWrapper>  
                
                 <WrapperEducation id = "education"> 
                  <Heading1> EDUCATION</Heading1>
                  <Heading4> M.Sc in Media Technology and Engineering </Heading4>
                  <Text> master of science in media technology is a broad program of study in engineering, 
                    where the classic subjects of engineering are mixed with topics such as visualization, 
                    computer graphics, machine learning, interaction design and image processing.</Text>
                   <CourseMap /> 
                 </WrapperEducation> 
                
                 <Wrapper3 id = "contact"> 
                  <Heading1> CONTACT ME </Heading1>
                  <Contact />
                </Wrapper3> 

                
                {/* <aboutSite />  */}
                
            </Line>
        </Wrapper>
    );
};
export default Hello;


// LINES AND TITLE 
const Wrapper = styled.div`
  position: absolute;
  width: 90%;
  height: 100%;
  margin: 10px;
`
const Hellotext = styled.h2`
position: absolute;
margin-left: 5%;
margin-top: 6%;
font-family: 'Helvetica Neue';
font-weight: 700;
font-size: 220px;
color: #1F1D1D;
`
const Line = styled.div`
postion: realtive;
width: 0px;
height: 7000px;
margin-top: 12%;
margin-left:10.6%;
border: 17.4px solid #1F1D1D;
`

const Name = styled.h2`
position: absolute;
margin-left: 5%;
margin-top: 8%;
font-family: 'Helvetica Neue';
font-weight: 900;
font-size: 40px;
color: #1F1D1D;
`
// END LINES AND TITLE 

//PROJECT 
const ProjectWrapper = styled.div`
postion: absolute;
width: 900px;
height: 2000px;
margin-top: 1200px;
`
const Heading1 = styled.h1`
margin-left: 80px;
margin-top: 20px;
font-family: 'Helvetica Neue';
font-weight: 700;
font-size: 100px;
color: #1F1D1D;
`
// END PROJECT



// EDUCATION
const WrapperEducation = styled.div`
postion: absolute;
width: 1000px;
height: 2000px;
margin-top: -800px;
`
const Heading4 = styled.p`
margin-left: 80px;
margin-top: 20px;
font-family: 'Helvetica Neue';
font-weight: 700;
font-size: 40px;
color: #1F1D1D;
margin-top:-50px;
`
const Text = styled.p`
position: absolute;
margin-left: 80px;
width: 650px;
font-family: 'Helvetica Neue';
font-weight: 700;
font-size: 20px;
margin-top:-10px;
color: #1F1D1D;
`
// END EDUCATION




// CONTACT
const Wrapper3 = styled.div`
  position: relative;
  width: 2000px;
  height: 500px;
  margin-left: 20px;
  margin-top: -810px;
`
const Heading3 = styled.h1`
position: absolute;
margin-left: 80px;
font-family: 'Helvetica Neue';
font-weight: 700;
font-size: 100px;
color: #1F1D1D;
`
// END CONTACT














