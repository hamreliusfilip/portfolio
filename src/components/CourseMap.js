import React from 'react';
import Course from './Course'
import styled from 'styled-components'
import { courseData } from '../data/DB'
import Marquee from 'react-fast-marquee'

const CourseMap = () => {

  const course1 = courseData.slice(0, courseData.length / 2);
  const course2 = courseData.slice(courseData.length / 2);

  return (
    <Wrapper>
      <Total>
        <Marquee gradientWidth='0' speed='60'>
          {course1.map((course) => (
            <Course
              courseName={course.name}
              courseLink={course.link}
              key={course.coursecCode}
            />
          ))}
        </Marquee>
      </Total>
      <Total>
        <Marquee gradientWidth='0' speed='40'>
          {course2.map((course) => (
            <Course
              courseName={course.name}
              courseLink={course.link}
              key={course.coursecCode}
            />
          ))}
        </Marquee>
      </Total>
    </Wrapper>
  );
};

export { courseData }
export default CourseMap

const Total = styled.div`
  position: relative;
  z-index: 999!important;
  overflow: scroll;
  display: flex;
  color: #DCDCDC;
  width: 100vw;
  
  &::-webkit-scrollbar {
  display: none;
}
`
const Wrapper = styled.div`
  margin-top: 5%;
  width: 100vw;
  position: relative;
`

