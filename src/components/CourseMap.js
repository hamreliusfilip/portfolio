import React, { useRef, useState, useEffect } from 'react';
import Course from './Course'
import styled from 'styled-components'
import { courseData } from '../data/DB'

const CourseMap = () => {

  const ref1 = useRef(0);
  const ref2 = useRef(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const middleScroll = (ref1.current.scrollWidth - ref1.current.clientWidth) / 2;
    ref1.current.scrollLeft = middleScroll;
    setScrollLeft(ref1.current.scrollLeft);
  }, []);

  const course1 = courseData.slice(0, courseData.length / 3);
  const course2 = courseData.slice(courseData.length / 3);

  return (
    <Wrapper>

      <Total ref={ref1}>
        {course1.map((course) => (
          <Course
            courseName={course.name} 
            key={course.coursecCode} 
          />
        ))}
      </Total>

      <Total ref={ref2}>
        {course2.map((course) => (
          <Course
            courseName={course.name} 
            key={course.coursecCode} 
          />
        ))}
      </Total>

    </Wrapper>
  );
};

export { courseData }
export default CourseMap

const Total = styled.div`
  position: relative;
  overflow: scroll;
  display: flex;
  color: #DCDCDC;
  width: 100vw;
  
  &::-webkit-scrollbar {
  display: none;
}
`
const Wrapper = styled.div`
  padding-top: 3%;
  width: 100vw;
  position: relative;
  margin-top:160px;
`
const Button = styled.button`
  position: absolute;
  all: unset;
  cursor: pointer;
  z-index: 4;
  scroll-behavior: smooth;
`
const ImageLeft = styled.img`
  padding: 10px 10px 10px 10px;
  cursor: pointer;
  right:0;
  transform: scaleX(-1);
`
const ImageRight = styled.img`
  left: 0;
  padding: 10px 10px 10px 10px;
  cursor: pointer;
`
