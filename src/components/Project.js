import styled from 'styled-components'

const Box = styled.div`
height: 500px;
min-width: 800px;
margin: 20px 20px 20px 20px;
background-color: #282626;
text-decoration: none;
`

const Name = styled.div`
  z-index: 1; 
  font-size: 30px;
  margin-top: 20px;
`

const UrlText= styled.div`
z-index: 1; 
font-size: 30px;
margin-top: 20px;
`

const Link = styled.a`
color: #DCDCDC;
font-size: 18px;

&:hover {
	color: white;
	transition: 200ms ease-in;
}
`;

const Info = styled.a`
text-align: left; 
font-size: 20px;
margin-top: 20px;
`

const TextWrapper = styled.div`
text-align:left;
font-family: 'Helvetica Neue';
padding: 10px 20px 20px 20px;
font-weight: bold;
color: #DCDCDC;
`


const Project = (props) => {

  return (
    <Box>
      <TextWrapper> 
      <Name>{props.projectName}</Name>

      <Info>{props.projectDesc}</Info>

      <Link href={props.githubInfo} >
        <UrlText>GITHUB</UrlText>
      </Link>

      <Link href={props.urlInfo} >
        <UrlText>WEBSITE</UrlText>
      </Link>
      </TextWrapper> 
    </Box>
  )
}

export default Project
