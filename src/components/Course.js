import styled from 'styled-components'

const Box = styled.div`
height: 280px;
max-width: 450px;
min-width: 250px;
margin: 20px 20px 20px 20px;
text-decoration: none;
background-color: #242424;
border-radius: 15px;
`

const Name = styled.div`
  z-index: 500; 
  text-align: center; 
  font-size: 2.3em;
  font-family: 'Helvetica Neue';
  font-weight: 800;
  color: #DCDCDC;
  padding: 10% 10% 10% 10%;
`

const Course = ({ courseName }) => {

  return (
      <Box>
        <Name>{courseName}</Name>
      </Box>
  )
}

export default Course
