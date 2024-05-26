import React from "react";
import styled from 'styled-components'

const Info = () => {
    return (
      <Wrapper>
        <Box>
          <Heading1>Software</Heading1>
          <Heading2>I have a strong understanding of development and programming, with experience working with various languages and frameworks. My primary interests lie in the fields of visualization, machine learning, and image processing.</Heading2>
        </Box>

        <Box>
          <Heading1>Design</Heading1>
          <Heading2> Within my studies, as well as through projects outside of school, I have developed a skill set in design, covering everything from UI & UX to project structure and interactive visualizations. </Heading2>
        </Box>

        <Box>
          <Heading1>Social science </Heading1>
          <Heading2> Beyond my technical interests and engineering studies, I have also delved into social science and history courses. I maintain a strong interest in defense engineering as well as security and defense policy, complemented by my military and security experience.</Heading2>
        </Box>
      </Wrapper> 
    )
  }
export default Info

const Wrapper = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
    justify-content: center; 
    align-items: center;
}
`
const Box = styled.div`
  flex-grow: 1;
  width: 20rem;
  height: auto;
  text-align: left;
  margin: 20px 20px 20px 20px;
  padding: 20px 20px 20px 20px;
  padding-bottom: 55px;

  background-color: white;
  border-radius: 15px;

  @media (max-width: 600px) {
    width: 80%;
    height: auto;
    margin: 10px 10px 10px 10px;
    padding: 20px 20px 20px 20px;
}
`

const Heading1 = styled.p`
  postion: relative;
  text-align: left;
  font-family: 'HelveticaAll';
  font-weight: 700;
  font-size: 2em;
  color: black;
  margin-left: 5%;
  margin-top: 4%;

  @media (max-width: 1000px) {
    font-size: 1.5em;
    width: 90%;
  }
`
const Heading2 = styled.p`
  postion: relative;
  text-align: left;
  font-family: 'HelveticaAll';
  font-weight: 700;
  width: 90%;
  font-size: 1em;
  color: black;
  margin-left: 5%;
  margin-top: 4%;

  @media (max-width: 1000px) {
    font-size: 0.7em;
    width: 90%;
  }
`


