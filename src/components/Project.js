import styled from 'styled-components'

import www from '../loggor/www.svg'
import github from '../loggor/githubgrey.svg'

const Project = (props) => {

  return (
    <Box>
        <Name>{props.projectName}</Name>

        <TextWrapper> 
          <Info>{props.projectDesc}</Info>
        </TextWrapper> 

      <Links>
        {
          props.githubInfo ? (<a href={props.githubInfo} target="_blank" rel="noopener noreferrer"><LogoStyle src={github} alt="GITHUB" /></a>) : (null)
        }
        {
          props.urlInfo ? (<a href={props.urlInfo} target="_blank" rel="noopener noreferrer"><LogoStyle src={www} alt="WEBSITE" /></a>) : (null)
        }
      </Links>
    </Box>
  )
}
export default Project

const Box = styled.div`
  height: 160px;
  width: 500px;
  min-height: 270px;
  min-width: 600px;
  margin: 20px 20px 20px 20px;
  background-color: #242424;
  border-radius: 15px;

  @media (max-width: 600px) {
    height: 255px;
    min-width: 350px;
    margin: 10px 10px 10px 10px;
  }
`
const LogoStyle = styled.img`
  postion: relative;
  width: 3em;
  height: 3em;
  padding: 20px 20px 0px 30px;
  cursor:ponter;

  &:hover {
    transition: all 300ms ease-in-out;
    transform: scale(1.15);
  }

  @media (max-width: 600px) {
    width: 3em;
    height: 3em;
  }
`
const Name = styled.div`
  font-size: 2em;
  font-weight: 900;
  padding: 20px 20px 0px 30px;
  color: #DCDCDC;

  @media (max-width: 600px) {
    font-size: 1.5em;
  }
`
const Info = styled.a`
  font-size: 0.8em;
  font-weight: 450;
  color: #DCDCDC;

  @media (max-width: 600px) {
    font-size: 0.7em;
  }
`
const TextWrapper = styled.div`
  font-family: 'Helvetica Neue';
  max-width:95%;
  text-decoration: none;
  padding: 10px 10px 0px 30px;
  text-align: "." center;
`

const Links = styled.div`
display: flex;
justify-content: flex-end;
margin: -5px -4px;
float: left; 
`