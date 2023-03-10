import React, { useRef, useState } from 'react';
import Project from './Project'
import styled from 'styled-components'
import { projectData } from '../data/DB2'



const ProjectMap = () => {

  const ref = useRef(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
    setScrollLeft(ref.current.scrollLeft);
  };

  return (
    <Wrapper>
      <Total ref={ref}>
        {projectData.map(project =>
          <Project
            projectName={project.name}
            githubInfo={project.github}
            projectDesc={project.desc}
            urlInfo={project.url}
            key={project.value}
          />
        )}
      </Total>
      <Button disabled={scrollLeft === 0} onClick={() => handleScroll(-1000)}>
        <ImageLeft src = "img/arrow.svg" />
      </Button>
      <Button disabled={scrollLeft === ref.current.scrollWidth - ref.current.clientWidth} onClick={() => handleScroll(1000)}>
        <ImageRight src = "img/arrow.svg" />
      </Button>
    </Wrapper>
  )
}

export { projectData }
export default ProjectMap

const Total = styled.div`
width: 75vw;
overflow: scroll;
position: relative;
display: flex;
color: #DCDCDC;
z-index:3;
&::-webkit-scrollbar {
display: none;
scroll-behavior: smooth;
}
`

const Wrapper = styled.div`
margin-top: 10px;
width: 75vw;
position: relative;
margin-left: 65px;
z-index:3;
height: 500x;
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
