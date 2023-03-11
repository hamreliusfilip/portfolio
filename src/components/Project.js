import styled from 'styled-components'

const Box = styled.div`
height: 360px;
min-width: 900px;
margin: 40px 20px 20px 20px;
background-color: black;
border-radius: 15px;
`
const LogoStyle = styled.img`
postion: relative;
z-index: 9999 !important;
width: 50px;
height: 50px;
padding: 20px 20px 20px 20px;

cursor:ponter;
&:hover {
  transition: all 300ms ease-in-out;
  transform: rotate(25deg);
}
`
const Name = styled.div`
  font-size: 45px;
  font-weight: 900;
  padding: 20px 20px 20px 20px;
`

const Info = styled.a`
font-size: 20px;
font-weight: 450;
`

const TextWrapper = styled.div`
font-family: 'Helvetica Neue';
color: #FDFDFD;
max-width:700px;
text-decoration: none;
padding: 20px 20px 20px 20px;
text-align: "." center;
`

const StyledA = styled.a`
postion: relative;
z-index: 9999 !important;
`


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
