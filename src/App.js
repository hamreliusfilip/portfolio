import styled from 'styled-components'
import NavBar from './components/NavBar'
import Hello from './components/hello'
import Mail from './components/Mail'

function App() {
  return (
    <div>

      <Container>
        
        <NavBar />
        <Hello />

        {/* <ImgStyle src = '/grad/gradient.png' />
        <ImgStyle2 src = '/grad/gradient.png' />  */}

        <Mail /> 
      
      </Container>

    </div> 
  );
}

export default App;

const Container = styled.div`
  position: fixed;
  z-index: 8; 
  min-height: 100%;
  justify-content: space-evenly;
  width: 100vw;
  overflow-x: hidden;
`
const ImgStyle = styled.img`
  postion: absolute; 
  z-index: 1;

  margin-left: -20%;
  margin-top: -20%;
`
const ImgStyle2 = styled.img`
  postion: absolute; 
  z-index: -1;

`