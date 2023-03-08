import React from "react";
import styled from 'styled-components'
import CourseMap from './CourseMap'
import ProjectMap from './ProjectMap'
import Contact from './Contact'
// import aboutSite from './aboutSite'



const Hello = () => {
    return (
        <Wrapper>
            <Hellotext> HELLO. </Hellotext>
            <Line>

              <PortText>a personal portfolio</PortText>
              <Name> by filip hamrelius.</Name>
              <SmallLine1 /> 
              <SmallLine2 /> 

                  <ProjectWrapper> 
                <Heading1> MY PROJECTS</Heading1>
                  <Heading4> freelance- & school projects </Heading4>
                 <ProjectMap /> 
                 </ProjectWrapper>  
                
                 <WrapperEducation> 
                  <Heading1> EDUCATION</Heading1>
                  <Heading4> M.Sc in Media Technology and Engineering </Heading4>
                  <Text> master of science in media technology is a broad program of study in engineering, 
                    where the classic subjects of engineering are mixed with topics such as visualization, 
                    computer graphics, machine learning, interaction design and image processing.</Text>
                   <CourseMap /> 
                 </WrapperEducation> 
                
                 <Wrapper3> 
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
  position: relative;
  width: 100%;
  height: 100%;
  margin: 10px;
`
const Hellotext = styled.h2`
position: absolute;
margin-left: 5%;
margin-top: -3%;
font-family: 'Helvetica Neue';
font-weight: 700;
font-size: 220px;
color: #1F1D1D;
`
const Line = styled.div`
postion: absolute;
width: 0px;
height: 7000px;
margin-top: 5%;
margin-left:10.05%;
border: 17.4px solid #1F1D1D;
`
const SmallLine1 = styled.div`
postion: absolute;
width: 0px;
height: 150px;
margin-top: 153px;
margin-left: 806px;
border: 5.334px solid #282626;
`
const SmallLine2 = styled.div`
postion: absolute;
width: 0px;
height: 240px;
margin-top: 150px;
margin-left: 363.4px;
border: 3.299px solid #282626;
`
// END LINES AND TITLE 

//PROJECT 
const ProjectWrapper = styled.div`
postion: absolute;
width: 1000px;
height: 2000px;
margin-top: 600px;
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





const PortText = styled.h2`
position: absolute;
margin-left: 10%;
margin-top: 13%;
font-family: 'Helvetica Neue';
font-weight: 900;
font-size: 70px;
color: #1F1D1D;
`
const Name = styled.h2`
position: absolute;
margin-left: 10%;
margin-top: 19%;
font-family: 'Helvetica Neue';
font-weight: 900;
font-size: 40px;
color: #1F1D1D;
`










