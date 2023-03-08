import React from 'react'
import Project from './Project'
import styled from 'styled-components'
import { projectData } from '../data/DB2'

const Total = styled.div`
width: 75vw;
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
`

const ProjectMap = () => {
  return (
    <Wrapper>
        <Total>
          {projectData.map(project =>
            <Project
              projectName={project.name}
              githubInfo={project.github}
              projectDesc={project.desc}
              urlInfo={project.url}
            />)}
        </Total>
    </Wrapper>
  )
}

export { projectData }
export default ProjectMap

