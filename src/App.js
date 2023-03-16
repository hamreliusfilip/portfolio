import styled from 'styled-components'
import Hello from './components/hello'
import {DarkMode} from './components/DarkMode'
import MenuBar from './components/MenuBar'
import NavBar from './components/NavBar'


function App() {
  return (
    <div>
        <Container>
          {/* <NavBar />   */}
            <DarkMode /> 
          <Hello />
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
  background-color: var(--background);
`