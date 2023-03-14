import styled from 'styled-components'

const Project = (props) => {

  return (
    <Box>
        <Name>{props.projectName}</Name>
      <TextWrapper> 
        <Info>{props.projectDesc}</Info>
      </TextWrapper> 

          <StyledA href = {props.githubInfo} target="_blank"> 
          {
           props.githubInfo ? (<StyledA href={props.githubInfo} target="_blank" rel="noopener noreferrer"><LogoStyle src={"loggor/githubgrey.svg"} alt="github" /></StyledA>) : (null)
          }
          </StyledA>
          
          <StyledA href = {props.urlInfo} target="_blank"> 
          {
            props.urlInfo ? (<StyledA href={props.urlInfo} target="_blank" rel="noopener noreferrer"><LogoStyle src={"loggor/www.svg"} alt="project" /></StyledA>) : (null)
          } 
          </StyledA>
    </Box>
  )
}

export default Project

const Box = styled.div`
  height: 360px;
  min-width: 1050px;
  margin: 20px 20px 20px 20px;
  background-color: #242424;
  border-radius: 15px;
`
const LogoStyle = styled.img`
  postion: relative;
  width: 4em;
  height: 4em;
  padding: 20px 20px 0px 30px;

  cursor:ponter;
  &:hover {
    transition: all 300ms ease-in-out;
    transform: rotate(25deg);
  }
`
const Name = styled.div`
  font-size: 4em;
  font-weight: 900;
  padding: 20px 20px 0px 30px;
  color: #DCDCDC;
`
const Info = styled.a`
  font-size: 1.4em;
  font-weight: 450;
  color: #DCDCDC;
`
const TextWrapper = styled.div`
  font-family: 'Helvetica Neue';
  max-width:95%;
  text-decoration: none;
  padding: 10px 10px 0px 30px;
  text-align: "." center;
`
const StyledA = styled.a`
  postion: relative;
`
