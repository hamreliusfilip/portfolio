import styled from 'styled-components'
import Hello from './components/hello'
import { DarkMode } from './components/DarkMode'


function App() {
  return (
    <div>
      <Container>
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
  
  background-color: var(--background);

  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
`