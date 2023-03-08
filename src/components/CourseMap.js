import React from 'react'
import Course from './Course'
import styled from 'styled-components'
import { courseData } from '../data/DB'

const Total = styled.div`
overflow: scroll;
display: flex;
color: #DCDCDC;
&::-webkit-scrollbar {
display: none;
}
`
const Wrapper = styled.div`
margin-top: 10px;
width: 75vw;
margin-left: 65px;
height: 500x;
margin-top:160px;
`

const CourseMap = () => {
  return (
    <Wrapper>
      <Total>
        {courseData.map(course => <Course courseName={course.name} key={course.coursecCode} />)}
      </Total>
    </Wrapper>
  )
}

export { courseData }
export default CourseMap
