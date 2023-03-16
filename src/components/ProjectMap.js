import React, { useRef, useState, useEffect } from 'react';
import Project from './Project'
import styled from 'styled-components'
import { projectData } from '../data/DB2'

const ProjectMap = () => {
  const ref1 = useRef(0);
  const ref2 = useRef(0);
  const [scrollLeft1, setScrollLeft1] = useState(0);
  const [scrollLeft2, setScrollLeft2] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const middleScroll = (ref1.current.scrollWidth - ref1.current.clientWidth) / 2;
    ref1.current.scrollLeft = middleScroll;
    setScrollLeft(ref1.current.scrollLeft);
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
    <Wrapper>
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
      </Total>

      {/* <Button disabled={scrollLeft1 === 0} onClick={() => handleScroll1(-1000)}>
        <ImageLeft src="img/arrow.svg" />
      </Button>
      <Button disabled={scrollLeft1 === ref1.current.scrollWidth - ref1.current.clientWidth} onClick={() => handleScroll1(1000)}>
        <ImageRight src="img/arrow.svg" />
      </Button>

      <Button disabled={scrollLeft2 === 0} onClick={() => handleScroll2(-1000)}>
        <ImageLeft src="img/arrow.svg" />
      </Button>
      <Button disabled={scrollLeft2 === ref2.current.scrollWidth - ref2.current.clientWidth} onClick={() => handleScroll2(1000)}>
        <ImageRight src="img/arrow.svg" />
      </Button> */}
      
    </Wrapper>
  );
};

export { projectData }
export default ProjectMap

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