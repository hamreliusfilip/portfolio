import React from 'react';
import styled from 'styled-components'
import Course from './Course'
import Marquee from 'react-fast-marquee'

const CourseMap = ({ courseData }) => {

  return (
    <Wrapper>
      <Total>
        <Marquee gradientWidth='0' speed='60'>
          {courseData.map((course) => (
            <Course
              courseName={course.name}
              courseLink={course.link}
              key={course.key}
            />
          ))}
        </Marquee>
      </Total>
    </Wrapper>
  );
};
export default CourseMap

const Total = styled.div`
  position: relative;
  z-index: 999!important;
  overflow: scroll;
  display: flex;
  color: #DCDCDC;
  width: 100vw;

`

const Wrapper = styled.div`
  margin-top: 5%;
  width: 100vw;
  position: relative;
`
