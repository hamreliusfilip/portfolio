import styled from 'styled-components'

const Container = styled.div`
  z-index: 1; 
  text-align: left;
  margin-left: 150px;
  margin-top: 10%;
  padding: 30px 10px 10px 10px;
`

const Link = styled.a`
color: #DCDCDC;
font-family: 'Helvetica Neue';
font-size: 60px;
font-weight: bold;
text-decoration: none; 

&:hover {
	color: black;
	transition: 200ms ease;
  transition: 200ms ease-out;
}
`;

const Wrapper4 = styled.div`
  position: relative;
  width: 2000px;
  height: 500px;
  margin-left: 20px;
  border: 1px dashed #1F1D1D;
  margin-top: 950px;
`
const AboutSite = styled.p`
position: absolute;
text-align: left;  
font-family: 'Helvetica Neue';
font-weight: 700;
font-size: 40px;
color: black;
`
const Line2 = styled.div`
postion: absolute;
width: 2500px;
height: 0px;
margin-top: 2%;
margin-left:-30%;
border: 300px solid #DCDCDC;
`

const aboutSite = () => {

  return (
    <Wrapper4>
    <AboutSite> about this site.</AboutSite> 
    <Line2 /> 
      </Wrapper4>
  )
}

export default aboutSite
