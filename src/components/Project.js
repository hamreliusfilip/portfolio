import styled from 'styled-components'

const Box = styled.div`
height: 500px;
min-width: 800px;
margin: 20px 20px 20px 20px;
font-family: 'Helvetica Neue';
color: #DCDCDC;
background-color: #282626;
text-decoration: none;
`

const Name = styled.div`
  z-index: 1; 
  text-align: left; 
  font-size: 30px;
  font-family: 'Helvetica Neue';
  font-weight: 800;
  color: #DCDCDC;
  margin-top: 20px;
`

const UrlText= styled.div`
z-index: 1; 
text-align: left; 
font-size: 30px;
font-family: 'Helvetica Neue';
font-weight: 800;
color: #DCDCDC;
margin-top: 20px;
`

const Link = styled.a`
color: #DCDCDC;
margin-bottom: 20px;
font-family: 'Helvetica Neue';
font-size: 18px;
font-weight: bold;

&:hover {
	color: white;
	transition: 200ms ease-in;
}
`;

const Info = styled.a`
text-align: left; 
font-size: 20px;
font-family: 'Helvetica Neue';
font-weight: 800;
color: #DCDCDC;
margin-top: 20px;
`


const Project = (props) => {

  return (
    <Box>
      <Name>{props.projectName}</Name>

      <Info>{props.projectDesc}</Info>

      <Link href={props.githubInfo} >
        <UrlText>GITHUB</UrlText>
      </Link>

      <Link href={props.urlInfo} >
        <UrlText>WEBSITE</UrlText>
      </Link>
    </Box>
  )
}

export default Project
