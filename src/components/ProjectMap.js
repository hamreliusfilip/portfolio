import React from 'react'
import Course from './Course'
import Project from './Project'
import styled from 'styled-components'
import { projectData } from '../data/DB2'

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
margin-top: 1130px;
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

const ProjectMap = () => {
  return (
    <Wrapper>
      <Outline>
        <Total>
          {projectData.map(project => <Project
            projectName={project.name}
            githubInfo={project.github}
            urlInfo={project.url} />)}
        </Total>
      </Outline>
    </Wrapper>
  )
}

export { projectData }
export default ProjectMap

