import './App.css';
import styled from 'styled-components'

import Typewriters from './components/TypeWriter'
import NavBar from './components/NavBar'
import PortFolioText from './components/PortFolioText'
import Hello from './components/hello'

function App() {
  return (

  <div> 
    <Container>
    <NavBar
      li={[
        ["about."],
        ["projects."],
        ["education."],
        ["contact."],
      ]}
    />
      <Hello />
    </Container>
      
      {/* <Typewriters /> */}
      {/* <ImageWrapper>  */}
      {/* <PortFolioText />  */}
      {/* </ImageWrapper> */}
      {/* <Wrapper2> */}
      {/* <SmoothScroll />  */}
      {/* <Ellipse> */}
      {/* </Ellipse> */}

    </div> 
  
  );
}

export default App;

//WALLPAPER 
const ImgStyle1 = styled.img`
margin-top:-10000px;
`
// background-color: #1F1D1D;
const Container = styled.div`
max-width: 100%;
min-height: 100vh;
justify-content: space-evenly;
width: 100%;
overflow-x: hidden;
background-image: url("SVG/wallpaper.svg");
`

const ImageWrapper = styled.div`
margin-top: 3660px;
padding-left:50%;
background-color: #1F1D1D;
`

const Wrapper2 = styled.div`
  position: absolute;
  right: 0;
  max-width: 100%;
  min-height: 100vh;
  top: 0;
`
const Ellipse = styled.div `
position: absolute;
width: 1200px;
height: 1200px;
left: 1800px;
margin-top:200px;

background: #DCDCDC;
`
const Name = styled.h2`
position: absolute;
margin-left: -2%;
margin-top: 30%;
font-family: 'Helvetica Neue';
font-weight: 900;
font-size: 209px;
color: #DCDCDC;
`
const Text2 = styled.p`
color: #DCDCDC;
line-height: 24px;
font-size: 20px;
width: 500px;
margin-top: 100 px;
color: #1F1D1D;
padding: 30px;
font-weight: 800;
`
const Text = styled.h2`
  color: #DCDCDC;
  line-height: 24px;
  font-size: 100px;
  padding: 30px;
`
