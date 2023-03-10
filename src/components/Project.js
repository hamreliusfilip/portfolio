import styled from 'styled-components'

const Box = styled.div`
height: 300px;
min-width: 800px;
margin: 20px 20px 20px 20px;
text-decoration: none;
background-color: #303A40;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 15px;
`
const LogoStyle = styled.img`
postion: relative;
z-index: 9999 !important;
width: 50px;
height: 50px;
margin-top: 30px;
margin-left: 30px;
cursor:pointer;
&:hover {
  transition: all 300ms ease-in-out;
  transform: rotate(25deg);
}
`
const Name = styled.div`
  z-index: 1; 
  font-size: 30px;
  color: #DCDCDC;
  font-weight: 900;
`

const Info = styled.a`
text-align: left; 
font-size: 20px;
color: #DCDCDC;
font-weight: 450;
margin-top:50px;
`

const TextWrapper = styled.div`
text-align:left;
font-family: 'Helvetica Neue';
color: #DCDCDC;
padding: 30px 30px 30px 30px;
`

const StyledA = styled.a`
postion: relative;
z-index: 9999 !important;
`


const Project = (props) => {

  return (
    <Box>
      <TextWrapper> 
        <Name>{props.projectName}</Name>
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
