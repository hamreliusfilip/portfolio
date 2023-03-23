import React, { useRef, useState, useEffect } from 'react';
import Project from './Project'
import styled from 'styled-components'
import { projectData } from '../data/DB2'

import arrow from '../loggor/arrow.svg'

const ProjectMap = () => {
  const ref1 = useRef(0);
  const ref2 = useRef(0);
  const [scrollLeft1, setScrollLeft1] = useState(0);
  const [scrollLeft2, setScrollLeft2] = useState(0);

  useEffect(() => {
    const middleScroll = (ref1.current.scrollWidth - ref1.current.clientWidth) * 2;
    ref1.current.scrollLeft = middleScroll;
    setScrollLeft1(ref1.current.scrollLeft);
  }, []);

  const handleScroll1 = (scrollOffset) => {
    ref1.current.scrollLeft += scrollOffset;
    setScrollLeft1(ref1.current.scrollLeft);
  };

  const handleScroll2 = (scrollOffset) => {
    ref2.current.scrollLeft += scrollOffset;
    setScrollLeft2(ref2.current.scrollLeft);
  };

  const projects1 = projectData.slice(0, projectData.length / 2);
  const projects2 = projectData.slice(projectData.length / 2);

  return (
    <div>
      <Wrapper>
        <ButtonWrapperLeft disabled={scrollLeft1 === 0} onClick={() => handleScroll1(-280)}>
            <ImageLeft src={arrow} />
        </ButtonWrapperLeft>
        <Total ref={ref1}>
          {projects1.map((project) => (
            <Project
              projectName={project.name}
              githubInfo={project.github}
              projectDesc={project.desc}
              urlInfo={project.url}
              key={project.value}
            />
          ))}
        </Total>
        <ButtonWrapperRight disabled={scrollLeft1 === ref1.current.scrollWidth - ref1.current.clientWidth} onClick={() => handleScroll1(280)}>
            <ImageRight src={arrow} />
        </ButtonWrapperRight>
      </Wrapper>

      <Wrapper>
        <ButtonWrapperLeft disabled={scrollLeft2 === 0} onClick={() => handleScroll2(-280)}>
            <ImageLeft src={arrow} />
        </ButtonWrapperLeft>
        <Total ref={ref2}>
          {projects2.map((project) => (
            <Project
              projectName={project.name}
              githubInfo={project.github}
              projectDesc={project.desc}
              urlInfo={project.url}
              key={project.value}
            />
          ))}
        </Total >
        <ButtonWrapperRight disabled={scrollLeft2 === ref2.current.scrollWidth - ref2.current.clientWidth} onClick={() => handleScroll2(280)}>
            <ImageRight src={arrow} />
        </ButtonWrapperRight>
      </Wrapper>
    </div>
  );
};

export { projectData }
export default ProjectMap

const ButtonWrapperLeft = styled.button`
  all: unset;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999!important;
  background-color: white; 
  opacity: 0;
  height: 70%;
  margin-top: 50px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 15px;

  &:hover {
    opacity: 0.2;
    transition: 0.5s;
  }
`
const ButtonWrapperRight = styled.button`
  all: unset;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 999!important;
  background-color: white; 
  opacity: 0;
  height: 70%;
  margin-top: 50px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 15px;

  &:hover {
    opacity: 0.2;
    transition: 0.5s;
  }
`
const ImageLeft = styled.img`
  right:0;
  transform: scaleX(-1);
`
const ImageRight = styled.img`
  left: 0;
  cursor: pointer;
`
const Total = styled.div`
  position: relative;
  align: center;
  width: 100vw;
  overflow: scroll;
  display: flex;
  color: #DCDCDC;
  z-index:3;
  
  &::-webkit-scrollbar {
  display: none;
  scroll-behavior: smooth;
  }
`
const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  z-index:3;
`