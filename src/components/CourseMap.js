import React from 'react'
import Course from './Course'
import styled from 'styled-components'
import { courseData } from '../data/DB'

const Total = styled.div`
z-index:2;
width: 2300px;
overflow: scroll;
display: flex;
color: #1F1D1D;
&::-webkit-scrollbar {
display: none;
}
`
const Text1 = styled.h1`
font-size: 20px;
margin-left: 10px;
font-family: 'Helvetica Neue';
font-weight: 900;
color: #1F1D1D;
`

const Wrapper = styled.div`
margin-top: 2230px;
width: 2400px;
height: 500x;
margin-left:12px;
padding-left:1px;
`

const Outline = styled.div`
margin-left:12px;
width: 2300px;
height: 250px;
padding-left:6px;
padding-right: 10px;
border: 2px dashed black;
`

const CourseMap = () => {
  return (
    <Wrapper>
      <Text1> COMPLETED COURSES</Text1>
      <Outline>
      <Total>
        {courseData.map(course => <Course courseName={course.name} key={course.coursecCode} />)}
      </Total>
      </Outline>
    </Wrapper>
  )
}

export { courseData }
export default CourseMap
