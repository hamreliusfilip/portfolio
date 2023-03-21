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
  height: 180px;
  width: 300px;
  margin: 10px;
  text-decoration: none;
  background-color: #242424;
  border-radius: 15px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: all 300ms ease-in-out;
    transform: scale(1.07);
  }

  @media (max-width: 600px) {
    font-size: 1em;
    height: 140px;
    width: 225px;
    margin: 10px;
  }
`

const Name = styled.div`
  z-index: 500; 
  text-align: center; 
  font-size: 1.4em;
  font-family: 'Helvetica Neue';
  font-weight: 800;
  color: #DCDCDC;
  padding: 10%;

  &:hover {
    color: #fff;
  }

  @media (max-width: 600px) {
    font-size: 1.3em;
  }
`

const StyledA = styled.a`
  text-decoration: none;
  text-align: center;
`