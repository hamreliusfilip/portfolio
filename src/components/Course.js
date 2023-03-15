import styled from 'styled-components'

const Box = styled.div`
  height: 280px;
  width: 450px;
  margin: 20px;
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
`

const Name = styled.div`
  z-index: 500; 
  text-align: center; 
  font-size: 2.3em;
  font-family: 'Helvetica Neue';
  font-weight: 800;
  color: #DCDCDC;
  padding: 10%;

  &:hover {
    color: #fff;
  }
`

const StyledA = styled.a`
  text-decoration: none;
  text-align: center;
`

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