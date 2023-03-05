import React from "react";
import styled from 'styled-components'
import CourseMap from './CourseMap'
import ProjectMap from './ProjectMap'
import Contact from './Contact'

const Hello = () => {
    return (
        <Wrapper>
            <Hellotext> HELLO. </Hellotext>
            <Line>

                <Heading1> MY PROJECTS</Heading1>
                <ProjectMap></ProjectMap>
                
                <Heading2> EDUCATION</Heading2>
                <Heading4> M.Sc in Media Technology and Engineering </Heading4>
                <CourseMap></CourseMap>

                <Wrapper3> 
                <Heading3> CONTACT ME </Heading3>
                <Contact />
                </Wrapper3>
              
            </Line>
        </Wrapper>
    );
};
export default Hello;



const Wrapper = styled.div`
  position: relative;
  width: 1800px;
  height: 4000px;
  border: 1px dashed #1F1D1D;
  margin: 10px;
`
const Hellotext = styled.h2`
position: absolute;
margin-left: 5%;
margin-top: 0;
font-family: 'Helvetica Neue';
font-weight: 700;
font-size: 220px;
color: #DCDCDC;
`
const Line = styled.div`
postion: absolute;
width: 0px;
height: 8000px;
margin-top: 6%;
margin-left:11.3%;
border: 17.5px solid #DCDCDC;
`

const Heading1 = styled.h1`
position: absolute;
margin-left: 80px;
margin-top: 1900px;
font-family: 'Helvetica Neue';
font-weight: 700;
font-size: 100px;
color: #DCDCDC;
`
const Heading2 = styled.h1`
position: absolute;
margin-left: 80px;
margin-top: 2400px;
font-family: 'Helvetica Neue';
font-weight: 700;
font-size: 100px;
color: #DCDCDC;
`


const Wrapper3 = styled.div`
  position: relative;
  width: 2000px;
  height: 500px;
  margin-left: 20px;
  border: 1px dashed #1F1D1D;
  margin-top: 1600px;
`
const Heading3 = styled.h1`
position: absolute;
margin-left: 80px;
font-family: 'Helvetica Neue';
font-weight: 700;
font-size: 100px;
color: #DCDCDC;
`
const Heading4 = styled.p`
position: absolute;
margin-left: 80px;
margin-top: 2525px;
font-family: 'Helvetica Neue';
font-weight: 700;
font-size: 60px;
color: #DCDCDC;
`