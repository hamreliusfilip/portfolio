import './App.css';
import styled from 'styled-components'
import NavBar from './components/NavBar'
import Hello from './components/hello'

function App() {
  return (
    <div>
      <Container>
        <NavBar />
        <Hello />
      </Container>
    </div> 
  );
}

export default App;

const Container = styled.div`
position: fixed;
min-height: 100%;
justify-content: space-evenly;
width: 100%;
overflow-x: hidden;
// background-image: url("grad/TempWallpaper2.svg");
`