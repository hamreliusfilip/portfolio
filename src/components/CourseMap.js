import React, { useRef, useState } from 'react';
import Course from './Course'
import styled from 'styled-components'
import { courseData } from '../data/DB'

const Total = styled.div`
z-index:3;
position: relative;
overflow: scroll;
display: flex;
color: #DCDCDC;
width: 73vw;
&::-webkit-scrollbar {
display: none;
}
`
const Wrapper = styled.div`
z-index:3;
width: 72vw;
position: relative;
margin-top: 10px;
margin-left: 65px;
height: 500x;
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


const CourseMap = () => {

  const ref = useRef(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
    setScrollLeft(ref.current.scrollLeft);
  };

  return (
    <Wrapper>
      <Total ref={ref}>
        {courseData.map(course => <Course 
        courseName={course.name} 
        key={course.coursecCode} />)}
      </Total>
      <Button disabled={scrollLeft === 0} onClick={() => handleScroll(-800)}>
        <ImageLeft src = "img/arrow.svg" />
      </Button>
      <Button disabled={scrollLeft === ref.current.scrollWidth - ref.current.clientWidth} onClick={() => handleScroll(800)}>
        <ImageRight src = "img/arrow.svg" />
      </Button>
    </Wrapper>
  )
}

export { courseData }
export default CourseMap
