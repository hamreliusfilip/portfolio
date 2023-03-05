import styled from 'styled-components'

const Box = styled.div`
height: 220px;
min-width: 300px;
margin: 16px -5px 15px 30px;
background-color: #282626;
font-family: 'Helvetica Neue';
color: #282626;
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

const Course = ({ courseName }) => {

  return (
      <Box>
        <Name>{courseName}</Name>
      </Box>
  )
}

export default Course
