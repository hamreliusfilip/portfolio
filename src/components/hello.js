import React from "react";
import styled from 'styled-components'
import CourseMap from './CourseMap'

const Hello = () => {
    return (
        <Wrapper>
            <Hellotext> HELLO. </Hellotext>
            <Line>
                <Heading1> PROJECTS</Heading1>
                <Heading2> EDUCATION</Heading2>
                <Heading4> M.Sc in Media Technology and Engineering </Heading4>
                <CourseMap></CourseMap>
                <Heading3> CONTACT </Heading3>
            </Line>
        </Wrapper>
    );
};
export default Hello;



const Wrapper = styled.div`
  position: relative;
  width: 1800px;
  height: 4000px;
  border: 1px dashed #DCDCDC;
  margin: 10px;
`
const Hellotext = styled.h2`
position: absolute;
margin-left: 5%;
margin-top: 0;
font-family: 'Helvetica Neue';
font-weight: 700;
font-size: 220px;
color: #1F1D1D;
`
const Line = styled.div`
postion: absolute;
width: 0px;
height: 6000px;
margin-top: 6%;
margin-left:11.3%;
border: 17.5px solid #1F1D1D;
`
const Heading1 = styled.h1`
position: absolute;
margin-left: 20px;
margin-top: 1000px;
font-family: 'Helvetica Neue';
font-weight: 700;
font-size: 100px;
color: #1F1D1D;
`
const Heading2 = styled.h1`
position: absolute;
margin-left: 20px;
margin-top: 2000px;
font-family: 'Helvetica Neue';
font-weight: 700;
font-size: 100px;
color: #1F1D1D;
`
const Heading3 = styled.h1`
position: absolute;
margin-left: 20px;
margin-top: 1800px;
font-family: 'Helvetica Neue';
font-weight: 700;
font-size: 100px;
color: #1F1D1D;
`

const Heading4 = styled.p`
position: absolute;
margin-left: 20px;
margin-top: 2125px;
font-family: 'Helvetica Neue';
font-weight: 700;
font-size: 60px;
color: #1F1D1D;
`