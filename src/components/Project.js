import styled from 'styled-components'

const Box = styled.div`
height: 300px;
min-width: 800px;
margin: 16px -5px 15px 30px;
background-color: #1F1D1D;
font-family: 'Helvetica Neue';
color: #1F1D1D;
text-decoration: none;
`

const Name = styled.div`
  z-index: 1; 
  text-align: center; 
  font-size: 30px;
  font-family: 'Helvetica Neue';
  font-weight: 800;
  color: #DCDCDC;
  padding: 30px 10px 10px 10px;
`

const UrlText= styled.div`
z-index: 1; 
text-align: center; 
font-size: 30px;
font-family: 'Helvetica Neue';
font-weight: 800;
color: #DCDCDC;
padding: 30px 10px 10px 10px;
`

const GithubText = styled.div`
z-index: 1; 
text-align: center; 
font-size: 30px;
font-family: 'Helvetica Neue';
font-weight: 800;
color: #DCDCDC;
padding: 30px 10px 10px 10px;
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

const Project = ({ projectName, githubInfo, urlInfo }) => {

  return (
    <Box>
      <Name>{projectName}</Name>
      <Link href={githubInfo}>
        <GithubText>GITHUB</GithubText>
      </Link>

      <Link href={urlInfo}>
        <UrlText>WEBSITE</UrlText>
      </Link>
    </Box>
  )
}

export default Project
