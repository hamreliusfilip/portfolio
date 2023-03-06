import React from 'react'
import Course from './Course'
import styled from 'styled-components'
import { courseData } from '../data/DB'

const Total = styled.div`
width: 80vw;
overflow: scroll;
display: flex;
color: #DCDCDC;
&::-webkit-scrollbar {
display: none;
}
`
const Text1 = styled.h1`
font-size: 20px;
font-family: 'Helvetica Neue';
font-weight: 900;
color: #DCDCDC;
margin-left: 30px;
`

const Wrapper = styled.div`
margin-top: 2660px;
width: 80vw;
margin-left: 50px;
height: 600x;
`

const Outline = styled.div`
width: 3500px;
height: 300px;
`

const CourseMap = () => {
  return (
    <Wrapper>
      <Text1> completed courses: </Text1>
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
