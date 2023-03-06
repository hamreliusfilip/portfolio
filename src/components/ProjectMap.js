import React from 'react'
import Project from './Project'
import styled from 'styled-components'
import { projectData } from '../data/DB2'

const Total = styled.div`
width: 80vw;
overflow: scroll;
display: flex;
color: #DCDCDC;
&::-webkit-scrollbar {
display: none;
}
`

const Wrapper = styled.div`
margin-top: 2030px;
width: 80vw;
margin-left: 50px;
height: 500x;
`

const Outline = styled.div`
width: 80vw;
height: 250px;
`

const ProjectMap = () => {
  return (
    <Wrapper>
      <Outline>
        <Total>
          {projectData.map(project =>
            <Project
              projectName={project.name}
              githubInfo={project.github}
              projectDesc={project.desc}
              urlInfo={project.url}
            />)}
        </Total>
      </Outline>
    </Wrapper>
  )
}

export { projectData }
export default ProjectMap

