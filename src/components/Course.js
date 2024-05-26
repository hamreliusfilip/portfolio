import styled from 'styled-components'

const Course = (props) => {
  return (
    <StyledA href={props.courseLink} target="_blank">
      <Box>
        <Name>{props.courseName}</Name>
      </Box>
    </StyledA>
  )
}
export default Course

const Box = styled.div`
  height: 100px;
  width: 400px;
  margin: 10px;
  text-decoration: none;
  background-color: white;
  border-radius: 15px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: all 300ms ease-in-out;
    transform: scale(1.05);
  }

  @media (max-width: 600px) {
    font-size: 0.8em;
    height: 100px;
    width: 225px;
    margin: 10px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`

const Name = styled.div`
  z-index: 500; 
  text-align: center; 
  font-size: 1em;
  font-family: 'HelveticaAll';
  font-weight: 800;
  color: black;
  padding: 10%;
  
  @media (max-width: 600px) {
    font-size: 1.3em;
  }
`

const StyledA = styled.a`
  text-decoration: none;
  text-align: center;
`